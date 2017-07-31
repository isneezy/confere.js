export default {
    required(name, value){
        return new Promise(function (resolve, reject) {
            if (typeof value === 'undefined' || value === null || value == ''){
                reject({
                    field: name,
                    message: `${name} field is required.`
                })
            }else {
                resolve();
            }
        })
    },
    email(name, value){
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise((resolve, reject) => {
            if(value.indexOf('@') != -1){
                resolve();
            }
            reject({
                field: name,
                message: `${name} is not a valid email`
            })
        });
    },

    min(name, value, params){
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise((resolve, reject) => {
            var min = parseInt(params[0]);
            if(value.length < min) reject({
                field: name,
                message: `${name} field must have at least ${min} chars in length`
            });
            else resolve();
        });
    },

    max(name, value, params){
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise((resolve, reject) => {
            var max = parseInt(params[0]);
            if(value.length > max) reject({
                field: name,
                message: `${name} field must not pass ${max} chars in length`
            });
            else resolve();
        });
    },

    exists(name, value, params){
        return new Promise((resolve, reject) =>{
            if(value == 'isneezy'){
                reject({
                    field: name,
                    message: `${name} field must be unique`
                });
            }

            resolve();
        });
    }
}