import ValidationError from './validators/ValidatorError';
import * as validators from './validators';

var config = {
    realTime: false,
    dateFormat: 'yyyy-MM-dd',
    validators,
    rules: {}
}

/**
 *
 */
class ConfereJs{

    constructor(options){
        this.validators = {};

        ConfereJs.isFormElement (options.rules) ? ConfereJs.parseForm (options.rules, options) : options.rules;

        // merge our options with the default configuration to do our plugin initial setup
        this.options = Object.assign (config, options);

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
                    this.validators[key].validators.push((value) => this.options.validators[validator](key, value, params, this.options));
                }else {
                    console.warn(`Validator '${validator}' is not registered, did you register correctly?`);
                }
            });
        });
    }

    static getDefaults () {
        return config;
    }

    static setDefaults (options) {
        config = Object.assign(config, options);
    }

    /**
     * Return a promisse that Settles all promises and wait for all to be in a resolved state
     * to resolve o reject
     * @param promises
     * @returns {Promise}
     */
    settlePromises (promises) {
        return new Promise ((resolve, reject) => {
            var remaining = promises.length;
            var results = {};

            var checkDone = () => {
                if (--remaining == 0){
                    //no results means validation success since we ignored the success results values
                    var globarError = new Error(`Some information is missing or incorrect`);
                    globarError.result = results;
                    Object.keys(results).length != 0 ? reject(globarError) : resolve();
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

    /**
     * Register new validator
     * @param name validator name (lowercase and no spaces allowed)
     * @param handler function - the validator implementation
     */
    static validator (name, handler) {
        config.validators[name] = handler;
    }

    /**
     * Validates the input data
     * @param data
     */
    validate (data) {
        var promises = [];
        Object.keys(this.validators).map(validator => {
            var fieldName =  validator;
            var validator = this.validators[validator]['validators'];
            validator.map(v => {
                promises.push(v(data[fieldName]));
            });
        });
        return this.settlePromises(promises);
    }

    /**
     * Check if teh object / element is a Html Form Element
     * @returns {boolean}
     * @param elem
     */
    static isFormElement (elem) {
        return elem instanceof HTMLFormElement;
    }

    /**
     * Parses the form and generate auto configuration based on form data attributes
     * specifically data-rule
     * @param formElement
     * @param options
     */
    static parseForm (formElement, options) {
        options.form = formElement;
        var rules = {};
        for (var i = 0; i < formElement.elements.length; i++){
            var name = formElement.elements.item(i).getAttribute('name');
            var rule = formElement.elements.item(i).dataset.rule;
            name != null && typeof name != 'undefined' && name != '' ? rules[name] = rule : false;
        }
        options.rules = rules;
    }
}

export default ConfereJs;
export {
    ConfereJs,
    ValidationError
}