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

        return new Promise((resolve, reject) => {
            Promise.all(promises).then(res => {
                resolve();
            }).catch(res => {
                reject(res);
            });
        })
    }
}

export default ConfereJs;