(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("conferejs", [], factory);
	else if(typeof exports === 'object')
		exports["conferejs"] = factory();
	else
		root["conferejs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Confere = __webpack_require__(1);

var _Confere2 = _interopRequireDefault(_Confere);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Confere2.default;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validators = __webpack_require__(2);

var validators = _interopRequireWildcard(_validators);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var config = {
    realTime: false,
    validators: validators

    /**
     * Confere JS
     * @param options
     * @constructor
     */
};var ConfereJs = function ConfereJs(options) {
    var _this = this;

    /**
     * Return a promisse that Settles all promises and wait for all to be in a resolved state
     * to resolve o reject
     * @param promises
     * @returns {Promise}
     */
    var settlePromises = function settlePromises(promises) {
        return new Promise(function (resolve, reject) {
            var remaining = promises.length;
            var results = {};

            var checkDone = function checkDone() {
                if (--remaining == 0) {
                    //no results means validation success since we ignored the success results values
                    results.length != 0 ? reject(results) : resolve();
                }
            };

            promises.forEach(function (item, index) {
                // check if the array entry is actually a thenable
                if (typeof item.then === 'function') {
                    item.then(function () {
                        //for now we do not need the success result value
                        checkDone();
                    }).catch(function (err) {
                        if (typeof results[err.field] === 'undefined') results[err.field] = [err];else results[err.field].push(err);
                        checkDone();
                    });
                } else {
                    --remaining;
                }
            });

            if (remaining === 0) {
                // special cases for zero promises
                checkDone();
            }
        });
    };

    this.validators = {};

    // merge our options with the default configuration to do our plugin initial setup
    this.options = Object.assign(options, config);

    //coverts the rules to a usable js objects
    Object.keys(options.rules).map(function (field) {
        _this.validators[field] = {
            field: field,
            validators: []
        };
    });

    Object.keys(options.rules).map(function (key) {
        var validators = options.rules[key].split('|');
        validators.map(function (rule) {
            var validator = rule.split(':')[0];
            var params = rule.split(':').length > 1 ? rule.split(':')[1].split('m') : [];
            if (typeof _this.options.validators[validator] === 'function') {
                _this.validators[key].validators.push(function (value) {
                    return _this.options.validators[validator](key, value, params);
                });
            } else {
                console.warn('Validator \'' + validator + '\' is not registered, did you register correctly?');
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
    };

    /**
     * Validates the input data
     * @param data
     */
    this.validate = function (data) {
        var promises = [];
        Object.keys(_this.validators).map(function (validator) {
            var fieldName = validator;
            var validator = _this.validators[validator]['validators'];
            validator.map(function (v) {
                promises.push(v(data[fieldName]));
            });
        });

        return settlePromises(promises);
    };
};

exports.default = ConfereJs;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    required: function required(name, value) {
        return new Promise(function (resolve, reject) {
            if (typeof value === 'undefined' || value === null || value == '') {
                reject({
                    field: name,
                    message: name + ' field is required.'
                });
            } else {
                resolve();
            }
        });
    },
    email: function email(name, value) {
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise(function (resolve, reject) {
            if (value.indexOf('@') != -1) {
                resolve();
            }
            reject({
                field: name,
                message: name + ' is not a valid email'
            });
        });
    },
    min: function min(name, value, params) {
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise(function (resolve, reject) {
            var min = parseInt(params[0]);
            if (value.length < min) reject({
                field: name,
                message: name + ' field must have at least ' + min + ' chars in length'
            });else resolve();
        });
    },
    max: function max(name, value, params) {
        value = value === null || typeof value === 'undefined' ? '' : value;
        return new Promise(function (resolve, reject) {
            var max = parseInt(params[0]);
            if (value.length > max) reject({
                field: name,
                message: name + ' field must not pass ' + max + ' chars in length'
            });else resolve();
        });
    },
    exists: function exists(name, value, params) {
        return new Promise(function (resolve, reject) {
            if (value == 'isneezy') {
                reject({
                    field: name,
                    message: name + ' field must be unique'
                });
            }

            resolve();
        });
    }
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=conferejs.js.map