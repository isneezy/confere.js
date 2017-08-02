import ValidationError from './ValidatorError';

export default {
    required(name, value){
        return new Promise(function (resolve, reject) {
            if (typeof value === 'undefined' || value === null || value == ''){
                reject (new ValidationError(name, `${name} field is required.`));
            }else {
                resolve();
            }
        })
    },
    email(name, value){
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise((resolve, reject) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(value)) resolve();
            reject (new ValidationError(name, `${name} is not a valid email`));
        });
    },

    min(name, value, params){
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise((resolve, reject) => {
            var min = parseInt(params[0]);
            if(value.length < min) reject(new ValidationError(name, `${name} field must have at least ${min} chars in length`));
            else resolve();
        });
    },

    max(name, value, params){
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise((resolve, reject) => {
            var max = parseInt(params[0]);
            if(value.length > max) reject(new ValidationError(name, `${name} field must not pass ${max} chars in length`));
            else resolve();
        });
    },

    exists(name, value, params){
        return new Promise((resolve, reject) =>{
            if(value == 'isneezy'){
                reject(new ValidationError(name, `${name} field must be unique`));
            }

            resolve();
        });
    }
}