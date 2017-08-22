(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Confere", [], factory);
	else if(typeof exports === 'object')
		exports["Confere"] = factory();
	else
		root["Confere"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidatorError = function (_Error) {
  _inherits(ValidatorError, _Error);

  /**
   * @param field *optional
   * @param message *optional
   */
  function ValidatorError(field, message) {
    _classCallCheck(this, ValidatorError);

    var _this = _possibleConstructorReturn(this, (ValidatorError.__proto__ || Object.getPrototypeOf(ValidatorError)).call(this, message));

    _this.field = field;
    return _this;
  }

  return ValidatorError;
}(Error);

exports.default = ValidatorError;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Confere = __webpack_require__(2);

var _Confere2 = _interopRequireDefault(_Confere);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Confere2.default;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValidationError = exports.ConfereJs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ValidatorError = __webpack_require__(0);

var _ValidatorError2 = _interopRequireDefault(_ValidatorError);

var _validators = __webpack_require__(3);

var _validators2 = _interopRequireDefault(_validators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
    realTime: false,
    dateFormat: 'yyyy-MM-dd',
    validators: _validators2.default,
    rules: {}

    /**
     *
     */
};
var ConfereJs = function () {
    function ConfereJs(options) {
        var _this = this;

        _classCallCheck(this, ConfereJs);

        this.validators = {};

        ConfereJs.isFormElement(options.rules) ? ConfereJs.parseForm(options.rules, options) : options.rules;

        // merge our options with the default configuration to do our plugin initial setup
        this.options = Object.assign(config, options);

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
                var params = rule.split(':').length > 1 ? rule.split(':')[1].split(',') : [];
                if (typeof _this.options.validators[validator] === 'function') {
                    _this.validators[key].validators.push(function (value) {
                        return _this.options.validators[validator](key, value, params, _this.options);
                    });
                } else {
                    console.warn('Validator \'' + validator + '\' is not registered, did you register correctly?');
                }
            });
        });
    }

    _createClass(ConfereJs, [{
        key: 'settlePromises',


        /**
         * Return a promisse that Settles all promises and wait for all to be in a resolved state
         * to resolve o reject
         * @param promises
         * @returns {Promise}
         */
        value: function settlePromises(promises) {
            return new Promise(function (resolve, reject) {
                var remaining = promises.length;
                var results = {};

                var checkDone = function checkDone() {
                    if (--remaining == 0) {
                        //no results means validation success since we ignored the success results values
                        var globarError = new Error('Some information is missing or incorrect');
                        globarError.result = results;
                        Object.keys(results).length != 0 ? reject(globarError) : resolve();
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
        }

        /**
         * Register new validator
         * @param name validator name (lowercase and no spaces allowed)
         * @param handler function - the validator implementation
         */

    }, {
        key: 'validate',


        /**
         * Validates the input data
         * @param data
         */
        value: function validate(data) {
            var _this2 = this;

            data = data == null || typeof data == 'undefined' ? {} : data;
            data = ConfereJs.isFormElement(this.options.form) ? Object.assign(this.parseFormData(this.options.form), data) : data;

            var promises = [];
            Object.keys(this.validators).map(function (validator) {
                var fieldName = validator;
                var validator = _this2.validators[validator]['validators'];
                validator.map(function (v) {
                    promises.push(v(data[fieldName]));
                });
            });
            return this.settlePromises(promises);
        }
    }, {
        key: 'parseFormData',
        value: function parseFormData(element) {
            var data = {};
            Object.keys(element.elements).map(function (key) {
                var name = element.elements[key].getAttribute("name");
                var value = element.elements[key].value;
                data[name] = value;
            });
            return data;
        }

        /**
         * Check if teh object / element is a Html Form Element
         * @returns {boolean}
         * @param elem
         */

    }], [{
        key: 'getDefaults',
        value: function getDefaults() {
            return config;
        }
    }, {
        key: 'setDefaults',
        value: function setDefaults(options) {
            config = Object.assign(config, options);
        }
    }, {
        key: 'validator',
        value: function validator(name, handler) {
            config.validators[name] = handler;
        }
    }, {
        key: 'isFormElement',
        value: function isFormElement(elem) {
            return elem instanceof HTMLFormElement;
        }

        /**
         * Parses the form and generate auto configuration based on form data attributes
         * specifically data-rule
         * @param formElement
         * @param options
         */

    }, {
        key: 'parseForm',
        value: function parseForm(formElement, options) {
            options.form = formElement;
            var rules = {};
            for (var i = 0; i < formElement.elements.length; i++) {
                var name = formElement.elements.item(i).getAttribute('name');
                var rule = formElement.elements.item(i).dataset.rule;
                name != null && typeof name != 'undefined' && name != '' ? rules[name] = rule : false;
            }
            options.rules = rules;
        }
    }]);

    return ConfereJs;
}();

exports.default = ConfereJs;
exports.ConfereJs = ConfereJs;
exports.ValidationError = _ValidatorError2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validators = undefined;

var _ValidatorError = __webpack_require__(0);

var _ValidatorError2 = _interopRequireDefault(_ValidatorError);

var _Dates = __webpack_require__(4);

var _Dates2 = _interopRequireDefault(_Dates);

var _Strings = __webpack_require__(6);

var _Strings2 = _interopRequireDefault(_Strings);

var _Numbers = __webpack_require__(7);

var _Numbers2 = _interopRequireDefault(_Numbers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = Object.assign({
  required: function required(name, value) {
    return new Promise(function (resolve, reject) {
      if (typeof value === 'undefined' || value === null || value == '') {
        reject(new _ValidatorError2.default(name, name + ' field is required.'));
      } else {
        resolve();
      }
    });
  },
  boolean: function boolean(name, value) {
    return new Promise(function (resolve, reject) {
      if (value === 'true' || value === 1 || value === true || value === 'false' || value === 0 || value === false) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be boolean'));
    });
  }
}, _Dates2.default, _Strings2.default, _Numbers2.default);

exports.default = validators;
exports.validators = validators;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _date = __webpack_require__(5);

var _date2 = _interopRequireDefault(_date);

var _ValidatorError = __webpack_require__(0);

var _ValidatorError2 = _interopRequireDefault(_ValidatorError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  date: function date(name, value, params, options) {
    return new Promise(function (resolve, reject) {
      if (_date2.default.isDate(value, options.dateFormat)) resolve();
      reject(new _ValidatorError2.default(name, name + ' field is not a valid date'));
    });
  },
  after: function after(name, value, params, options) {
    return new Promise(function (resolve, reject) {
      var dateFormat = options.dateFormat;
      var date = _date2.default.getDateFromFormat(value, dateFormat);
      var after = _date2.default.getDateFromFormat(params[0], dateFormat);
      if (date > after) {
        resolve();
      }
      reject(new _ValidatorError2.default(name, name + ' field should be after ' + params[0]));
    });
  },
  after_or_equal: function after_or_equal(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    return new Promise(function (resolve, reject) {
      var dateFormat = options.dateFormat;
      var date = _date2.default.getDateFromFormat(value, dateFormat);
      var after = _date2.default.getDateFromFormat(params[0], dateFormat);
      if (date >= after) {
        resolve();
      } else {
        reject(new _ValidatorError2.default(name, name + ' field should be equal or greater than ' + params[0]));
      }
    });
  },
  before: function before(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    return new Promise(function (resolve, reject) {
      if (!(_date2.default.isDate(value, options.dateFormat) && _date2.default.isDate(params[0], options.dateFormat))) resolve();
      var date = _date2.default.getDateFromFormat(value, options.dateFormat);
      var before = _date2.default.getDateFromFormat(params[0], options.dateFormat);
      if (date < before) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be a date before ' + params[0]));
    });
  },
  before_or_equal: function before_or_equal(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    return new Promise(function (resolve, reject) {
      if (!(_date2.default.isDate(value, options.dateFormat) && _date2.default.isDate(params[0], options.dateFormat))) resolve();
      var date = _date2.default.getDateFromFormat(value, options.dateFormat);
      var before = _date2.default.getDateFromFormat(params[0], options.dateFormat);
      if (date <= before) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be a date before or equal ' + params[0]));
    });
  }
};
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// ===================================================================
// Author: Matt Kruse <matt@mattkruse.com>
// WWW: http://www.mattkruse.com/
//
// NOTICE: You may use this code for any purpose, commercial or
// private, without any further permission from the author. You may
// remove this notice from your final code if you wish, however it is
// appreciated by the author if at least my web site address is kept.
//
// You may *NOT* re-distribute this code in any way except through its
// use. That means, you can include it in your product, or your web
// site, or any other form where the code is actually being used. You
// may not put the plain javascript up on your site for download or
// include it in your javascript libraries for download. 
// If you wish to share this code with others, please just point them
// to the URL instead.
// Please DO NOT link directly to my .js files from your site. Copy
// the files to your server and use them there. Thank you.
// ===================================================================

// HISTORY
// ------------------------------------------------------------------
// May 17, 2003: Fixed bug in parseDate() for dates <1970
// March 11, 2003: Added parseDate() function
// March 11, 2003: Added "NNN" formatting option. Doesn't match up
//                 perfectly with SimpleDateFormat formats, but 
//                 backwards-compatability was required.

// ------------------------------------------------------------------
// These functions use the same 'format' strings as the 
// java.text.SimpleDateFormat class, with minor exceptions.
// The format string consists of the following abbreviations:
// 
// Field        | Full Form          | Short Form
// -------------+--------------------+-----------------------
// Year         | yyyy (4 digits)    | yy (2 digits), y (2 or 4 digits)
// Month        | MMM (name or abbr.)| MM (2 digits), M (1 or 2 digits)
//              | NNN (abbr.)        |
// Day of Month | dd (2 digits)      | d (1 or 2 digits)
// Day of Week  | EE (name)          | E (abbr)
// Hour (1-12)  | hh (2 digits)      | h (1 or 2 digits)
// Hour (0-23)  | HH (2 digits)      | H (1 or 2 digits)
// Hour (0-11)  | KK (2 digits)      | K (1 or 2 digits)
// Hour (1-24)  | kk (2 digits)      | k (1 or 2 digits)
// Minute       | mm (2 digits)      | m (1 or 2 digits)
// Second       | ss (2 digits)      | s (1 or 2 digits)
// AM/PM        | a                  |
//
// NOTE THE DIFFERENCE BETWEEN MM and mm! Month=MM, not mm!
// Examples:
//  "MMM d, y" matches: January 01, 2000
//                      Dec 1, 1900
//                      Nov 20, 00
//  "M/d/yy"   matches: 01/20/00
//                      9/2/00
//  "MMM dd, yyyy hh:mm:ssa" matches: "January 01, 2000 12:30:45AM"
// ------------------------------------------------------------------

var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
/**
 * @return {string}
 */
function LZ(x) {
	return (x < 0 || x > 9 ? "" : "0") + x;
}

// ------------------------------------------------------------------
// isDate ( date_string, format_string )
// Returns true if date string matches format of format string and
// is a valid date. Else returns false.
// It is recommended that you trim whitespace around the value before
// passing it to this function, as whitespace is NOT ignored!
// ------------------------------------------------------------------
function isDate(val, format) {
	var date = getDateFromFormat(val, format);
	return date != 0;
}

// -------------------------------------------------------------------
// compareDates(date1,date1format,date2,date2format)
//   Compare two date strings to see which is greater.
//   Returns:
//   1 if date1 is greater than date2
//   0 if date2 is greater than date1 of if they are the same
//  -1 if either of the dates is in an invalid format
// -------------------------------------------------------------------
function compareDates(date1, dateformat1, date2, dateformat2) {
	var d1 = getDateFromFormat(date1, dateformat1);
	var d2 = getDateFromFormat(date2, dateformat2);
	if (d1 == 0 || d2 == 0) {
		return -1;
	} else if (d1 > d2) {
		return 1;
	}
	return 0;
}

// ------------------------------------------------------------------
// formatDate (date_object, format)
// Returns a date in the output format specified.
// The format string uses the same abbreviations as in getDateFromFormat()
// ------------------------------------------------------------------
function formatDate(date, format) {
	format = format + "";
	var result = "";
	var i_format = 0;
	var c = "";
	var token = "";
	var y = date.getYear() + "";
	var M = date.getMonth() + 1;
	var d = date.getDate();
	var E = date.getDay();
	var H = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var yyyy, yy, MMM, MM, dd, hh, h, mm, ss, ampm, HH, H, KK, K, kk, k;
	// Convert real date parts into formatted versions
	var value = new Object();
	if (y.length < 4) {
		y = "" + (y - 0 + 1900);
	}
	value["y"] = "" + y;
	value["yyyy"] = y;
	value["yy"] = y.substring(2, 4);
	value["M"] = M;
	value["MM"] = LZ(M);
	value["MMM"] = MONTH_NAMES[M - 1];
	value["NNN"] = MONTH_NAMES[M + 11];
	value["d"] = d;
	value["dd"] = LZ(d);
	value["E"] = DAY_NAMES[E + 7];
	value["EE"] = DAY_NAMES[E];
	value["H"] = H;
	value["HH"] = LZ(H);
	if (H == 0) {
		value["h"] = 12;
	} else if (H > 12) {
		value["h"] = H - 12;
	} else {
		value["h"] = H;
	}
	value["hh"] = LZ(value["h"]);
	if (H > 11) {
		value["K"] = H - 12;
	} else {
		value["K"] = H;
	}
	value["k"] = H + 1;
	value["KK"] = LZ(value["K"]);
	value["kk"] = LZ(value["k"]);
	if (H > 11) {
		value["a"] = "PM";
	} else {
		value["a"] = "AM";
	}
	value["m"] = m;
	value["mm"] = LZ(m);
	value["s"] = s;
	value["ss"] = LZ(s);
	while (i_format < format.length) {
		c = format.charAt(i_format);
		token = "";
		while (format.charAt(i_format) == c && i_format < format.length) {
			token += format.charAt(i_format++);
		}
		if (value[token] != null) {
			result = result + value[token];
		} else {
			result = result + token;
		}
	}
	return result;
}

// ------------------------------------------------------------------
// Utility functions for parsing in getDateFromFormat()
// ------------------------------------------------------------------
function _isInteger(val) {
	var digits = "1234567890";
	for (var i = 0; i < val.length; i++) {
		if (digits.indexOf(val.charAt(i)) == -1) {
			return false;
		}
	}
	return true;
}
function _getInt(str, i, minlength, maxlength) {
	for (var x = maxlength; x >= minlength; x--) {
		var token = str.substring(i, i + x);
		if (token.length < minlength) {
			return null;
		}
		if (_isInteger(token)) {
			return token;
		}
	}
	return null;
}

// ------------------------------------------------------------------
// getDateFromFormat( date_string , format_string )
//
// This function takes a date string and a format string. It matches
// If the date string matches the format string, it returns the 
// getTime() of the date. If it does not match, it returns 0.
// ------------------------------------------------------------------
function getDateFromFormat(val, format) {
	val = val + "";
	format = format + "";
	var i_val = 0;
	var i_format = 0;
	var c = "";
	var token = "";
	var token2 = "";
	var x, y;
	var now = new Date();
	var year = now.getYear();
	var month = now.getMonth() + 1;
	var date = 1;
	var hh = now.getHours();
	var mm = now.getMinutes();
	var ss = now.getSeconds();
	var ampm = "";

	while (i_format < format.length) {
		// Get next token from format string
		c = format.charAt(i_format);
		token = "";
		while (format.charAt(i_format) == c && i_format < format.length) {
			token += format.charAt(i_format++);
		}
		// Extract contents of value based on format token
		if (token == "yyyy" || token == "yy" || token == "y") {
			if (token == "yyyy") {
				x = 4;y = 4;
			}
			if (token == "yy") {
				x = 2;y = 2;
			}
			if (token == "y") {
				x = 2;y = 4;
			}
			year = _getInt(val, i_val, x, y);
			if (year == null) {
				return 0;
			}
			i_val += year.length;
			if (year.length == 2) {
				if (year > 70) {
					year = 1900 + (year - 0);
				} else {
					year = 2000 + (year - 0);
				}
			}
		} else if (token == "MMM" || token == "NNN") {
			month = 0;
			for (var i = 0; i < MONTH_NAMES.length; i++) {
				var month_name = MONTH_NAMES[i];
				if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) {
					if (token == "MMM" || token == "NNN" && i > 11) {
						month = i + 1;
						if (month > 12) {
							month -= 12;
						}
						i_val += month_name.length;
						break;
					}
				}
			}
			if (month < 1 || month > 12) {
				return 0;
			}
		} else if (token == "EE" || token == "E") {
			for (var i = 0; i < DAY_NAMES.length; i++) {
				var day_name = DAY_NAMES[i];
				if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) {
					i_val += day_name.length;
					break;
				}
			}
		} else if (token == "MM" || token == "M") {
			month = _getInt(val, i_val, token.length, 2);
			if (month == null || month < 1 || month > 12) {
				return 0;
			}
			i_val += month.length;
		} else if (token == "dd" || token == "d") {
			date = _getInt(val, i_val, token.length, 2);
			if (date == null || date < 1 || date > 31) {
				return 0;
			}
			i_val += date.length;
		} else if (token == "hh" || token == "h") {
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || hh < 1 || hh > 12) {
				return 0;
			}
			i_val += hh.length;
		} else if (token == "HH" || token == "H") {
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || hh < 0 || hh > 23) {
				return 0;
			}
			i_val += hh.length;
		} else if (token == "KK" || token == "K") {
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || hh < 0 || hh > 11) {
				return 0;
			}
			i_val += hh.length;
		} else if (token == "kk" || token == "k") {
			hh = _getInt(val, i_val, token.length, 2);
			if (hh == null || hh < 1 || hh > 24) {
				return 0;
			}
			i_val += hh.length;hh--;
		} else if (token == "mm" || token == "m") {
			mm = _getInt(val, i_val, token.length, 2);
			if (mm == null || mm < 0 || mm > 59) {
				return 0;
			}
			i_val += mm.length;
		} else if (token == "ss" || token == "s") {
			ss = _getInt(val, i_val, token.length, 2);
			if (ss == null || ss < 0 || ss > 59) {
				return 0;
			}
			i_val += ss.length;
		} else if (token == "a") {
			if (val.substring(i_val, i_val + 2).toLowerCase() == "am") {
				ampm = "AM";
			} else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") {
				ampm = "PM";
			} else {
				return 0;
			}
			i_val += 2;
		} else {
			if (val.substring(i_val, i_val + token.length) != token) {
				return 0;
			} else {
				i_val += token.length;
			}
		}
	}
	// If there are any trailing characters left in the value, it doesn't match
	if (i_val != val.length) {
		return 0;
	}
	// Is date valid for month?
	if (month == 2) {
		// Check for leap year
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			// leap year
			if (date > 29) {
				return 0;
			}
		} else {
			if (date > 28) {
				return 0;
			}
		}
	}
	if (month == 4 || month == 6 || month == 9 || month == 11) {
		if (date > 30) {
			return 0;
		}
	}
	// Correct hours value
	if (hh < 12 && ampm == "PM") {
		hh = hh - 0 + 12;
	} else if (hh > 11 && ampm == "AM") {
		hh -= 12;
	}
	var newdate = new Date(year, month - 1, date, hh, mm, ss);
	return newdate.getTime();
}

