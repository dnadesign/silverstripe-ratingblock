(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("@material-ui/lab"), require("@material-ui/core"));
	else if(typeof define === 'function' && define.amd)
		define("silverstripe-react-ratingblock", ["React", "ReactDOM", "@material-ui/lab", "@material-ui/core"], factory);
	else if(typeof exports === 'object')
		exports["silverstripe-react-ratingblock"] = factory(require("react"), require("react-dom"), require("@material-ui/lab"), require("@material-ui/core"));
	else
		root["silverstripe-react-ratingblock"] = factory(root["React"], root["ReactDOM"], root["@material-ui/lab"], root["@material-ui/core"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export register */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if ( true && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    }).catch(function (error) {
      console.error(error.message);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"ReactDOM","root":"ReactDOM"}
var external_commonjs_react_dom_commonjs2_react_dom_amd_ReactDOM_root_ReactDOM_ = __webpack_require__(2);
var external_commonjs_react_dom_commonjs2_react_dom_amd_ReactDOM_root_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_dom_commonjs2_react_dom_amd_ReactDOM_root_ReactDOM_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/loading/loading.scss
var loading_loading = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/loading/loading.js






var loading_Loading = function Loading(props) {
  var showImmediately = props.showImmediately,
      classes = props.classes,
      otherProps = _objectWithoutProperties(props, ["showImmediately", "classes"]),
      _React$useState = external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1]; // Only show the spinner after 1s of inactivity
  // https://material-ui.com/components/progress/#delaying-appearance


  external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.useEffect(function () {
    if (props.showImmediately) {
      setShow(true);
      return;
    }

    var timer = setTimeout(function () {
      setShow(true);
    }, 750);
    return function () {
      return clearTimeout(timer);
    };
  }, [props.showImmediately]);
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "loading ".concat(classes || '')
  }, show && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["CircularProgress"], Object.assign({
    disableShrink: true,
    size: 40
  }, otherProps)), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("span", {
    className: "sr-only"
  }, "Please wait"));
};

/* harmony default export */ var components_loading_loading = (loading_Loading);
// CONCATENATED MODULE: ./src/components/star/star.js

/**
 * custom star svg as thje m,aterial ones had too thick stroke
 */

var star_Star = function Star(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 21 20"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("path", {
    d: "M18.7801293,8.27466498 L12.8268001,7.76130418 L10.5003474,2.28047975 L8.17320044,7.77122151 L2.22308341,8.27602977 L6.74248862,12.1911922 L5.38513229,18.0096159 L10.5,14.922487 L15.6167758,18.0107676 L14.267429,12.1911921 L18.7801293,8.27466498 Z",
    stroke: props.stroke ? props.stroke : '#fff',
    strokeWidth: "0.75px",
    fill: props.fill ? props.fill : 'none'
  }));
};

/* harmony default export */ var star = (star_Star);
// EXTERNAL MODULE: ./src/components/tag/tag.scss
var tag_tag = __webpack_require__(7);

// CONCATENATED MODULE: ./src/components/tag/tag.js




var tag_Tag = function Tag(props) {
  var label = props.label,
      onChange = props.onChange,
      disabled = props.disabled,
      active = props.active,
      _React$useState = external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.useEffect(function () {
    if (props.active) {
      setChecked(true);
    }
  }, [props.active]);
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    key: "tag__".concat(label),
    id: "tag__".concat(label),
    value: label,
    className: "tag__item ".concat(disabled ? 'tag__disabled' : '')
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
    id: "tag__input__".concat(label),
    type: "checkbox",
    defaultChecked: disabled ? active : checked,
    onChange: onChange,
    onClick: function onClick() {
      return setChecked(!checked);
    }
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
    htmlFor: "tag__input__".concat(label)
  }, label));
};

/* harmony default export */ var components_tag_tag = (tag_Tag);
// EXTERNAL MODULE: ./src/components/rating/sass/rating.scss
var sass_rating = __webpack_require__(8);

// CONCATENATED MODULE: ./src/components/rating/rate.component.js







/* eslint-disable no-unreachable */

