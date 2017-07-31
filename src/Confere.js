import * as validators from './validators';

var config = {
    realTime: false,
    validators
}

/**
 * Confere JS
 * @param options
 * @constructor
 */
var ConfereJs = function (options) {

    /**
     * Return a promisse that Settles all promises and wait for all to be in a resolved state
     * to resolve o reject
     * @param promises
     * @returns {Promise}
     */
    let settlePromises = (promises) => {
        return new Promise ((resolve, reject) => {
            var remaining = promises.length;
            var results = {};

            var checkDone = () => {
                if (--remaining == 0){
                    //no results means validation success since we ignored the success results values
                    results.length != 0 ? reject(results) : resolve();
                }
            };

            promises.forEach ((item, index) => {
                // check if the array entry is actually a thenable
                if (typeof item.then === 'function') {
                    item.then(() => { //for now we do not need the success result value
                        checkDone();
                    }).catch(err => {
                        if(typeof results[err.field] === 'undefined') results[err.field] = [err];
                        else results[err.field].push(err);
                        checkDone();
                    });
                }else {
                    --remaining;
                }
            });

            if (remaining === 0){ // special cases for zero promises
                checkDone();
            }
        });
    }

    this.validators = {};

    // merge our options with the default configuration to do our plugin initial setup
    this.options = Object.assign (options, config);

    //coverts the rules to a usable js objects
    Object.keys(options.rules).map(field => {
        this.validators[field] = {
            field: field,
            validators: []
        }
    });

    Object.keys(options.rules).map(key => {
        var validators = options.rules[key].split('|');
        validators.map(rule => {
            var validator = rule.split(':')[0];
            var params = rule.split(':').length > 1 ? rule.split(':')[1].split('m') : [];
            if(typeof this.options.validators[validator] === 'function'){
                this.validators[key].validators.push((value) => this.options.validators[validator](key, value, params));
            }else {
                console.warn(`Validator '${validator}' is not registered, did you register correctly?`);
            }
        });
    });

    /**
     * Register new validator
     * @param name validator name (lowercase and no spaces allowed)
     * @param handler function - the validator implementation
     */
    this.validator = function (name, handler) {
        this.options.validators[name] = handler;
    }

    /**
     * Validates the input data
     * @param data
     */
    this.validate = (data) => {
        var promises = [];
        Object.keys(this.validators).map(validator => {
            var fieldName =  validator;
            var validator = this.validators[validator]['validators'];
            validator.map(v => {
                promises.push(v(data[fieldName]));
            });
        });

        return settlePromises(promises);
    }
}

export default ConfereJs;