// ------------------------------------------------------------------
// parseDate( date_string [, prefer_euro_format] )
//
// This function takes a date string and tries to match it to a
// number of possible date formats to get the value. It will try to
// match against the following international formats, in this order:
// y-M-d   MMM d, y   MMM d,y   y-MMM-d   d-MMM-y  MMM d
// M/d/y   M-d-y      M.d.y     MMM-d     M/d      M-d
// d/M/y   d-M-y      d.M.y     d-MMM     d/M      d-M
// A second argument may be passed to instruct the method to search
// for formats like d/M/y (european format) before M/d/y (American).
// Returns a Date object or null if no patterns match.
// ------------------------------------------------------------------
function parseDate(val) {
	var preferEuro = arguments.length == 2 ? arguments[1] : false;
	var generalFormats = ['y-M-d', 'MMM d, y', 'MMM d,y', 'y-MMM-d', 'd-MMM-y', 'MMM d'];
	var monthFirst = ['M/d/y', 'M-d-y', 'M.d.y', 'MMM-d', 'M/d', 'M-d'];
	var dateFirst = ['d/M/y', 'd-M-y', 'd.M.y', 'd-MMM', 'd/M', 'd-M'];
	var checkList = ['generalFormats', preferEuro ? 'dateFirst' : 'monthFirst', preferEuro ? 'monthFirst' : 'dateFirst'];
	var d = null;
	for (var i = 0; i < checkList.length; i++) {
		var l = window[checkList[i]];
		for (var j = 0; j < l.length; j++) {
			d = getDateFromFormat(val, l[j]);
			if (d != 0) {
				return new Date(d);
			}
		}
	}
	return null;
}