/* eslint-disable no-undef */

/* eslint-disable one-var */

/* eslint-disable no-unused-vars */








var rate_component_RateComponent = /*#__PURE__*/function (_Component) {
  _inherits(RateComponent, _Component);

  var _super = _createSuper(RateComponent);

  function RateComponent(props) {
    var _this;

    _classCallCheck(this, RateComponent);

    _this = _super.call(this, props); // Page name allows us to store a reference to the page without relying on a page relation

    _this.page = props.page;
    _this.page['name'] = _this.page.name || 'unknown'; // check if this page has been previously rated by looking
    // for thje cookie with the pageName

    var rating = props.value || 0,
        previouslyRated = _this.props.previouslyRated || false;
    _this.state = {
      value: rating,
      hover: -1,
      tags: [],
      comments: _this.props.form.comments.value,
      expanded: _this.props.form.comments.expanded,
      previouslyRated: previouslyRated
    }; // this.renderTags = this.renderTags.bind(this);

    _this.handleTagChange = _this.handleTagChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Expand out the comments area
   */


  _createClass(RateComponent, [{
    key: "setExpand",
    value: function setExpand(e, prevent) {
      prevent && e.preventDefault();
      this.setState({
        expanded: !this.state.expanded
      });
    }
    /**
     * Render title
     */

  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("h3", {
        className: "rating__title"
      }, this.props.form.title || 'Rate this page');
    }
    /**
     * Render comments area
     * - only if enabled in bootData
     */

  }, {
    key: "renderComments",
    value: function renderComments(disabled, submitted) {
      var _this2 = this;

      var commentsClasses = classnames_default()({
        'rating__comments': true,
        'rating__comments--expanded': this.state.expanded
      }),
          _this$props = this.props,
          errors = _this$props.errors,
          stars = _this$props.stars;
      return this.props.form.comments.enabled ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__comments-outer"
      }, stars && (!stars.Tags || stars.Tags.length === 0) && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", {
        ref: "ratingCommentButton",
        className: "rating__comments-toggle",
        onClick: function onClick(e) {
          return _this2.setExpand(e, true);
        },
        "aria-controls": "ratingcomments",
        "aria-expanded": this.state.expanded,
        id: "rating_commnets_expand",
        disabled: disabled || submitted
      }, " Add a comment "), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: commentsClasses,
        id: "ratingcomments",
        "aria-hidden": !this.state.expanded,
        "aria-expanded": this.state.expanded
      }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__comments-field"
      }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
        className: "sr-only",
        htmlFor: this.props.CommentsID
      }, "Additional comments"), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("textarea", {
        ref: "ratingCommentInput",
        rows: 5,
        readOnly: submitted,
        disabled: disabled || submitted || !this.state.expanded,
        value: this.state.comments,
        placeholder: this.props.form.comments.placeholder,
        onChange: function onChange(event) {
          _this2.props.setCommentsValue(event.target.value);

          _this2.setState({
            comments: event.target.value
          });
        },
        name: this.props.form.comments.name,
        "aria-hidden": !this.state.expanded
      }), errors['comments'] && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
        className: "rating__error"
      }, errors['comments'])))) : null;
    }
    /**
     * Render stars
     */

  }, {
    key: "renderStars",
    value: function renderStars(disabled) {
      var _this3 = this;

      var _this$props2 = this.props,
          errors = _this$props2.errors,
          stars = _this$props2.stars,
          descriptionClasses = classnames_default()({
        'rating__description': true,
        'rating__description--disabled': this.state.value === 0
      });
      return stars && stars.Max > 0 && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__stars"
      }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(lab_["Rating"], {
        ref: "ratingStars",
        name: "rating-".concat(this.props.name),
        emptyIcon: /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(star, {
          stroke: "#fff"
        }),
        icon: /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(star, {
          stroke: "#fff",
          fill: "#fff"
        }),
        value: parseInt(this.state.value, 10),
        max: stars.Max,
        onChange: function onChange(event, newValue) {
          _this3.props.setRatingValue(newValue);

          _this3.setState({
            value: newValue || 0
          });

          _this3.state.tags.length > 0 && _this3.setExpand(event, false);

          _this3.setState({
            tags: ''
          });

          _this3.renderTags();
        },
        onChangeActive: function onChangeActive(event, newHover) {
          _this3.setState({
            hover: newHover
          });
        },
        disabled: disabled
      }), this.state.value !== null && stars.Labels && Object.keys(stars.Labels).length > 0 && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
        className: descriptionClasses
      }, stars.Labels[this.state.hover !== -1 ? this.state.hover : this.state.value]), errors['rating'] && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
        className: "rating__error"
      }, "Please select a rating"));
    }
  }, {
    key: "handleTagChange",
    value: function handleTagChange(e, tag) {
      var _this4 = this;

      if (e.currentTarget.checked) {
        this.setState({
          tags: [].concat(_toConsumableArray(this.state.tags), [tag])
        }, function () {
          !_this4.state.expanded && _this4.setExpand(e, false);

          _this4.props.setTagsValue(_toConsumableArray(_this4.state.tags).join(','));
        });
      } else {
        var copy = _toConsumableArray(this.state.tags);

        var index = copy.indexOf(tag);

        if (index > -1) {
          copy.splice(index, 1);
          this.setState({
            tags: copy
          }, function () {
            _this4.state.tags.length === 0 && _this4.setExpand(e, false);

            _this4.props.setTagsValue(copy.join(','));
          });
        }
      }
    }
  }, {
    key: "renderTags",
    value: function renderTags(disabled) {
      var _this5 = this;

      var _this$props3 = this.props,
          stars = _this$props3.stars,
          form = _this$props3.form,
          tagList = form.tags && form.tags.split(',');
      return this.state.value > 0 && stars && stars.Tags && stars.Tags.length > 0 && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__tags",
        ref: "ratingTags"
      }, Object.values(stars.Tags[this.state.value - 1]).map(function (tag) {
        var checked = tagList.includes(tag);
        return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(components_tag_tag, {
          key: "tag_".concat(tag),
          label: tag,
          active: checked,
          disabled: disabled,
          onChange: function onChange(e) {
            return _this5.handleTagChange(e, tag);
          }
        });
      }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
        type: "hidden",
        name: "input_tags",
        id: "input_tags",
        value: this.state.tags
      }));
    }
    /**
     * Render Submit button
     */

  }, {
    key: "renderSubmit",
    value: function renderSubmit(disabled) {
      var _this6 = this;

      return this.state.value > 0 && (!this.props.stars.Tags || this.state.tags.length > 0) && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
        type: "hidden",
        name: "pageName",
        value: this.page.name
      }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
        type: "hidden",
        name: "pageID",
        value: this.page.id
      }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", {
        ref: "ratingSubmit",
        id: "rating_submit",
        type: "submit",
        className: "button button--primary button--small button--cta button--rating rating__action",
        "aria-disabled": disabled,
        disabled: disabled,
        onClick: function onClick(e) {
          _this6.props.onSubmit(e);
        }
      }, "Submit"));
    }
  }, {
    key: "renderIntro",
    value: function renderIntro(loading, submitted) {
      return loading ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__loading"
      }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(components_loading_loading, {
        id: "rating-loading",
        showImmediately: true
      })) : submitted ?
      /*#__PURE__*/
      // has just been submitted - show success message
      external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, null, this.props.form.successMessage ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__result",
        dangerouslySetInnerHTML: {
          __html: this.props.form.successMessage
        }
      }) : /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__result"
      }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", null, "Thank you for your submission"))) : this.state.previouslyRated ?
      /*#__PURE__*/
      // rated in a previous session - dont show any message
      external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null) : this.props.form.intro ?
      /*#__PURE__*/
      // intro
      external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__into",
        dangerouslySetInnerHTML: {
          __html: this.props.form.intro
        }
      }) : /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
    }
    /**
     * States:
     * Ratings disabled (via CMS / bootata) - render empty div
     * Previously Submitted (from cookie) - show title and stars only. Dont show comments
     *      as that could be a security concern
     * Loading - show disaabled form with a spinner
     * Submitted - user has just submitted a rating - show success and disabled form
     * Error - Error from the graphql backend. Only show errors message.
     */

  }, {
    key: "render",
    value: function render() {
      var enabled = this.props.enabled;

      if (!enabled) {
        return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
          "data-rating-disabled": true
        });
      }

      var _this$props4 = this.props,
          name = _this$props4.name,
          errors = _this$props4.errors,
          loading = _this$props4.loading,
          form = _this$props4.form,
          disabled = this.state.previouslyRated || loading || form.submitted,
          classes = classnames_default()({
        'rating': true,
        'rating--disabled': disabled,
        'rating--expanded': this.state.expanded,
        'rating__rated': this.state.value > 0 && !this.state.previouslyRated
      });
      return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: classes,
        "data-rating-enabled": true,
        "data-rating-name": name
      }, errors && errors.response ?
      /*#__PURE__*/
      // errors returned from graphql. dont render anything else
      external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "rating__message"
      }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", null, "An errors occurred", /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("br", null), "Please try again later")) : /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("form", {
        className: "rating__form"
      }, this.renderTitle(), this.renderIntro(loading, form.submitted), this.renderStars(disabled), this.renderTags(disabled), !this.state.previouslyRated && /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Fragment, null, this.renderComments(disabled, form.submitted), this.renderSubmit(disabled))));
    }
  }]);

  return RateComponent;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

