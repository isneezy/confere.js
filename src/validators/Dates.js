import dateFn from '../vendor/date';
import Error from "./ValidatorError";
export default {
    date (name, value, params, options) {
        return new Promise((resolve, reject) => {
            if(dateFn.isDate(value, options.dateFormat)) resolve();
            reject(new Error(name, `${name} field is not a valid date`));
        })
    },

    after (name, value, params, options){
        return new Promise((resolve, reject) => {
            var dateFormat = options.dateFormat;
            var date = new Date(value);
            var after = new Date(params[0]);
            if(date > after) {
                resolve();
            }
            reject(new Error(name, `${name} field should be after ${params[0]}`));
        })
    }
}