exports.default = {
	isDate: isDate,
	compareDates: compareDates,
	formatDate: formatDate,
	getDateFromFormat: getDateFromFormat
};
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ValidatorError = __webpack_require__(0);

var _ValidatorError2 = _interopRequireDefault(_ValidatorError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  min: function min(name, value, params) {
    value = value === null || typeof value === 'undefined' ? '' : value;
    return new Promise(function (resolve, reject) {
      var min = parseInt(params[0]);
      if (value.length < min) reject(new _ValidatorError2.default(name, name + ' field must have at least ' + min + ' chars in length'));else resolve();
    });
  },
  max: function max(name, value, params) {
    value = value === null || typeof value === 'undefined' ? '' : value;
    return new Promise(function (resolve, reject) {
      var max = parseInt(params[0]);
      if (value.length > max) reject(new _ValidatorError2.default(name, name + ' field must not pass ' + max + ' chars in length'));else resolve();
    });
  },
  email: function email(name, value) {
    value = value === null || typeof value === 'undefined' ? '' : value;
    return new Promise(function (resolve, reject) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) resolve();
      reject(new _ValidatorError2.default(name, name + ' is not a valid email'));
    });
  },
  alpha: function alpha(name, value) {
    return new Promise(function (resolve, reject) {
      var re = /^[A-z]+$/;
      if (re.test(value)) resolve();
      var error = new _ValidatorError2.default(name, name + ' field only allows alphabet');
      reject(error);
    });
  },
  alpha_dash: function alpha_dash(name, value) {
    return new Promise(function (resolve, reject) {
      var re = /^[a-zA-Z0-9-_]+$/;
      if (re.test(value)) resolve();
      var error = new _ValidatorError2.default(name, name + ' field only allows alphabet, dash and underscore characters');
      reject(error);
    });
  },
  alpha_numeric: function alpha_numeric(name, value) {
    return new Promise(function (resolve, reject) {
      var re = /^[a-zA-Z0-9]*$/;
      if (re.test(value)) resolve();
      var error = new _ValidatorError2.default(name, name + ' field must be alpha numeric');
      reject(error);
    });
  },
  between: function between(name, value) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    return new Promise(function (resolve, reject) {
      var min = parseInt(params[0]);
      var max = parseInt(params[1]);
      var length = value.length;
      if (length > min && length < max) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be between ' + min + ' and ' + max));
    });
  },
  url: function url(name, value) {
    return new Promise(function (resolve, reject) {
      // regex from @diegoperini see https://mathiasbynens.be/demo/url-regex and https://gist.github.com/dperini/729294
      var re = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
      if (re.test(value)) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be a valid url'));
    });
  }
};
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ValidatorError = __webpack_require__(0);

var _ValidatorError2 = _interopRequireDefault(_ValidatorError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  digits: function digits(name, value) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    return new Promise(function (resolve, reject) {
      if (/^\d+$/.test(value) && String(value).length == parseInt(params[0])) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be digits with size = ' + params[0]));
    });
  },
  digits_between: function digits_between(name, value) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    return new Promise(function (resolve, reject) {
      if (/^\d+$/.test(value) && String(value).length > parseInt(params[0]) && String(value).length < parseInt(params[1])) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be digits with size between ' + params[0] + ' and ' + params[1]));
    });
  },
  integer: function integer(name, value) {
    return new Promise(function (resolve, reject) {
      if (/^\d+$/.test(value)) resolve();
      reject(new _ValidatorError2.default(name, name + ' field must be digits with size = ' + params[0]));
    });
  }
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=confere.js.map