/* harmony default export */ var rate_component = (rate_component_RateComponent);
// CONCATENATED MODULE: ./src/components/rating/index.js


// EXTERNAL MODULE: ./src/serviceWorker.js
var serviceWorker = __webpack_require__(5);

// EXTERNAL MODULE: ./src/index.scss
var src = __webpack_require__(10);

// CONCATENATED MODULE: ./src/index.js





var src_rating = 0;

var setRatingValue = function setRatingValue(value) {
  src_rating = value;
},
    setCommentsValue = function setCommentsValue(value) {
  console.log(value);
  src_form.comments.value = value;
},
    setTagsValue = function setTagsValue(value) {
  if (src_form.tags.includes(value)) {
    src_form.tags = arrayRemove(src_form.tags, value);
  } else {
    src_form.tags.push(value);
  }

  console.log(src_form.tags.toString());
},
    arrayRemove = function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
},
    onSubmit = function onSubmit(e) {
  e.preventDefault();
  src_form.submitted = true;
  return src_form.submitted;
},
    src_form = {
  successMessage: window.RatingBlock.RatingFormSuccessMessage,
  intro: window.RatingBlock.RatingFormIntro,
  title: window.RatingBlock.RatingFormTitle,
  submitted: false,
  comments: {
    id: window.RatingBlock.CommentsID,
    enabled: window.RatingBlock.EnableComments,
    value: '',
    name: window.RatingBlock.CommentsName,
    placeholder: window.RatingBlock.CommentsPlaceholder
  },
  tags: []
},
    page = {
  id: window.RatingBlock.PageID,
  name: window.RatingBlock.PageName
},
    src_stars = {
  Labels: window.RatingBlock.RatingStars.Labels,
  Max: window.RatingBlock.RatingStars ? window.RatingBlock.RatingStars.Max === 0 ? {
    'Max': 5
  } : window.RatingBlock.RatingStars : {
    'Max': 5
  },
  Tags: window.RatingBlock.RatingStars.Tags
};

external_commonjs_react_dom_commonjs2_react_dom_amd_ReactDOM_root_ReactDOM_default.a.render(window.RatingBlock ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(rate_component, {
  name: "Rating block",
  errors: [],
  value: src_rating,
  loading: false,
  stars: src_stars,
  form: src_form,
  page: page,
  previouslyRated: false,
  enabled: true,
  setRatingValue: setRatingValue,
  setCommentsValue: setCommentsValue,
  setTagsValue: setTagsValue,
  onSubmit: onSubmit
}) : /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", null, "No data provided"), document.getElementById('rating_block')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker["a" /* unregister */]();

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map