/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(6);
var isBuffer = __webpack_require__(19);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(21);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(7);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(7);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(22);
var buildURL = __webpack_require__(24);
var parseHeaders = __webpack_require__(25);
var isURLSameOrigin = __webpack_require__(26);
var createError = __webpack_require__(8);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(28);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(23);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(70);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(38);



// Vue.component('user-list', require('./components/User.vue'));
Vue.use(HighchartsVue.default);
new Vue({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts_vue__);




window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_highcharts_vue___default.a);
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  module.exports = require('./vue.common.prod.js')
} else {
  module.exports = __webpack_require__(15)
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(16).setImmediate))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(17);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(5)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(6);
var Axios = __webpack_require__(20);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(10);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(9);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(29);
var dispatchRequest = __webpack_require__(30);
var isAbsoluteURL = __webpack_require__(32);
var combineURLs = __webpack_require__(33);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(31);
var isCancel = __webpack_require__(9);
var defaults = __webpack_require__(4);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(10);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(37)):"function"==typeof define&&define.amd?define(["highcharts"],e):"object"==typeof exports?exports.HighchartsVue=e(require("highcharts")):t.HighchartsVue=e(t.Highcharts)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,r){e.exports=t},function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.tagName||"highcharts",Object(o.a)(e.highcharts||i.a))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,r.d(e,"Chart",function(){return a});var o=r(2),c=r(0),i=r.n(c),a=Object(o.a)(i.a)},function(t,e,r){"use strict";function n(t){return i(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var a=r(3),s=function(t){return{template:'<div ref="chart"></div>',render:function(t){return t("div",{ref:"chart"})},props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}},highcharts:{type:Object},deepCopyOnUpdate:{type:Boolean,default:!0}},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[Object(a.a)(t,this.deepCopyOnUpdate)].concat(n(this.updateArgs)))},deep:!0}},mounted:function(){var e=this.highcharts||t;this.options&&e[this.constructorType]?this.chart=e[this.constructorType](this.$refs.chart,Object(a.a)(this.options,!0),this.callback?this.callback:null):this.options?console.warn("'".concat(this.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')},beforeDestroy:function(){this.chart&&this.chart.destroy()}}};e.a=s},function(t,e,r){"use strict";function n(t,e,r){function o(o,i){!c.a.isObject(o,!r)||c.a.isClass(o)||c.a.isDOMElement(o)?t[i]=e[i]:t[i]=n(t[i]||c.a.isArray(o)?[]:{},o,r)}return c.a.isArray(e)?e.forEach(o):c.a.objectEach(e,o),t}r.d(e,"a",function(){return i});var o=r(0),c=r.n(o),i=function(t,e){return n({},t,e)}}])});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.0.4 (2020-03-10)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(aa,S){"object"===typeof module&&module.exports?(S["default"]=S,module.exports=aa.document?S(aa):S): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S(aa)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(aa.Highcharts&&aa.Highcharts.error(16,!0),aa.Highcharts=S(aa))})("undefined"!==typeof window?window:this,function(aa){function S(d,g,W,u){d.hasOwnProperty(g)||(d[g]=u.apply(null,W))}var r={};S(r,"parts/Globals.js",[],function(){var d="undefined"!==typeof aa?aa:"undefined"!==typeof window?window:
{},g=d.document,W=d.navigator&&d.navigator.userAgent||"",u=g&&g.createElementNS&&!!g.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,r=/(edge|msie|trident)/i.test(W)&&!d.opera,M=-1!==W.indexOf("Firefox"),E=-1!==W.indexOf("Chrome"),A=M&&4>parseInt(W.split("Firefox/")[1],10);return{product:"Highcharts",version:"8.0.4",deg2rad:2*Math.PI/360,doc:g,hasBidiBug:A,hasTouch:!!d.TouchEvent,isMS:r,isWebKit:-1!==W.indexOf("AppleWebKit"),isFirefox:M,isChrome:E,isSafari:!E&&-1!==W.indexOf("Safari"),
isTouchDevice:/(Mobile|Android|Windows Phone)/.test(W),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:u,win:d,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});S(r,"parts/Utilities.js",[r["parts/Globals.js"]],function(d){function g(){var b,a=arguments,m={},f=function(b,a){"object"!==typeof b&&(b={});Y(a,function(m,c){!h(m,!0)||q(m)||N(m)?b[c]=a[c]:b[c]=f(b[c]||{},m)});return b};!0===a[0]&&(m=a[1],a=Array.prototype.slice.call(a,
2));var c=a.length;for(b=0;b<c;b++)m=f(m,a[b]);return m}function W(b,a,m){var f;t(a)?c(m)?b.setAttribute(a,m):b&&b.getAttribute&&((f=b.getAttribute(a))||"class"!==a||(f=b.getAttribute(a+"Name"))):Y(a,function(a,m){b.setAttribute(m,a)});return f}function u(){for(var b=arguments,a=b.length,m=0;m<a;m++){var f=b[m];if("undefined"!==typeof f&&null!==f)return f}}function r(b,a){if(!b)return a;var m=b.split(".").reverse();if(1===m.length)return a[b];for(b=m.pop();"undefined"!==typeof b&&"undefined"!==typeof a&&
null!==a;)a=a[b],b=m.pop();return a}d.timers=[];var M=d.charts,E=d.doc,A=d.win,G=d.error=function(b,a,m,f){var c=P(b),p=c?"Highcharts error #"+b+": www.highcharts.com/errors/"+b+"/":b.toString(),e=function(){if(a)throw Error(p);A.console&&console.log(p)};if("undefined"!==typeof f){var x="";c&&(p+="?");d.objectEach(f,function(b,a){x+="\n"+a+": "+b;c&&(p+=encodeURI(a)+"="+encodeURI(b))});p+=x}m?d.fireEvent(m,"displayError",{code:b,message:p,params:f},e):e()},J=function(){function b(b,a,m){this.options=
a;this.elem=b;this.prop=m}b.prototype.dSetter=function(){var b=this.paths[0],a=this.paths[1],m=[],f=this.now,c=b.length;if(1===f)m=this.toD;else if(c===a.length&&1>f)for(;c--;){var p=parseFloat(b[c]);m[c]=isNaN(p)||"A"===a[c-4]||"A"===a[c-5]?a[c]:f*parseFloat(""+(a[c]-p))+p}else m=a;this.elem.attr("d",m,null,!0)};b.prototype.update=function(){var b=this.elem,a=this.prop,m=this.now,f=this.options.step;if(this[a+"Setter"])this[a+"Setter"]();else b.attr?b.element&&b.attr(a,m,null,!0):b.style[a]=m+this.unit;
f&&f.call(b,m,this)};b.prototype.run=function(b,a,m){var f=this,c=f.options,p=function(b){return p.stopped?!1:f.step(b)},e=A.requestAnimationFrame||function(b){setTimeout(b,13)},x=function(){for(var b=0;b<d.timers.length;b++)d.timers[b]()||d.timers.splice(b--,1);d.timers.length&&e(x)};b!==a||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=b,this.end=a,this.unit=m,this.now=this.start,this.pos=0,p.elem=this.elem,p.prop=this.prop,p()&&1===d.timers.push(p)&&e(x)):(delete c.curAnim[this.prop],
c.complete&&0===Object.keys(c.curAnim).length&&c.complete.call(this.elem))};b.prototype.step=function(b){var a=+new Date,m=this.options,f=this.elem,c=m.complete,p=m.duration,e=m.curAnim;if(f.attr&&!f.element)b=!1;else if(b||a>=p+this.startTime){this.now=this.end;this.pos=1;this.update();var x=e[this.prop]=!0;Y(e,function(b){!0!==b&&(x=!1)});x&&c&&c.call(f);b=!1}else this.pos=m.easing((a-this.startTime)/p),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b};b.prototype.initPath=
function(b,a,m){function f(b){for(C=b.length;C--;){var a="M"===b[C]||"L"===b[C];var m=/[a-zA-Z]/.test(b[C+3]);a&&m&&b.splice(C+1,0,b[C+1],b[C+2],b[C+1],b[C+2])}}function c(b,a){for(;b.length<v;){b[0]=a[v-b.length];var m=b.slice(0,T);[].splice.apply(b,[0,0].concat(m));k&&(m=b.slice(b.length-T),[].splice.apply(b,[b.length,0].concat(m)),C--)}b[0]="M"}function p(b,a){for(var m=(v-b.length)/T;0<m&&m--;)l=b.slice().splice(b.length/n-T,T*n),l[0]=a[v-T-m*T],F&&(l[T-6]=l[T-2],l[T-5]=l[T-1]),[].splice.apply(b,
[b.length/n,0].concat(l)),k&&m--}a=a||"";var e=b.startX,x=b.endX,F=-1<a.indexOf("C"),T=F?7:3,l,C;a=a.split(" ");m=m.slice();var k=b.isArea,n=k?2:1;F&&(f(a),f(m));if(e&&x){for(C=0;C<e.length;C++)if(e[C]===x[0]){var V=C;break}else if(e[0]===x[x.length-e.length+C]){V=C;var w=!0;break}else if(e[e.length-1]===x[x.length-e.length+C]){V=e.length-C;break}"undefined"===typeof V&&(a=[])}if(a.length&&P(V)){var v=m.length+V*n*T;w?(c(a,m),p(m,a)):(c(m,a),p(a,m))}return[a,m]};b.prototype.fillSetter=function(){d.Fx.prototype.strokeSetter.apply(this,
arguments)};b.prototype.strokeSetter=function(){this.elem.attr(this.prop,d.color(this.start).tweenTo(d.color(this.end),this.pos),null,!0)};return b}();d.Fx=J;d.merge=g;var y=d.pInt=function(b,a){return parseInt(b,a||10)},t=d.isString=function(b){return"string"===typeof b},D=d.isArray=function(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b},h=d.isObject=function(b,a){return!!b&&"object"===typeof b&&(!a||!D(b))},N=d.isDOMElement=function(b){return h(b)&&
"number"===typeof b.nodeType},q=d.isClass=function(b){var a=b&&b.constructor;return!(!h(b,!0)||N(b)||!a||!a.name||"Object"===a.name)},P=d.isNumber=function(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b},e=d.erase=function(b,a){for(var m=b.length;m--;)if(b[m]===a){b.splice(m,1);break}},c=d.defined=function(b){return"undefined"!==typeof b&&null!==b};d.attr=W;var k=d.splat=function(b){return D(b)?b:[b]},n=d.syncTimeout=function(b,a,m){if(0<a)return setTimeout(b,a,m);b.call(0,m);return-1},
f=d.clearTimeout=function(b){c(b)&&clearTimeout(b)},a=d.extend=function(b,a){var m;b||(b={});for(m in a)b[m]=a[m];return b};d.pick=u;var l=d.css=function(b,m){d.isMS&&!d.svg&&m&&"undefined"!==typeof m.opacity&&(m.filter="alpha(opacity="+100*m.opacity+")");a(b.style,m)},v=d.createElement=function(b,m,f,c,p){b=E.createElement(b);m&&a(b,m);p&&l(b,{padding:"0",border:"none",margin:"0"});f&&l(b,f);c&&c.appendChild(b);return b},z=d.extendClass=function(b,m){var f=function(){};f.prototype=new b;a(f.prototype,
m);return f},w=d.pad=function(b,a,m){return Array((a||2)+1-String(b).replace("-","").length).join(m||"0")+b},B=d.relativeLength=function(b,a,m){return/%$/.test(b)?a*parseFloat(b)/100+(m||0):parseFloat(b)},L=d.wrap=function(b,a,m){var f=b[a];b[a]=function(){var b=Array.prototype.slice.call(arguments),a=arguments,c=this;c.proceed=function(){f.apply(c,arguments.length?arguments:a)};b.unshift(f);b=m.apply(this,b);c.proceed=null;return b}},Q=d.format=function(b,a,m){var f="{",c=!1,p=[],e=/f$/,x=/\.([0-9])/,
F=d.defaultOptions.lang,C=m&&m.time||d.time;for(m=m&&m.numberFormatter||T;b;){var l=b.indexOf(f);if(-1===l)break;var k=b.slice(0,l);if(c){k=k.split(":");f=r(k.shift()||"",a);if(k.length&&"number"===typeof f)if(k=k.join(":"),e.test(k)){var n=parseInt((k.match(x)||["","-1"])[1],10);null!==f&&(f=m(f,n,F.decimalPoint,-1<k.indexOf(",")?F.thousandsSep:""))}else f=C.dateFormat(k,f);p.push(f)}else p.push(k);b=b.slice(l+1);f=(c=!c)?"}":"{"}p.push(b);return p.join("")},H=d.getMagnitude=function(b){return Math.pow(10,
Math.floor(Math.log(b)/Math.LN10))},K=d.normalizeTickInterval=function(b,a,m,f,c){var p=b;m=u(m,1);var e=b/m;a||(a=c?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===f&&(1===m?a=a.filter(function(b){return 0===b%1}):.1>=m&&(a=[1/m])));for(f=0;f<a.length&&!(p=a[f],c&&p*m>=b||!c&&e<=(a[f]+(a[f+1]||a[f]))/2);f++);return p=O(p*m,-Math.round(Math.log(.001)/Math.LN10))},p=d.stableSort=function(b,a){var m=b.length,f,c;for(c=0;c<m;c++)b[c].safeI=c;b.sort(function(b,m){f=a(b,m);return 0===f?b.safeI-m.safeI:
f});for(c=0;c<m;c++)delete b[c].safeI},b=d.arrayMin=function(b){for(var a=b.length,m=b[0];a--;)b[a]<m&&(m=b[a]);return m},C=d.arrayMax=function(b){for(var a=b.length,m=b[0];a--;)b[a]>m&&(m=b[a]);return m},x=d.destroyObjectProperties=function(b,a){Y(b,function(m,f){m&&m!==a&&m.destroy&&m.destroy();delete b[f]})},R=d.discardElement=function(b){var a=d.garbageBin;a||(a=v("div"));b&&a.appendChild(b);a.innerHTML=""},O=d.correctFloat=function(b,a){return parseFloat(b.toPrecision(a||14))},X=d.setAnimation=
function(b,a){a.renderer.globalAnimation=u(b,a.options.chart.animation,!0)},U=d.animObject=function(b){return h(b)?g(b):{duration:b?500:0}},m=d.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},T=d.numberFormat=function(b,a,m,f){b=+b||0;a=+a;var c=d.defaultOptions.lang,p=(b.toString().split(".")[1]||"").split("e")[0].length,e=b.toString().split("e");if(-1===a)a=Math.min(p,20);else if(!P(a))a=2;else if(a&&e[1]&&0>e[1]){var x=a+ +e[1];0<=x?(e[0]=
(+e[0]).toExponential(x).split("e")[0],a=x):(e[0]=e[0].split(".")[0]||0,b=20>a?(e[0]*Math.pow(10,e[1])).toFixed(a):0,e[1]=0)}var F=(Math.abs(e[1]?e[0]:b)+Math.pow(10,-Math.max(a,p)-1)).toFixed(a);p=String(y(F));x=3<p.length?p.length%3:0;m=u(m,c.decimalPoint);f=u(f,c.thousandsSep);b=(0>b?"-":"")+(x?p.substr(0,x)+f:"");b+=p.substr(x).replace(/(\d{3})(?=\d)/g,"$1"+f);a&&(b+=m+F.slice(-a));e[1]&&0!==+b&&(b+="e"+e[1]);return b};Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*b)-1)};var Z=d.getStyle=
function(b,a,m){if("width"===a)return a=Math.min(b.offsetWidth,b.scrollWidth),m=b.getBoundingClientRect&&b.getBoundingClientRect().width,m<a&&m>=a-1&&(a=Math.floor(m)),Math.max(0,a-d.getStyle(b,"padding-left")-d.getStyle(b,"padding-right"));if("height"===a)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-d.getStyle(b,"padding-top")-d.getStyle(b,"padding-bottom"));A.getComputedStyle||G(27,!0);if(b=A.getComputedStyle(b,void 0))b=b.getPropertyValue(a),u(m,"opacity"!==a)&&(b=y(b));return b},
ca=d.inArray=function(b,a,m){return a.indexOf(b,m)},F=d.find=Array.prototype.find?function(b,a){return b.find(a)}:function(b,a){var m,f=b.length;for(m=0;m<f;m++)if(a(b[m],m))return b[m]};d.keys=Object.keys;var V=d.offset=function(b){var a=E.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0};return{top:b.top+(A.pageYOffset||a.scrollTop)-(a.clientTop||0),left:b.left+(A.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}},ba=d.stop=function(b,a){for(var m=d.timers.length;m--;)d.timers[m].elem!==
b||a&&a!==d.timers[m].prop||(d.timers[m].stopped=!0)},Y=d.objectEach=function(b,a,m){for(var f in b)Object.hasOwnProperty.call(b,f)&&a.call(m||b[f],b[f],f,b)};Y({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,a){d[a]=function(a){return Array.prototype[b].apply(a,[].slice.call(arguments,1))}});var fa=d.addEvent=function(b,a,m,f){void 0===f&&(f={});var c=b.addEventListener||d.addEventListenerPolyfill;var p="function"===typeof b&&b.prototype?b.prototype.protoEvents=b.prototype.protoEvents||
{}:b.hcEvents=b.hcEvents||{};d.Point&&b instanceof d.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=!0);c&&c.call(b,a,m,!1);p[a]||(p[a]=[]);p[a].push({fn:m,order:"number"===typeof f.order?f.order:Infinity});p[a].sort(function(b,a){return b.order-a.order});return function(){da(b,a,m)}},da=d.removeEvent=function(b,a,m){function f(a,m){var f=b.removeEventListener||d.removeEventListenerPolyfill;f&&f.call(b,a,m,!1)}function c(m){var c;if(b.nodeName){if(a){var p={};p[a]=!0}else p=m;Y(p,
function(b,a){if(m[a])for(c=m[a].length;c--;)f(a,m[a][c].fn)})}}var p;["protoEvents","hcEvents"].forEach(function(e,x){var F=(x=x?b:b.prototype)&&x[e];F&&(a?(p=F[a]||[],m?(F[a]=p.filter(function(b){return m!==b.fn}),f(a,m)):(c(F),F[a]=[])):(c(F),x[e]={}))})},ha=d.fireEvent=function(b,m,f,c){var p;f=f||{};if(E.createEvent&&(b.dispatchEvent||b.fireEvent)){var e=E.createEvent("Events");e.initEvent(m,!0,!0);a(e,f);b.dispatchEvent?b.dispatchEvent(e):b.fireEvent(m,e)}else f.target||a(f,{preventDefault:function(){f.defaultPrevented=
!0},target:b,type:m}),function(a,m){void 0===a&&(a=[]);void 0===m&&(m=[]);var c=0,e=0,x=a.length+m.length;for(p=0;p<x;p++)!1===(a[c]?m[e]?a[c].order<=m[e].order?a[c++]:m[e++]:a[c++]:m[e++]).fn.call(b,f)&&f.preventDefault()}(b.protoEvents&&b.protoEvents[m],b.hcEvents&&b.hcEvents[m]);c&&!f.defaultPrevented&&c.call(b,f)},ia=d.animate=function(b,a,m){var f,c="",p,e;if(!h(m)){var x=arguments;m={duration:x[2],easing:x[3],complete:x[4]}}P(m.duration)||(m.duration=400);m.easing="function"===typeof m.easing?
m.easing:Math[m.easing]||Math.easeInOutSine;m.curAnim=g(a);Y(a,function(x,F){ba(b,F);e=new J(b,m,F);p=null;"d"===F?(e.paths=e.initPath(b,b.d,a.d),e.toD=a.d,f=0,p=1):b.attr?f=b.attr(F):(f=parseFloat(Z(b,F))||0,"opacity"!==F&&(c="px"));p||(p=x);p&&p.match&&p.match("px")&&(p=p.replace(/px/g,""));e.run(f,p,c)})},ja=d.seriesType=function(b,a,m,f,c){var p=d.getOptions(),e=d.seriesTypes;p.plotOptions[b]=g(p.plotOptions[a],m);e[b]=z(e[a]||function(){},f);e[b].prototype.type=b;c&&(e[b].prototype.pointClass=
z(d.Point,c));return e[b]},ea=d.uniqueKey=function(){var b=Math.random().toString(36).substring(2,9),a=0;return function(){return"highcharts-"+b+"-"+a++}}(),ka=d.isFunction=function(b){return"function"===typeof b};A.jQuery&&(A.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (d[t(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):M[W(this[0],"data-highcharts-chart")]});return{Fx:J,addEvent:fa,animate:ia,animObject:U,arrayMax:C,arrayMin:b,attr:W,clamp:function(b,
a,m){return b>a?b<m?b:m:a},clearTimeout:f,correctFloat:O,createElement:v,css:l,defined:c,destroyObjectProperties:x,discardElement:R,erase:e,error:G,extend:a,extendClass:z,find:F,fireEvent:ha,format:Q,getMagnitude:H,getNestedProperty:r,getStyle:Z,inArray:ca,isArray:D,isClass:q,isDOMElement:N,isFunction:ka,isNumber:P,isObject:h,isString:t,merge:g,normalizeTickInterval:K,numberFormat:T,objectEach:Y,offset:V,pad:w,pick:u,pInt:y,relativeLength:B,removeEvent:da,seriesType:ja,setAnimation:X,splat:k,stableSort:p,
stop:ba,syncTimeout:n,timeUnits:m,uniqueKey:ea,wrap:L}});S(r,"parts/Color.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var W=g.isNumber,u=g.merge,r=g.pInt;g=function(){function d(g){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(d){return[r(d[1]),r(d[2]),r(d[3]),parseFloat(d[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(d){return[r(d[1]),r(d[2]),
r(d[3]),1]}}];this.rgba=[];if(!(this instanceof d))return new d(g);this.init(g)}d.parse=function(g){return new d(g)};d.prototype.init=function(g){var A,G;if((this.input=g=d.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=g.stops.map(function(t){return new d(t[1])});else{if(g&&g.charAt&&"#"===g.charAt()){var u=g.length;g=parseInt(g.substr(1),16);7===u?A=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===u&&(A=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|g&240,(g&15)<<4|g&15,1])}if(!A)for(G=this.parsers.length;G--&&
!A;){var y=this.parsers[G];(u=y.regex.exec(g))&&(A=y.parse(u))}}this.rgba=A||[]};d.prototype.get=function(d){var g=this.input,G=this.rgba;if("undefined"!==typeof this.stops){var E=u(g);E.stops=[].concat(E.stops);this.stops.forEach(function(g,t){E.stops[t]=[E.stops[t][0],g.get(d)]})}else E=G&&W(G[0])?"rgb"===d||!d&&1===G[3]?"rgb("+G[0]+","+G[1]+","+G[2]+")":"a"===d?G[3]:"rgba("+G.join(",")+")":g;return E};d.prototype.brighten=function(d){var g,u=this.rgba;if(this.stops)this.stops.forEach(function(g){g.brighten(d)});
else if(W(d)&&0!==d)for(g=0;3>g;g++)u[g]+=r(255*d),0>u[g]&&(u[g]=0),255<u[g]&&(u[g]=255);return this};d.prototype.setOpacity=function(d){this.rgba[3]=d;return this};d.prototype.tweenTo=function(d,g){var u=this.rgba,A=d.rgba;A.length&&u&&u.length?(d=1!==A[3]||1!==u[3],g=(d?"rgba(":"rgb(")+Math.round(A[0]+(u[0]-A[0])*(1-g))+","+Math.round(A[1]+(u[1]-A[1])*(1-g))+","+Math.round(A[2]+(u[2]-A[2])*(1-g))+(d?","+(A[3]+(u[3]-A[3])*(1-g)):"")+")"):g=d.input||"none";return g};d.names={white:"#ffffff",black:"#000000"};
return d}();d.Color=g;d.color=g.parse;return d.Color});S(r,"parts/SvgRenderer.js",[r["parts/Globals.js"],r["parts/Color.js"],r["parts/Utilities.js"]],function(d,g,r){var u=g.parse,I=r.addEvent,M=r.animate,E=r.animObject,A=r.attr,G=r.createElement,J=r.css,y=r.defined,t=r.destroyObjectProperties,D=r.erase,h=r.extend,N=r.inArray,q=r.isArray,P=r.isNumber,e=r.isObject,c=r.isString,k=r.merge,n=r.objectEach,f=r.pick,a=r.pInt,l=r.removeEvent,v=r.splat,z=r.stop,w=r.uniqueKey,B=d.charts,L=d.deg2rad,Q=d.doc,
H=d.hasTouch,K=d.isFirefox,p=d.isMS,b=d.isWebKit,C=d.noop,x=d.svg,R=d.SVG_NS,O=d.symbolSizes,X=d.win;var U=d.SVGElement=function(){return this};h(U.prototype,{opacity:1,SVG_NS:R,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(b,a){this.element="span"===a?G(a):Q.createElementNS(this.SVG_NS,a);this.renderer=b;d.fireEvent(this,"afterInit")},animate:function(b,a,c){var m=E(f(a,this.renderer.globalAnimation,
!0));f(Q.hidden,Q.msHidden,Q.webkitHidden,!1)&&(m.duration=0);0!==m.duration?(c&&(m.complete=c),M(this,b,m)):(this.attr(b,void 0,c),n(b,function(b,a){m.step&&m.step.call(this,b,{prop:a,pos:1})},this));return this},complexColor:function(b,a,f){var m=this.renderer,c,p,e,x,T,C,l,v,z,Z,O,R=[],B;d.fireEvent(this.renderer,"complexColor",{args:arguments},function(){b.radialGradient?p="radialGradient":b.linearGradient&&(p="linearGradient");p&&(e=b[p],T=m.gradients,l=b.stops,Z=f.radialReference,q(e)&&(b[p]=
e={x1:e[0],y1:e[1],x2:e[2],y2:e[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===p&&Z&&!y(e.gradientUnits)&&(x=e,e=k(e,m.getRadialAttr(Z,x),{gradientUnits:"userSpaceOnUse"})),n(e,function(b,a){"id"!==a&&R.push(a,b)}),n(l,function(b){R.push(b)}),R=R.join(","),T[R]?O=T[R].attr("id"):(e.id=O=w(),T[R]=C=m.createElement(p).attr(e).add(m.defs),C.radAttr=x,C.stops=[],l.forEach(function(b){0===b[1].indexOf("rgba")?(c=u(b[1]),v=c.get("rgb"),z=c.get("a")):(v=b[1],z=1);b=m.createElement("stop").attr({offset:b[0],
"stop-color":v,"stop-opacity":z}).add(C);C.stops.push(b)})),B="url("+m.url+"#"+O+")",f.setAttribute(a,B),f.gradient=R,b.toString=function(){return B})})},applyTextOutline:function(b){var a=this.element,m;-1!==b.indexOf("contrast")&&(b=b.replace(/contrast/g,this.renderer.getContrast(a.style.fill)));b=b.split(" ");var f=b[b.length-1];if((m=b[0])&&"none"!==m&&d.svg){this.fakeTS=!0;b=[].slice.call(a.getElementsByTagName("tspan"));this.ySetter=this.xSetter;m=m.replace(/(^[\d\.]+)(.*?)$/g,function(b,a,
m){return 2*a+m});this.removeTextOutline(b);var c=a.textContent?/^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(a.textContent):!1;var p=a.firstChild;b.forEach(function(b,e){0===e&&(b.setAttribute("x",a.getAttribute("x")),e=a.getAttribute("y"),b.setAttribute("y",e||0),null===e&&a.setAttribute("y",0));e=b.cloneNode(!0);A(c&&!K?b:e,{"class":"highcharts-text-outline",fill:f,stroke:f,"stroke-width":m,"stroke-linejoin":"round"});a.insertBefore(e,p)});c&&K&&b[0]&&(b=b[0].cloneNode(!0),b.textContent=
" ",a.insertBefore(b,p))}},removeTextOutline:function(b){for(var a=b.length,m;a--;)m=b[a],"highcharts-text-outline"===m.getAttribute("class")&&D(b,this.element.removeChild(m))},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(b,a,f,c){var m=this.element,p,e=this,x,C,l=this.symbolCustomAttribs;if("string"===typeof b&&"undefined"!==typeof a){var T=b;b={};b[T]=a}"string"===typeof b?e=(this[b+"Getter"]||this._defaultGetter).call(this,b,m):(n(b,
function(a,f){x=!1;c||z(this,f);this.symbolName&&-1!==N(f,l)&&(p||(this.symbolAttr(b),p=!0),x=!0);!this.rotation||"x"!==f&&"y"!==f||(this.doTransform=!0);x||(C=this[f+"Setter"]||this._defaultSetter,C.call(this,a,f,m),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(f)&&this.updateShadows(f,a,C))},this),this.afterSetters());f&&f.call(this);return e},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(b,
a,f){for(var m=this.shadows,c=m.length;c--;)f.call(m[c],"height"===b?Math.max(a-(m[c].cutHeight||0),0):"d"===b?this.d:a,b,m[c])},addClass:function(b,a){var m=a?"":this.attr("class")||"";b=(b||"").split(/ /g).reduce(function(b,a){-1===m.indexOf(a)&&b.push(a);return b},m?[m]:[]).join(" ");b!==m&&this.attr("class",b);return this},hasClass:function(b){return-1!==(this.attr("class")||"").split(" ").indexOf(b)},removeClass:function(b){return this.attr("class",(this.attr("class")||"").replace(c(b)?new RegExp(" ?"+
b+" ?"):b,""))},symbolAttr:function(b){var a=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(m){a[m]=f(b[m],a[m])});a.attr({d:a.renderer.symbols[a.symbolName](a.x,a.y,a.width,a.height,a)})},clip:function(b){return this.attr("clip-path",b?"url("+this.renderer.url+"#"+b.id+")":"none")},crisp:function(b,a){a=a||b.strokeWidth||0;var m=Math.round(a)%2/2;b.x=Math.floor(b.x||this.x||0)+m;b.y=Math.floor(b.y||this.y||0)+m;b.width=Math.floor((b.width||this.width||
0)-2*m);b.height=Math.floor((b.height||this.height||0)-2*m);y(b.strokeWidth)&&(b.strokeWidth=a);return b},css:function(b){var m=this.styles,f={},c=this.element,p="",e=!m,C=["textOutline","textOverflow","width"];b&&b.color&&(b.fill=b.color);m&&n(b,function(b,a){b!==m[a]&&(f[a]=b,e=!0)});if(e){m&&(b=h(m,f));if(b)if(null===b.width||"auto"===b.width)delete this.textWidth;else if("text"===c.nodeName.toLowerCase()&&b.width)var l=this.textWidth=a(b.width);this.styles=b;l&&!x&&this.renderer.forExport&&delete b.width;
if(c.namespaceURI===this.SVG_NS){var k=function(b,a){return"-"+a.toLowerCase()};n(b,function(b,a){-1===C.indexOf(a)&&(p+=a.replace(/([A-Z])/g,k)+":"+b+";")});p&&A(c,"style",p)}else J(c,b);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),b&&b.textOutline&&this.applyTextOutline(b.textOutline))}return this},getStyle:function(b){return X.getComputedStyle(this.element||this,"").getPropertyValue(b)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||
0;var b=this.getStyle("stroke-width"),f=0;if(b.indexOf("px")===b.length-2)f=a(b);else if(""!==b){var c=Q.createElementNS(R,"rect");A(c,{width:b,"stroke-width":0});this.element.parentNode.appendChild(c);f=c.getBBox().width;c.parentNode.removeChild(c)}return f},on:function(b,a){var m,f,c=this.element,p;H&&"click"===b?(c.ontouchstart=function(b){m=b.touches[0].clientX;f=b.touches[0].clientY},c.ontouchend=function(b){m&&4<=Math.sqrt(Math.pow(m-b.changedTouches[0].clientX,2)+Math.pow(f-b.changedTouches[0].clientY,
2))||a.call(c,b);p=!0;b.preventDefault()},c.onclick=function(b){p||a.call(c,b)}):c["on"+b]=a;return this},setRadialReference:function(b){var a=this.renderer.gradients[this.element.gradient];this.element.radialReference=b;a&&a.radAttr&&a.animate(this.renderer.getRadialAttr(b,a.radAttr));return this},translate:function(b,a){return this.attr({translateX:b,translateY:a})},invert:function(b){this.inverted=b;this.updateTransform();return this},updateTransform:function(){var b=this.translateX||0,a=this.translateY||
0,c=this.scaleX,p=this.scaleY,e=this.inverted,x=this.rotation,C=this.matrix,l=this.element;e&&(b+=this.width,a+=this.height);b=["translate("+b+","+a+")"];y(C)&&b.push("matrix("+C.join(",")+")");e?b.push("rotate(90) scale(-1,1)"):x&&b.push("rotate("+x+" "+f(this.rotationOriginX,l.getAttribute("x"),0)+" "+f(this.rotationOriginY,l.getAttribute("y")||0)+")");(y(c)||y(p))&&b.push("scale("+f(c,1)+" "+f(p,1)+")");b.length&&l.setAttribute("transform",b.join(" "))},toFront:function(){var b=this.element;b.parentNode.appendChild(b);
return this},align:function(b,a,p){var m,e={};var x=this.renderer;var C=x.alignedObjects;var l,k;if(b){if(this.alignOptions=b,this.alignByTranslate=a,!p||c(p))this.alignTo=m=p||"renderer",D(C,this),C.push(this),p=null}else b=this.alignOptions,a=this.alignByTranslate,m=this.alignTo;p=f(p,x[m],x);m=b.align;x=b.verticalAlign;C=(p.x||0)+(b.x||0);var T=(p.y||0)+(b.y||0);"right"===m?l=1:"center"===m&&(l=2);l&&(C+=(p.width-(b.width||0))/l);e[a?"translateX":"x"]=Math.round(C);"bottom"===x?k=1:"middle"===
x&&(k=2);k&&(T+=(p.height-(b.height||0))/k);e[a?"translateY":"y"]=Math.round(T);this[this.placed?"animate":"attr"](e);this.placed=!0;this.alignAttr=e;return this},getBBox:function(b,a){var m,c=this.renderer,p=this.element,e=this.styles,x=this.textStr,C,l=c.cache,k=c.cacheKeys,T=p.namespaceURI===this.SVG_NS;a=f(a,this.rotation,0);var n=c.styledMode?p&&U.prototype.getStyle.call(p,"font-size"):e&&e.fontSize;if(y(x)){var v=x.toString();-1===v.indexOf("<")&&(v=v.replace(/[0-9]/g,"0"));v+=["",a,n,this.textWidth,
e&&e.textOverflow].join()}v&&!b&&(m=l[v]);if(!m){if(T||c.forExport){try{(C=this.fakeTS&&function(b){[].forEach.call(p.querySelectorAll(".highcharts-text-outline"),function(a){a.style.display=b})})&&C("none"),m=p.getBBox?h({},p.getBBox()):{width:p.offsetWidth,height:p.offsetHeight},C&&C("")}catch(ea){""}if(!m||0>m.width)m={width:0,height:0}}else m=this.htmlGetBBox();c.isSVG&&(b=m.width,c=m.height,T&&(m.height=c={"11px,17":14,"13px,20":16}[e&&e.fontSize+","+Math.round(c)]||c),a&&(e=a*L,m.width=Math.abs(c*
Math.sin(e))+Math.abs(b*Math.cos(e)),m.height=Math.abs(c*Math.cos(e))+Math.abs(b*Math.sin(e))));if(v&&0<m.height){for(;250<k.length;)delete l[k.shift()];l[v]||k.push(v);l[v]=m}}return m},show:function(b){return this.attr({visibility:b?"inherit":"visible"})},hide:function(b){b?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this},fadeOut:function(b){var a=this;a.animate({opacity:0},{duration:b||150,complete:function(){a.attr({y:-9999})}})},add:function(b){var a=this.renderer,m=this.element;
b&&(this.parentGroup=b);this.parentInverted=b&&b.inverted;"undefined"!==typeof this.textStr&&a.buildText(this);this.added=!0;if(!b||b.handleZ||this.zIndex)var f=this.zIndexSetter();f||(b?b.element:a.box).appendChild(m);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(b){var a=b.parentNode;a&&a.removeChild(b)},destroy:function(){var b=this,a=b.element||{},f=b.renderer,c=f.isSVG&&"SPAN"===a.nodeName&&b.parentGroup,p=a.ownerSVGElement,e=b.clipPath;a.onclick=a.onmouseout=a.onmouseover=
a.onmousemove=a.point=null;z(b);e&&p&&([].forEach.call(p.querySelectorAll("[clip-path],[CLIP-PATH]"),function(b){-1<b.getAttribute("clip-path").indexOf(e.element.id)&&b.removeAttribute("clip-path")}),b.clipPath=e.destroy());if(b.stops){for(p=0;p<b.stops.length;p++)b.stops[p]=b.stops[p].destroy();b.stops=null}b.safeRemoveChild(a);for(f.styledMode||b.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)a=c.parentGroup,b.safeRemoveChild(c.div),delete c.div,c=a;b.alignTo&&D(f.alignedObjects,b);n(b,
function(a,m){b[m]&&b[m].parentGroup===b&&b[m].destroy&&b[m].destroy();delete b[m]})},shadow:function(b,a,c){var m=[],p,e=this.element;if(!b)this.destroyShadows();else if(!this.shadows){var x=f(b.width,3);var C=(b.opacity||.15)/x;var l=this.parentInverted?"(-1,-1)":"("+f(b.offsetX,1)+", "+f(b.offsetY,1)+")";for(p=1;p<=x;p++){var k=e.cloneNode(0);var n=2*x+1-2*p;A(k,{stroke:b.color||"#000000","stroke-opacity":C*p,"stroke-width":n,transform:"translate"+l,fill:"none"});k.setAttribute("class",(k.getAttribute("class")||
"")+" highcharts-shadow");c&&(A(k,"height",Math.max(A(k,"height")-n,0)),k.cutHeight=n);a?a.element.appendChild(k):e.parentNode&&e.parentNode.insertBefore(k,e);m.push(k)}this.shadows=m}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(b){this.safeRemoveChild(b)},this);this.shadows=void 0},xGetter:function(b){"circle"===this.element.nodeName&&("x"===b?b="cx":"y"===b&&(b="cy"));return this._defaultGetter(b)},_defaultGetter:function(b){b=f(this[b+"Value"],this[b],this.element?
this.element.getAttribute(b):null,0);/^[\-0-9\.]+$/.test(b)&&(b=parseFloat(b));return b},dSetter:function(b,a,f){b&&b.join&&(b=b.join(" "));/(NaN| {2}|^$)/.test(b)&&(b="M 0 0");this[a]!==b&&(f.setAttribute(a,b),this[a]=b)},dashstyleSetter:function(b){var f,c=this["stroke-width"];"inherit"===c&&(c=1);if(b=b&&b.toLowerCase()){b=b.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,
"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(f=b.length;f--;)b[f]=a(b[f])*c;b=b.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",b)}},alignSetter:function(b){var a={left:"start",center:"middle",right:"end"};a[b]&&(this.alignValue=b,this.element.setAttribute("text-anchor",a[b]))},opacitySetter:function(b,a,f){this[a]=b;f.setAttribute(a,b)},titleSetter:function(b){var a=this.element.getElementsByTagName("title")[0];a||(a=Q.createElementNS(this.SVG_NS,"title"),
this.element.appendChild(a));a.firstChild&&a.removeChild(a.firstChild);a.appendChild(Q.createTextNode(String(f(b,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))},textSetter:function(b){b!==this.textStr&&(delete this.bBox,delete this.textPxLength,this.textStr=b,this.added&&this.renderer.buildText(this))},setTextPath:function(b,a){var f=this.element,c={textAnchor:"text-anchor"},m=!1,p=this.textPathWrapper,e=!p;a=k(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},
a);var x=a.attributes;if(b&&a&&a.enabled){p&&null===p.element.parentNode?(e=!0,p=p.destroy()):p&&this.removeTextOutline.call(p.parentGroup,[].slice.call(f.getElementsByTagName("tspan")));this.options&&this.options.padding&&(x.dx=-this.options.padding);p||(this.textPathWrapper=p=this.renderer.createElement("textPath"),m=!0);var l=p.element;(a=b.element.getAttribute("id"))||b.element.setAttribute("id",a=w());if(e)for(b=f.getElementsByTagName("tspan");b.length;)b[0].setAttribute("y",0),P(x.dx)&&b[0].setAttribute("x",
-x.dx),l.appendChild(b[0]);m&&p.add({element:this.text?this.text.element:f});l.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+a);y(x.dy)&&(l.parentNode.setAttribute("dy",x.dy),delete x.dy);y(x.dx)&&(l.parentNode.setAttribute("dx",x.dx),delete x.dx);n(x,function(b,a){l.setAttribute(c[a]||a,b)});f.removeAttribute("transform");this.removeTextOutline.call(p,[].slice.call(f.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});
this.applyTextOutline=this.updateTransform=C}else p&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(f,b),this.updateTransform(),this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this},destroyTextPath:function(b,a){var f=b.getElementsByTagName("text")[0];if(f){if(f.removeAttribute("dx"),f.removeAttribute("dy"),a.element.setAttribute("id",""),f.getElementsByTagName("textPath").length){for(b=this.textPathWrapper.element.childNodes;b.length;)f.appendChild(b[0]);
f.removeChild(this.textPathWrapper.element)}}else if(b.getAttribute("dx")||b.getAttribute("dy"))b.removeAttribute("dx"),b.removeAttribute("dy");this.textPathWrapper=this.textPathWrapper.destroy()},fillSetter:function(b,a,f){"string"===typeof b?f.setAttribute(a,b):b&&this.complexColor(b,a,f)},visibilitySetter:function(b,a,f){"inherit"===b?f.removeAttribute(a):this[a]!==b&&f.setAttribute(a,b);this[a]=b},zIndexSetter:function(b,f){var c=this.renderer,m=this.parentGroup,p=(m||c).element||c.box,e=this.element,
x=!1;c=p===c.box;var C=this.added;var l;y(b)?(e.setAttribute("data-z-index",b),b=+b,this[f]===b&&(C=!1)):y(this[f])&&e.removeAttribute("data-z-index");this[f]=b;if(C){(b=this.zIndex)&&m&&(m.handleZ=!0);f=p.childNodes;for(l=f.length-1;0<=l&&!x;l--){m=f[l];C=m.getAttribute("data-z-index");var k=!y(C);if(m!==e)if(0>b&&k&&!c&&!l)p.insertBefore(e,f[l]),x=!0;else if(a(C)<=b||k&&(!y(b)||0<=b))p.insertBefore(e,f[l+1]||null),x=!0}x||(p.insertBefore(e,f[c?3:0]||null),x=!0)}return x},_defaultSetter:function(b,
a,f){f.setAttribute(a,b)}});U.prototype.yGetter=U.prototype.xGetter;U.prototype.translateXSetter=U.prototype.translateYSetter=U.prototype.rotationSetter=U.prototype.verticalAlignSetter=U.prototype.rotationOriginXSetter=U.prototype.rotationOriginYSetter=U.prototype.scaleXSetter=U.prototype.scaleYSetter=U.prototype.matrixSetter=function(b,a){this[a]=b;this.doTransform=!0};U.prototype["stroke-widthSetter"]=U.prototype.strokeSetter=function(b,a,f){this[a]=b;this.stroke&&this["stroke-width"]?(U.prototype.fillSetter.call(this,
this.stroke,"stroke",f),f.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===a&&0===b&&this.hasStroke?(f.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(f.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};g=d.SVGRenderer=function(){this.init.apply(this,arguments)};h(g.prototype,{Element:U,SVG_NS:R,init:function(a,f,c,p,e,x,C){var m=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});
C||m.css(this.getStyle(p));p=m.element;a.appendChild(p);A(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&A(p,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=p;this.boxWrapper=m;this.alignedObjects=[];this.url=(K||b)&&Q.getElementsByTagName("base").length?X.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(Q.createTextNode("Created with Highcharts 8.0.4"));this.defs=this.createElement("defs").add();
this.allowHTML=x;this.forExport=e;this.styledMode=C;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,c,!1);var l;K&&a.getBoundingClientRect&&(f=function(){J(a,{left:0,top:0});l=a.getBoundingClientRect();J(a,{left:Math.ceil(l.left)-l.left+"px",top:Math.ceil(l.top)-l.top+"px"})},f(),this.unSubPixelFix=I(X,"resize",f))},definition:function(b){function a(b,c){var p;v(b).forEach(function(b){var m=f.createElement(b.tagName),e={};n(b,function(b,a){"tagName"!==a&&"children"!==
a&&"textContent"!==a&&(e[a]=b)});m.attr(e);m.add(c||f.defs);b.textContent&&m.element.appendChild(Q.createTextNode(b.textContent));a(b.children||[],m);p=m});return p}var f=this;return a(b)},getStyle:function(b){return this.style=h({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},b)},setStyle:function(b){this.boxWrapper.css(this.getStyle(b))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var b=this.defs;this.box=null;
this.boxWrapper=this.boxWrapper.destroy();t(this.gradients||{});this.gradients=null;b&&(this.defs=b.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(b){var a=new this.Element;a.init(this,b);return a},draw:C,getRadialAttr:function(b,a){return{cx:b[0]-b[2]/2+a.cx*b[2],cy:b[1]-b[2]/2+a.cy*b[2],r:a.r*b[2]}},truncate:function(b,a,f,c,p,e,x){var m=this,C=b.rotation,l,k=c?1:0,F=(f||c).length,n=F,v=[],w=function(b){a.firstChild&&a.removeChild(a.firstChild);
b&&a.appendChild(Q.createTextNode(b))},z=function(e,l){l=l||e;if("undefined"===typeof v[l])if(a.getSubStringLength)try{v[l]=p+a.getSubStringLength(0,c?l+1:l)}catch(la){""}else m.getSpanWidth&&(w(x(f||c,e)),v[l]=p+m.getSpanWidth(b,a));return v[l]},O;b.rotation=0;var T=z(a.textContent.length);if(O=p+T>e){for(;k<=F;)n=Math.ceil((k+F)/2),c&&(l=x(c,n)),T=z(n,l&&l.length-1),k===F?k=F+1:T>e?F=n-1:k=n;0===F?w(""):f&&F===f.length-1||w(l||x(f||c,n))}c&&c.splice(0,n);b.actualWidth=T;b.rotation=C;return O},escapes:{"&":"&amp;",
"<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},buildText:function(b){var c=b.element,p=this,e=p.forExport,m=f(b.textStr,"").toString(),l=-1!==m.indexOf("<"),C=c.childNodes,k,v=A(c,"x"),w=b.styles,z=b.textWidth,O=w&&w.lineHeight,q=w&&w.textOutline,B=w&&"ellipsis"===w.textOverflow,d=w&&"nowrap"===w.whiteSpace,N=w&&w.fontSize,X,h=C.length;w=z&&!b.added&&this.box;var L=function(b){var f;p.styledMode||(f=/(px|em)$/.test(b&&b.style.fontSize)?b.style.fontSize:N||p.style.fontSize||12);return O?a(O):p.fontMetrics(f,
b.getAttribute("style")?b:c).h},t=function(b,a){n(p.escapes,function(f,c){a&&-1!==a.indexOf(f)||(b=b.toString().replace(new RegExp(f,"g"),c))});return b},U=function(b,a){var f=b.indexOf("<");b=b.substring(f,b.indexOf(">")-f);f=b.indexOf(a+"=");if(-1!==f&&(f=f+a.length+1,a=b.charAt(f),'"'===a||"'"===a))return b=b.substring(f+1),b.substring(0,b.indexOf(a))},P=/<br.*?>/g;var g=[m,B,d,O,q,N,z].join();if(g!==b.textCache){for(b.textCache=g;h--;)c.removeChild(C[h]);l||q||B||z||-1!==m.indexOf(" ")&&(!d||
P.test(m))?(w&&w.appendChild(c),l?(m=p.styledMode?m.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,'<span class="highcharts-emphasized">'):m.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),m=m.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(P)):m=[m],m=m.filter(function(b){return""!==b}),m.forEach(function(a,f){var m=0,l=0;a=a.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,
"</span>|||");var C=a.split("|||");C.forEach(function(a){if(""!==a||1===C.length){var n={},F=Q.createElementNS(p.SVG_NS,"tspan"),w,O;(w=U(a,"class"))&&A(F,"class",w);if(w=U(a,"style"))w=w.replace(/(;| |^)color([ :])/,"$1fill$2"),A(F,"style",w);(O=U(a,"href"))&&!e&&(A(F,"onclick",'location.href="'+O+'"'),A(F,"class","highcharts-anchor"),p.styledMode||J(F,{cursor:"pointer"}));a=t(a.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==a){F.appendChild(Q.createTextNode(a));m?n.dx=0:f&&null!==v&&(n.x=v);
A(F,n);c.appendChild(F);!m&&X&&(!x&&e&&J(F,{display:"block"}),A(F,"dy",L(F)));if(z){var q=a.replace(/([^\^])-/g,"$1- ").split(" ");n=!d&&(1<C.length||f||1<q.length);O=0;var T=L(F);if(B)k=p.truncate(b,F,a,void 0,0,Math.max(0,z-parseInt(N||12,10)),function(b,a){return b.substring(0,a)+"\u2026"});else if(n)for(;q.length;)q.length&&!d&&0<O&&(F=Q.createElementNS(R,"tspan"),A(F,{dy:T,x:v}),w&&A(F,"style",w),F.appendChild(Q.createTextNode(q.join(" ").replace(/- /g,"-"))),c.appendChild(F)),p.truncate(b,F,
null,q,0===O?l:0,z,function(b,a){return q.slice(0,a).join(" ").replace(/- /g,"-")}),l=b.actualWidth,O++}m++}}});X=X||c.childNodes.length}),B&&k&&b.attr("title",t(b.textStr,["&lt;","&gt;"])),w&&w.removeChild(c),q&&b.applyTextOutline&&b.applyTextOutline(q)):c.appendChild(Q.createTextNode(t(m)))}},getContrast:function(b){b=u(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"},button:function(b,a,f,c,e,x,l,C,n,w){var m=this.label(b,a,f,n,null,null,w,null,"button"),F=0,v=
this.styledMode;m.attr(k({padding:8,r:2},e));if(!v){e=k({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},e);var z=e.style;delete e.style;x=k(e,{fill:"#e6e6e6"},x);var O=x.style;delete x.style;l=k(e,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},l);var q=l.style;delete l.style;C=k(e,{style:{color:"#cccccc"}},C);var R=C.style;delete C.style}I(m.element,p?"mouseover":"mouseenter",function(){3!==F&&m.setState(1)});I(m.element,
p?"mouseout":"mouseleave",function(){3!==F&&m.setState(F)});m.setState=function(b){1!==b&&(m.state=F=b);m.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][b||0]);v||m.attr([e,x,l,C][b||0]).css([z,O,q,R][b||0])};v||m.attr(e).css(h({cursor:"default"},z));return m.on("click",function(b){3!==F&&c.call(m,b)})},crispLine:function(b,a){b[1]===b[4]&&(b[1]=b[4]=Math.round(b[1])-a%2/2);b[2]===b[5]&&(b[2]=b[5]=Math.round(b[2])+
a%2/2);return b},path:function(b){var a=this.styledMode?{}:{fill:"none"};q(b)?a.d=b:e(b)&&h(a,b);return this.createElement("path").attr(a)},circle:function(b,a,f){b=e(b)?b:"undefined"===typeof b?{}:{x:b,y:a,r:f};a=this.createElement("circle");a.xSetter=a.ySetter=function(b,a,f){f.setAttribute("c"+a,b)};return a.attr(b)},arc:function(b,a,f,c,p,x){e(b)?(c=b,a=c.y,f=c.r,b=c.x):c={innerR:c,start:p,end:x};b=this.symbol("arc",b,a,f,f,c);b.r=f;return b},rect:function(b,a,f,c,p,x){p=e(b)?b.r:p;var m=this.createElement("rect");
b=e(b)?b:"undefined"===typeof b?{}:{x:b,y:a,width:Math.max(f,0),height:Math.max(c,0)};this.styledMode||("undefined"!==typeof x&&(b.strokeWidth=x,b=m.crisp(b)),b.fill="none");p&&(b.r=p);m.rSetter=function(b,a,f){m.r=b;A(f,{rx:b,ry:b})};m.rGetter=function(){return m.r};return m.attr(b)},setSize:function(b,a,c){var p=this.alignedObjects,e=p.length;this.width=b;this.height=a;for(this.boxWrapper.animate({width:b,height:a},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},
duration:f(c,!0)?void 0:0});e--;)p[e].align()},g:function(b){var a=this.createElement("g");return b?a.attr({"class":"highcharts-"+b}):a},image:function(b,a,f,c,p,e){var x={preserveAspectRatio:"none"},m=function(b,a){b.setAttributeNS?b.setAttributeNS("http://www.w3.org/1999/xlink","href",a):b.setAttribute("hc-svg-href",a)},l=function(a){m(C.element,b);e.call(C,a)};1<arguments.length&&h(x,{x:a,y:f,width:c,height:p});var C=this.createElement("image").attr(x);e?(m(C.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
x=new X.Image,I(x,"load",l),x.src=b,x.complete&&l({})):m(C.element,b);return C},symbol:function(b,a,c,p,e,x){var m=this,l=/^url\((.*?)\)$/,C=l.test(b),k=!C&&(this.symbols[b]?b:"circle"),n=k&&this.symbols[k],F=y(a)&&n&&n.call(this.symbols,Math.round(a),Math.round(c),p,e,x);if(n){var w=this.path(F);m.styledMode||w.attr("fill","none");h(w,{symbolName:k,x:a,y:c,width:p,height:e});x&&h(w,x)}else if(C){var v=b.match(l)[1];w=this.image(v);w.imgwidth=f(O[v]&&O[v].width,x&&x.width);w.imgheight=f(O[v]&&O[v].height,
x&&x.height);var z=function(){w.attr({width:w.width,height:w.height})};["width","height"].forEach(function(b){w[b+"Setter"]=function(b,a){var f={},c=this["img"+a],p="width"===a?"translateX":"translateY";this[a]=b;y(c)&&(x&&"within"===x.backgroundSize&&this.width&&this.height&&(c=Math.round(c*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(a,c),this.alignByTranslate||(f[p]=((this[a]||0)-c)/2,this.attr(f)))}});y(a)&&w.attr({x:a,y:c});w.isImg=!0;
y(w.imgwidth)&&y(w.imgheight)?z():(w.attr({width:0,height:0}),G("img",{onload:function(){var b=B[m.chartIndex];0===this.width&&(J(this,{position:"absolute",top:"-999em"}),Q.body.appendChild(this));O[v]={width:this.width,height:this.height};w.imgwidth=this.width;w.imgheight=this.height;w.element&&z();this.parentNode&&this.parentNode.removeChild(this);m.imgCount--;if(!m.imgCount&&b&&!b.hasLoaded)b.onload()},src:v}),this.imgCount++)}return w},symbols:{circle:function(b,a,f,c){return this.arc(b+f/2,a+
c/2,f/2,c/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(b,a,f,c){return["M",b,a,"L",b+f,a,b+f,a+c,b,a+c,"Z"]},triangle:function(b,a,f,c){return["M",b+f/2,a,"L",b+f,a+c,b,a+c,"Z"]},"triangle-down":function(b,a,f,c){return["M",b,a,"L",b+f,a,b+f/2,a+c,"Z"]},diamond:function(b,a,f,c){return["M",b+f/2,a,"L",b+f,a+c/2,b+f/2,a+c,b,a+c/2,"Z"]},arc:function(b,a,c,p,e){var x=e.start,m=e.r||c,l=e.r||p||c,C=e.end-.001;c=e.innerR;p=f(e.open,.001>Math.abs(e.end-e.start-2*Math.PI));var k=Math.cos(x),
n=Math.sin(x),w=Math.cos(C);C=Math.sin(C);x=f(e.longArc,.001>e.end-x-Math.PI?0:1);m=["M",b+m*k,a+l*n,"A",m,l,0,x,f(e.clockwise,1),b+m*w,a+l*C];y(c)&&m.push(p?"M":"L",b+c*w,a+c*C,"A",c,c,0,x,y(e.clockwise)?1-e.clockwise:0,b+c*k,a+c*n);m.push(p?"":"Z");return m},callout:function(b,a,f,c,p){var e=Math.min(p&&p.r||0,f,c),x=e+6,l=p&&p.anchorX;p=p&&p.anchorY;var m=["M",b+e,a,"L",b+f-e,a,"C",b+f,a,b+f,a,b+f,a+e,"L",b+f,a+c-e,"C",b+f,a+c,b+f,a+c,b+f-e,a+c,"L",b+e,a+c,"C",b,a+c,b,a+c,b,a+c-e,"L",b,a+e,"C",
b,a,b,a,b+e,a];l&&l>f?p>a+x&&p<a+c-x?m.splice(13,3,"L",b+f,p-6,b+f+6,p,b+f,p+6,b+f,a+c-e):m.splice(13,3,"L",b+f,c/2,l,p,b+f,c/2,b+f,a+c-e):l&&0>l?p>a+x&&p<a+c-x?m.splice(33,3,"L",b,p+6,b-6,p,b,p-6,b,a+e):m.splice(33,3,"L",b,c/2,l,p,b,c/2,b,a+e):p&&p>c&&l>b+x&&l<b+f-x?m.splice(23,3,"L",l+6,a+c,l,a+c+6,l-6,a+c,b+e,a+c):p&&0>p&&l>b+x&&l<b+f-x&&m.splice(3,3,"L",l-6,a,l,a-6,l+6,a,f-e,a);return m}},clipRect:function(b,a,f,c){var p=w()+"-",e=this.createElement("clipPath").attr({id:p}).add(this.defs);b=this.rect(b,
a,f,c,0).add(e);b.id=p;b.clipPath=e;b.count=0;return b},text:function(b,a,f,c){var p={};if(c&&(this.allowHTML||!this.forExport))return this.html(b,a,f);p.x=Math.round(a||0);f&&(p.y=Math.round(f));y(b)&&(p.text=b);b=this.createElement("text").attr(p);c||(b.xSetter=function(b,a,f){var c=f.getElementsByTagName("tspan"),p=f.getAttribute(a),e;for(e=0;e<c.length;e++){var x=c[e];x.getAttribute(a)===p&&x.setAttribute(a,b)}f.setAttribute(a,b)});return b},fontMetrics:function(b,f){b=!this.styledMode&&/px/.test(b)||
!X.getComputedStyle?b||f&&f.style&&f.style.fontSize||this.style&&this.style.fontSize:f&&U.prototype.getStyle.call(f,"font-size");b=/px/.test(b)?a(b):12;f=24>b?b+3:Math.round(1.2*b);return{h:f,b:Math.round(.8*f),f:b}},rotCorr:function(b,a,f){var c=b;a&&f&&(c=Math.max(c*Math.cos(a*L),4));return{x:-b/3*Math.sin(a*L),y:c}},label:function(b,a,f,c,p,e,x,C,n){var m=this,w=m.styledMode,v=m.g("button"!==n&&"label"),F=v.text=m.text("",0,0,x).attr({zIndex:1}),z,O,q=0,R=3,B=0,d,N,X,V,L,t={},T,g,Q=/^url\((.*?)\)$/.test(c),
H=w||Q,K=function(){return w?z.strokeWidth()%2/2:(T?parseInt(T,10):0)%2/2};n&&v.addClass("highcharts-"+n);var ba=function(){var b=F.element.style,a={};O=("undefined"===typeof d||"undefined"===typeof N||L)&&y(F.textStr)&&F.getBBox();v.width=(d||O.width||0)+2*R+B;v.height=(N||O.height||0)+2*R;g=R+Math.min(m.fontMetrics(b&&b.fontSize,F).b,O?O.height:Infinity);H&&(z||(v.box=z=m.symbols[c]||Q?m.symbol(c):m.rect(),z.addClass(("button"===n?"":"highcharts-label-box")+(n?" highcharts-"+n+"-box":"")),z.add(v),
b=K(),a.x=b,a.y=(C?-g:0)+b),a.width=Math.round(v.width),a.height=Math.round(v.height),z.attr(h(a,t)),t={})};var u=function(){var b=B+R;var a=C?0:g;y(d)&&O&&("center"===L||"right"===L)&&(b+={center:.5,right:1}[L]*(d-O.width));if(b!==F.x||a!==F.y)F.attr("x",b),F.hasBoxWidthChanged&&(O=F.getBBox(!0),ba()),"undefined"!==typeof a&&F.attr("y",a);F.x=b;F.y=a};var Y=function(b,a){z?z.attr(b,a):t[b]=a};v.onAdd=function(){F.add(v);v.attr({text:b||0===b?b:"",x:a,y:f});z&&y(p)&&v.attr({anchorX:p,anchorY:e})};
v.widthSetter=function(b){d=P(b)?b:null};v.heightSetter=function(b){N=b};v["text-alignSetter"]=function(b){L=b};v.paddingSetter=function(b){y(b)&&b!==R&&(R=v.padding=b,u())};v.paddingLeftSetter=function(b){y(b)&&b!==B&&(B=b,u())};v.alignSetter=function(b){b={left:0,center:.5,right:1}[b];b!==q&&(q=b,O&&v.attr({x:X}))};v.textSetter=function(b){"undefined"!==typeof b&&F.attr({text:b});ba();u()};v["stroke-widthSetter"]=function(b,a){b&&(H=!0);T=this["stroke-width"]=b;Y(a,b)};w?v.rSetter=function(b,a){Y(a,
b)}:v.strokeSetter=v.fillSetter=v.rSetter=function(b,a){"r"!==a&&("fill"===a&&b&&(H=!0),v[a]=b);Y(a,b)};v.anchorXSetter=function(b,a){p=v.anchorX=b;Y(a,Math.round(b)-K()-X)};v.anchorYSetter=function(b,a){e=v.anchorY=b;Y(a,b-V)};v.xSetter=function(b){v.x=b;q&&(b-=q*((d||O.width)+2*R),v["forceAnimate:x"]=!0);X=Math.round(b);v.attr("translateX",X)};v.ySetter=function(b){V=v.y=Math.round(b);v.attr("translateY",V)};var D=v.css;x={css:function(b){if(b){var a={};b=k(b);v.textProps.forEach(function(f){"undefined"!==
typeof b[f]&&(a[f]=b[f],delete b[f])});F.css(a);"width"in a&&ba();"fontSize"in a&&(ba(),u())}return D.call(v,b)},getBBox:function(){return{width:O.width+2*R,height:O.height+2*R,x:O.x-R,y:O.y-R}},destroy:function(){l(v.element,"mouseenter");l(v.element,"mouseleave");F&&(F=F.destroy());z&&(z=z.destroy());U.prototype.destroy.call(v);v=m=ba=u=Y=null}};w||(x.shadow=function(b){b&&(ba(),z&&z.shadow(b));return v});return h(v,x)}});d.Renderer=g});S(r,"parts/Html.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],
function(d,g){var r=g.attr,u=g.createElement,I=g.css,M=g.defined,E=g.extend,A=g.pick,G=g.pInt,J=d.isFirefox,y=d.isMS,t=d.isWebKit,D=d.SVGElement;g=d.SVGRenderer;var h=d.win;E(D.prototype,{htmlCss:function(d){var q="SPAN"===this.element.tagName&&d&&"width"in d,N=A(q&&d.width,void 0);if(q){delete d.width;this.textWidth=N;var e=!0}d&&"ellipsis"===d.textOverflow&&(d.whiteSpace="nowrap",d.overflow="hidden");this.styles=E(this.styles,d);I(this.element,d);e&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var d=
this.element;return{x:d.offsetLeft,y:d.offsetTop,width:d.offsetWidth,height:d.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var d=this.renderer,q=this.element,h=this.translateX||0,e=this.translateY||0,c=this.x||0,k=this.y||0,n=this.textAlign||"left",f={left:0,center:.5,right:1}[n],a=this.styles,l=a&&a.whiteSpace;I(q,{marginLeft:h,marginTop:e});!d.styledMode&&this.shadows&&this.shadows.forEach(function(a){I(a,{marginLeft:h+1,marginTop:e+1})});this.inverted&&[].forEach.call(q.childNodes,
function(a){d.invertChild(a,q)});if("SPAN"===q.tagName){a=this.rotation;var v=this.textWidth&&G(this.textWidth),z=[a,n,q.innerHTML,this.textWidth,this.textAlign].join(),w;(w=v!==this.oldTextWidth)&&!(w=v>this.oldTextWidth)&&((w=this.textPxLength)||(I(q,{width:"",whiteSpace:l||"nowrap"}),w=q.offsetWidth),w=w>v);w&&(/[ \-]/.test(q.textContent||q.innerText)||"ellipsis"===q.style.textOverflow)?(I(q,{width:v+"px",display:"block",whiteSpace:l||"normal"}),this.oldTextWidth=v,this.hasBoxWidthChanged=!0):
this.hasBoxWidthChanged=!1;z!==this.cTT&&(l=d.fontMetrics(q.style.fontSize,q).b,!M(a)||a===(this.oldRotation||0)&&n===this.oldAlign||this.setSpanRotation(a,f,l),this.getSpanCorrection(!M(a)&&this.textPxLength||q.offsetWidth,l,f,a,n));I(q,{left:c+(this.xCorr||0)+"px",top:k+(this.yCorr||0)+"px"});this.cTT=z;this.oldRotation=a;this.oldAlign=n}}else this.alignOnAdd=!0},setSpanRotation:function(d,q,h){var e={},c=this.renderer.getTransformKey();e[c]=e.transform="rotate("+d+"deg)";e[c+(J?"Origin":"-origin")]=
e.transformOrigin=100*q+"% "+h+"px";I(this.element,e)},getSpanCorrection:function(d,q,h){this.xCorr=-d*h;this.yCorr=-q}});E(g.prototype,{getTransformKey:function(){return y&&!/Edge/.test(h.navigator.userAgent)?"-ms-transform":t?"-webkit-transform":J?"MozTransform":h.opera?"-o-transform":""},html:function(d,q,h){var e=this.createElement("span"),c=e.element,k=e.renderer,n=k.isSVG,f=function(a,f){["opacity","visibility"].forEach(function(c){a[c+"Setter"]=function(e,l,k){var v=a.div?a.div.style:f;D.prototype[c+
"Setter"].call(this,e,l,k);v&&(v[l]=e)}});a.addedSetters=!0};e.textSetter=function(a){a!==c.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;c.innerHTML=A(a,"");e.doTransform=!0};n&&f(e,e.element.style);e.xSetter=e.ySetter=e.alignSetter=e.rotationSetter=function(a,f){"align"===f&&(f="textAlign");e[f]=a;e.doTransform=!0};e.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};e.attr({text:d,x:Math.round(q),y:Math.round(h)}).css({position:"absolute"});
k.styledMode||e.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});c.style.whiteSpace="nowrap";e.css=e.htmlCss;n&&(e.add=function(a){var l=k.box.parentNode,v=[];if(this.parentGroup=a){var n=a.div;if(!n){for(;a;)v.push(a),a=a.parentGroup;v.reverse().forEach(function(a){function c(f,c){a[c]=f;"translateX"===c?w.left=f+"px":w.top=f+"px";a.doTransform=!0}var k=r(a.element,"class");n=a.div=a.div||u("div",k?{className:k}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||
0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},n||l);var w=n.style;E(a,{classSetter:function(a){return function(f){this.element.setAttribute("class",f);a.className=f}}(n),on:function(){v[0].div&&e.on.apply({element:v[0].div},arguments);return a},translateXSetter:c,translateYSetter:c});a.addedSetters||f(a)})}}else n=l;n.appendChild(c);e.added=!0;e.alignOnAdd&&e.htmlUpdateTransform();return e});return e}})});S(r,"parts/Tick.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],
function(d,g){var r=g.clamp,u=g.correctFloat,I=g.defined,M=g.destroyObjectProperties,E=g.extend,A=g.isNumber,G=g.merge,J=g.objectEach,y=g.pick,t=d.fireEvent,D=d.deg2rad;g=function(){function h(d,q,h,e,c){this.isNewLabel=this.isNew=!0;this.axis=d;this.pos=q;this.type=h||"";this.parameters=c||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;h||e||this.addLabel()}h.prototype.addLabel=function(){var d=this,q=d.axis,h=q.options,e=q.chart,c=q.categories,k=q.names,
n=d.pos,f=y(d.options&&d.options.labels,h.labels),a=q.tickPositions,l=n===a[0],v=n===a[a.length-1];k=this.parameters.category||(c?y(c[n],k[n],n):n);var z=d.label;c=(!f.step||1===f.step)&&1===q.tickInterval;a=a.info;var w,B;if(q.isDatetimeAxis&&a){var L=e.time.resolveDTLFormat(h.dateTimeLabelFormats[!h.grid&&a.higherRanks[n]||a.unitName]);var t=L.main}d.isFirst=l;d.isLast=v;d.formatCtx={axis:q,chart:e,isFirst:l,isLast:v,dateTimeLabelFormat:t,tickPositionInfo:a,value:q.isLog?u(q.lin2log(k)):k,pos:n};
h=q.labelFormatter.call(d.formatCtx,this.formatCtx);if(B=L&&L.list)d.shortenLabel=function(){for(w=0;w<B.length;w++)if(z.attr({text:q.labelFormatter.call(E(d.formatCtx,{dateTimeLabelFormat:B[w]}))}),z.getBBox().width<q.getSlotWidth(d)-2*y(f.padding,5))return;z.attr({text:""})};c&&q._addedPlotLB&&q.isXAxis&&d.moveLabel(h,f);I(z)||d.movedLabel?z&&z.textStr!==h&&!c&&(!z.textWidth||f.style&&f.style.width||z.styles.width||z.css({width:null}),z.attr({text:h}),z.textPxLength=z.getBBox().width):(d.label=
z=d.createLabel({x:0,y:0},h,f),d.rotation=0)};h.prototype.createLabel=function(d,q,h){var e=this.axis,c=e.chart;if(d=I(q)&&h.enabled?c.renderer.text(q,d.x,d.y,h.useHTML).add(e.labelGroup):null)c.styledMode||d.css(G(h.style)),d.textPxLength=d.getBBox().width;return d};h.prototype.destroy=function(){M(this,this.axis)};h.prototype.getPosition=function(d,q,h,e){var c=this.axis,k=c.chart,n=e&&k.oldChartHeight||k.chartHeight;d={x:d?u(c.translate(q+h,null,null,e)+c.transB):c.left+c.offset+(c.opposite?(e&&
k.oldChartWidth||k.chartWidth)-c.right-c.left:0),y:d?n-c.bottom+c.offset-(c.opposite?c.height:0):u(n-c.translate(q+h,null,null,e)-c.transB)};d.y=r(d.y,-1E5,1E5);t(this,"afterGetPosition",{pos:d});return d};h.prototype.getLabelPosition=function(d,q,h,e,c,k,n,f){var a=this.axis,l=a.transA,v=a.isLinked&&a.linkedParent?a.linkedParent.reversed:a.reversed,z=a.staggerLines,w=a.tickRotCorr||{x:0,y:0},B=c.y,L=e||a.reserveSpaceDefault?0:-a.labelOffset*("center"===a.labelAlign?.5:1),N={};I(B)||(B=0===a.side?
h.rotation?-8:-h.getBBox().height:2===a.side?w.y+8:Math.cos(h.rotation*D)*(w.y-h.getBBox(!1,0).height/2));d=d+c.x+L+w.x-(k&&e?k*l*(v?-1:1):0);q=q+B-(k&&!e?k*l*(v?1:-1):0);z&&(h=n/(f||1)%z,a.opposite&&(h=z-h-1),q+=a.labelOffset/z*h);N.x=d;N.y=Math.round(q);t(this,"afterGetLabelPosition",{pos:N,tickmarkOffset:k,index:n});return N};h.prototype.getLabelSize=function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};h.prototype.getMarkPath=function(d,q,h,e,c,k){return k.crispLine(["M",
d,q,"L",d+(c?0:-h),q+(c?h:0)],e)};h.prototype.handleOverflow=function(d){var q=this.axis,h=q.options.labels,e=d.x,c=q.chart.chartWidth,k=q.chart.spacing,n=y(q.labelLeft,Math.min(q.pos,k[3]));k=y(q.labelRight,Math.max(q.isRadial?0:q.pos+q.len,c-k[1]));var f=this.label,a=this.rotation,l={left:0,center:.5,right:1}[q.labelAlign||f.attr("align")],v=f.getBBox().width,z=q.getSlotWidth(this),w=z,B=1,L,t={};if(a||"justify"!==y(h.overflow,"justify"))0>a&&e-l*v<n?L=Math.round(e/Math.cos(a*D)-n):0<a&&e+l*v>k&&
(L=Math.round((c-e)/Math.cos(a*D)));else if(c=e+(1-l)*v,e-l*v<n?w=d.x+w*(1-l)-n:c>k&&(w=k-d.x+w*l,B=-1),w=Math.min(z,w),w<z&&"center"===q.labelAlign&&(d.x+=B*(z-w-l*(z-Math.min(v,w)))),v>w||q.autoRotation&&(f.styles||{}).width)L=w;L&&(this.shortenLabel?this.shortenLabel():(t.width=Math.floor(L),(h.style||{}).textOverflow||(t.textOverflow="ellipsis"),f.css(t)))};h.prototype.moveLabel=function(d,q){var h=this,e=h.label,c=!1,k=h.axis,n=k.reversed,f=k.chart.inverted;e&&e.textStr===d?(h.movedLabel=e,c=
!0,delete h.label):J(k.ticks,function(a){c||a.isNew||a===h||!a.label||a.label.textStr!==d||(h.movedLabel=a.label,c=!0,a.labelPos=h.movedLabel.xy,delete a.label)});if(!c&&(h.labelPos||e)){var a=h.labelPos||e.xy;e=f?a.x:n?0:k.width+k.left;k=f?n?k.width+k.left:0:a.y;h.movedLabel=h.createLabel({x:e,y:k},d,q);h.movedLabel&&h.movedLabel.attr({opacity:0})}};h.prototype.render=function(h,q,t){var e=this.axis,c=e.horiz,k=this.pos,n=y(this.tickmarkOffset,e.tickmarkOffset);k=this.getPosition(c,k,n,q);n=k.x;
var f=k.y;e=c&&n===e.pos+e.len||!c&&f===e.pos?-1:1;t=y(t,1);this.isActive=!0;this.renderGridLine(q,t,e);this.renderMark(k,t,e);this.renderLabel(k,q,t,h);this.isNew=!1;d.fireEvent(this,"afterRender")};h.prototype.renderGridLine=function(d,q,h){var e=this.axis,c=e.options,k=this.gridLine,n={},f=this.pos,a=this.type,l=y(this.tickmarkOffset,e.tickmarkOffset),v=e.chart.renderer,z=a?a+"Grid":"grid",w=c[z+"LineWidth"],B=c[z+"LineColor"];c=c[z+"LineDashStyle"];k||(e.chart.styledMode||(n.stroke=B,n["stroke-width"]=
w,c&&(n.dashstyle=c)),a||(n.zIndex=1),d&&(q=0),this.gridLine=k=v.path().attr(n).addClass("highcharts-"+(a?a+"-":"")+"grid-line").add(e.gridGroup));if(k&&(h=e.getPlotLinePath({value:f+l,lineWidth:k.strokeWidth()*h,force:"pass",old:d})))k[d||this.isNew?"attr":"animate"]({d:h,opacity:q})};h.prototype.renderMark=function(d,q,h){var e=this.axis,c=e.options,k=e.chart.renderer,n=this.type,f=n?n+"Tick":"tick",a=e.tickSize(f),l=this.mark,v=!l,z=d.x;d=d.y;var w=y(c[f+"Width"],!n&&e.isXAxis?1:0);c=c[f+"Color"];
a&&(e.opposite&&(a[0]=-a[0]),v&&(this.mark=l=k.path().addClass("highcharts-"+(n?n+"-":"")+"tick").add(e.axisGroup),e.chart.styledMode||l.attr({stroke:c,"stroke-width":w})),l[v?"attr":"animate"]({d:this.getMarkPath(z,d,a[0],l.strokeWidth()*h,e.horiz,k),opacity:q}))};h.prototype.renderLabel=function(d,q,h,e){var c=this.axis,k=c.horiz,n=c.options,f=this.label,a=n.labels,l=a.step;c=y(this.tickmarkOffset,c.tickmarkOffset);var v=!0,z=d.x;d=d.y;f&&A(z)&&(f.xy=d=this.getLabelPosition(z,d,f,k,a,c,e,l),this.isFirst&&
!this.isLast&&!y(n.showFirstLabel,1)||this.isLast&&!this.isFirst&&!y(n.showLastLabel,1)?v=!1:!k||a.step||a.rotation||q||0===h||this.handleOverflow(d),l&&e%l&&(v=!1),v&&A(d.y)?(d.opacity=h,f[this.isNewLabel?"attr":"animate"](d),this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))};h.prototype.replaceMovedLabel=function(){var d=this.label,q=this.axis,h=q.reversed,e=this.axis.chart.inverted;if(d&&!this.isNew){var c=e?d.xy.x:h?q.left:q.width+q.left;h=e?h?q.width+q.top:q.top:d.xy.y;d.animate({x:c,
y:h,opacity:0},void 0,d.destroy);delete this.label}q.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return h}();d.Tick=g;return d.Tick});S(r,"parts/Time.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.defined,u=g.error,I=g.extend,M=g.isObject,E=g.merge,A=g.objectEach,G=g.pad,J=g.pick,y=g.splat,t=g.timeUnits,D=d.win;g=function(){function h(d){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=D.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();
this.update(d)}h.prototype.get=function(d,q){if(this.variableTimezone||this.timezoneOffset){var h=q.getTime(),e=h-this.getTimezoneOffset(q);q.setTime(e);d=q["getUTC"+d]();q.setTime(h);return d}return this.useUTC?q["getUTC"+d]():q["get"+d]()};h.prototype.set=function(d,q,h){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===d||"Seconds"===d||"Minutes"===d)return q["setUTC"+d](h);var e=this.getTimezoneOffset(q);e=q.getTime()-e;q.setTime(e);q["setUTC"+d](h);d=this.getTimezoneOffset(q);
e=q.getTime()+d;return q.setTime(e)}return this.useUTC?q["setUTC"+d](h):q["set"+d](h)};h.prototype.update=function(d){var q=J(d&&d.useUTC,!0);this.options=d=E(!0,this.options||{},d);this.Date=d.Date||D.Date||Date;this.timezoneOffset=(this.useUTC=q)&&d.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=!(q&&!d.getTimezoneOffset&&!d.timezone)};h.prototype.makeTime=function(h,q,t,e,c,k){if(this.useUTC){var n=this.Date.UTC.apply(0,arguments);var f=this.getTimezoneOffset(n);
n+=f;var a=this.getTimezoneOffset(n);f!==a?n+=a-f:f-36E5!==this.getTimezoneOffset(n-36E5)||d.isSafari||(n-=36E5)}else n=(new this.Date(h,q,J(t,1),J(e,0),J(c,0),J(k,0))).getTime();return n};h.prototype.timezoneOffsetFunction=function(){var d=this,q=this.options,h=D.moment;if(!this.useUTC)return function(e){return 6E4*(new Date(e.toString())).getTimezoneOffset()};if(q.timezone){if(h)return function(e){return 6E4*-h.tz(e,q.timezone).utcOffset()};u(25)}return this.useUTC&&q.getTimezoneOffset?function(e){return 6E4*
q.getTimezoneOffset(e.valueOf())}:function(){return 6E4*(d.timezoneOffset||0)}};h.prototype.dateFormat=function(h,q,t){var e;if(!r(q)||isNaN(q))return(null===(e=d.defaultOptions.lang)||void 0===e?void 0:e.invalidDate)||"";h=J(h,"%Y-%m-%d %H:%M:%S");var c=this;e=new this.Date(q);var k=this.get("Hours",e),n=this.get("Day",e),f=this.get("Date",e),a=this.get("Month",e),l=this.get("FullYear",e),v=d.defaultOptions.lang,z=null===v||void 0===v?void 0:v.weekdays,w=null===v||void 0===v?void 0:v.shortWeekdays;
e=I({a:w?w[n]:z[n].substr(0,3),A:z[n],d:G(f),e:G(f,2," "),w:n,b:v.shortMonths[a],B:v.months[a],m:G(a+1),o:a+1,y:l.toString().substr(2,2),Y:l,H:G(k),k:k,I:G(k%12||12),l:k%12||12,M:G(this.get("Minutes",e)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:G(e.getSeconds()),L:G(Math.floor(q%1E3),3)},d.dateFormats);A(e,function(a,f){for(;-1!==h.indexOf("%"+f);)h=h.replace("%"+f,"function"===typeof a?a.call(c,q):a)});return t?h.substr(0,1).toUpperCase()+h.substr(1):h};h.prototype.resolveDTLFormat=function(d){return M(d,
!0)?d:(d=y(d),{main:d[0],from:d[1],to:d[2]})};h.prototype.getTimeTicks=function(d,h,g,e){var c=this,k=[],n={};var f=new c.Date(h);var a=d.unitRange,l=d.count||1,v;e=J(e,1);if(r(h)){c.set("Milliseconds",f,a>=t.second?0:l*Math.floor(c.get("Milliseconds",f)/l));a>=t.second&&c.set("Seconds",f,a>=t.minute?0:l*Math.floor(c.get("Seconds",f)/l));a>=t.minute&&c.set("Minutes",f,a>=t.hour?0:l*Math.floor(c.get("Minutes",f)/l));a>=t.hour&&c.set("Hours",f,a>=t.day?0:l*Math.floor(c.get("Hours",f)/l));a>=t.day&&
c.set("Date",f,a>=t.month?1:Math.max(1,l*Math.floor(c.get("Date",f)/l)));if(a>=t.month){c.set("Month",f,a>=t.year?0:l*Math.floor(c.get("Month",f)/l));var z=c.get("FullYear",f)}a>=t.year&&c.set("FullYear",f,z-z%l);a===t.week&&(z=c.get("Day",f),c.set("Date",f,c.get("Date",f)-z+e+(z<e?-7:0)));z=c.get("FullYear",f);e=c.get("Month",f);var w=c.get("Date",f),q=c.get("Hours",f);h=f.getTime();c.variableTimezone&&(v=g-h>4*t.month||c.getTimezoneOffset(h)!==c.getTimezoneOffset(g));h=f.getTime();for(f=1;h<g;)k.push(h),
h=a===t.year?c.makeTime(z+f*l,0):a===t.month?c.makeTime(z,e+f*l):!v||a!==t.day&&a!==t.week?v&&a===t.hour&&1<l?c.makeTime(z,e,w,q+f*l):h+a*l:c.makeTime(z,e,w+f*l*(a===t.day?1:7)),f++;k.push(h);a<=t.hour&&1E4>k.length&&k.forEach(function(a){0===a%18E5&&"000000000"===c.dateFormat("%H%M%S%L",a)&&(n[a]="day")})}k.info=I(d,{higherRanks:n,totalRange:a*l});return k};h.defaultOptions={Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0};return h}();d.Time=g;return d.Time});S(r,
"parts/Options.js",[r["parts/Globals.js"],r["parts/Time.js"],r["parts/Color.js"],r["parts/Utilities.js"]],function(d,g,r,u){r=r.parse;var I=u.merge;d.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:g.defaultOptions,chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",
plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",
cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:d.svg,
borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:d.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:r("#f7f7f7").setOpacity(.85).get(),
borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};d.setOptions=function(g){d.defaultOptions=I(!0,d.defaultOptions,g);(g.time||g.global)&&d.time.update(I(d.defaultOptions.global,d.defaultOptions.time,g.global,g.time));return d.defaultOptions};d.getOptions=
function(){return d.defaultOptions};d.defaultPlotOptions=d.defaultOptions.plotOptions;d.time=new g(I(d.defaultOptions.global,d.defaultOptions.time));d.dateFormat=function(g,u,A){return d.time.dateFormat(g,u,A)};""});S(r,"parts/Axis.js",[r["parts/Globals.js"],r["parts/Color.js"],r["parts/Tick.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=g.parse,M=u.addEvent,E=u.animObject,A=u.arrayMax,G=u.arrayMin,J=u.clamp,y=u.correctFloat,t=u.defined,D=u.destroyObjectProperties,h=u.error,N=u.extend,q=u.fireEvent,
P=u.format,e=u.getMagnitude,c=u.isArray,k=u.isFunction,n=u.isNumber,f=u.isString,a=u.merge,l=u.normalizeTickInterval,v=u.objectEach,z=u.pick,w=u.relativeLength,B=u.removeEvent,L=u.splat,Q=u.syncTimeout,H=d.defaultOptions,K=d.deg2rad;g=function(){this.init.apply(this,arguments)};N(g.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},
month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",
lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},
title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},init:function(a,b){var f=b.isX,c=this;c.chart=a;c.horiz=a.inverted&&!c.isZAxis?!f:f;c.isXAxis=f;c.coll=c.coll||(f?"xAxis":"yAxis");q(this,"init",{userOptions:b});c.opposite=b.opposite;c.side=b.side||(c.horiz?c.opposite?0:2:c.opposite?1:3);c.setOptions(b);
var p=this.options,e=p.type;c.labelFormatter=p.labels.formatter||c.defaultLabelFormatter;c.userOptions=b;c.minPixelPadding=0;c.reversed=p.reversed;c.visible=!1!==p.visible;c.zoomEnabled=!1!==p.zoomEnabled;c.hasNames="category"===e||!0===p.categories;c.categories=p.categories||c.hasNames;c.names||(c.names=[],c.names.keys={});c.plotLinesAndBandsGroups={};c.isLog="logarithmic"===e;c.isDatetimeAxis="datetime"===e;c.positiveValuesOnly=c.isLog&&!c.allowNegativeLog;c.isLinked=t(p.linkedTo);c.ticks={};c.labelEdge=
[];c.minorTicks={};c.plotLinesAndBands=[];c.alternateBands={};c.len=0;c.minRange=c.userMinRange=p.minRange||p.maxZoom;c.range=p.range;c.offset=p.offset||0;c.stacks={};c.oldStacks={};c.stacksTouched=0;c.max=null;c.min=null;c.crosshair=z(p.crosshair,L(a.options.tooltip.crosshairs)[f?0:1],!1);b=c.options.events;-1===a.axes.indexOf(c)&&(f?a.axes.splice(a.xAxis.length,0,c):a.axes.push(c),a[c.coll].push(c));c.series=c.series||[];a.inverted&&!c.isZAxis&&f&&"undefined"===typeof c.reversed&&(c.reversed=!0);
v(b,function(b,a){k(b)&&M(c,a,b)});c.lin2log=p.linearToLogConverter||c.lin2log;c.isLog&&(c.val2lin=c.log2lin,c.lin2val=c.lin2log);q(this,"afterInit")},setOptions:function(c){this.options=a(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],a(H[this.coll],c));q(this,"afterSetOptions",{userOptions:c})},defaultLabelFormatter:function(){var a=this.axis,b=this.value,
c=a.chart.time,f=a.categories,e=this.dateTimeLabelFormat,l=H.lang,k=l.numericSymbols;l=l.numericSymbolMagnitude||1E3;var v=k&&k.length,m=a.options.labels.format;a=a.isLog?Math.abs(b):a.tickInterval;var n=this.chart,d=n.numberFormatter;if(m)var w=P(m,this,n);else if(f)w=b;else if(e)w=c.dateFormat(e,b);else if(v&&1E3<=a)for(;v--&&"undefined"===typeof w;)c=Math.pow(l,v+1),a>=c&&0===10*b%c&&null!==k[v]&&0!==b&&(w=d(b/c,-1)+k[v]);"undefined"===typeof w&&(w=1E4<=Math.abs(b)?d(b,-1):d(b,-1,void 0,""));return w},
getSeriesExtremes:function(){var a=this,b=a.chart,c;q(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(f){if(f.visible||!b.options.chart.ignoreHiddenSeries){var e=f.options,p=e.threshold;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=p&&(p=null);if(a.isXAxis){if(e=f.xData,e.length){c=f.getXExtremes(e);var x=c.min;var l=c.max;n(x)||x instanceof Date||(e=e.filter(n),
c=f.getXExtremes(e),x=c.min,l=c.max);e.length&&(a.dataMin=Math.min(z(a.dataMin,x),x),a.dataMax=Math.max(z(a.dataMax,l),l))}}else if(f.getExtremes(),l=f.dataMax,x=f.dataMin,t(x)&&t(l)&&(a.dataMin=Math.min(z(a.dataMin,x),x),a.dataMax=Math.max(z(a.dataMax,l),l)),t(p)&&(a.threshold=p),!e.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});q(this,"afterGetSeriesExtremes")},translate:function(a,b,c,f,e,l){var p=this.linkedParent||this,x=1,m=0,C=f?p.oldTransA:p.transA;f=f?p.oldMin:p.min;var k=p.minPixelPadding;
e=(p.isOrdinal||p.isBroken||p.isLog&&e)&&p.lin2val;C||(C=p.transA);c&&(x*=-1,m=p.len);p.reversed&&(x*=-1,m-=x*(p.sector||p.len));b?(a=(a*x+m-k)/C+f,e&&(a=p.lin2val(a))):(e&&(a=p.val2lin(a)),a=n(f)?x*(a-f)*C+m+x*k+(n(l)?C*l:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a){var b=this,c=b.chart,f=b.left,e=b.top,p=a.old,l=a.value,
k=a.translatedValue,m=a.lineWidth,v=a.force,d,w,F,h,B=p&&c.oldChartHeight||c.chartHeight,L=p&&c.oldChartWidth||c.chartWidth,t,g=b.transB,H=function(b,a,c){if("pass"!==v&&b<a||b>c)v?b=J(b,a,c):t=!0;return b};a={value:l,lineWidth:m,old:p,force:v,acrossPanes:a.acrossPanes,translatedValue:k};q(this,"getPlotLinePath",a,function(a){k=z(k,b.translate(l,null,null,p));k=J(k,-1E5,1E5);d=F=Math.round(k+g);w=h=Math.round(B-k-g);n(k)?b.horiz?(w=e,h=B-b.bottom,d=F=H(d,f,f+b.width)):(d=f,F=L-b.right,w=h=H(w,e,e+
b.height)):(t=!0,v=!1);a.path=t&&!v?null:c.renderer.crispLine(["M",d,w,"L",F,h],m||1)});return a.path},getLinearTickPositions:function(a,b,c){var f=y(Math.floor(b/a)*a);c=y(Math.ceil(c/a)*a);var e=[],p;y(f+a)===f&&(p=20);if(this.single)return[b];for(b=f;b<=c;){e.push(b);b=y(b+a,p);if(b===l)break;var l=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?z(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=
this,b=a.options,c=a.tickPositions,f=a.minorTickInterval,e=[],l=a.pointRangePadding||0,k=a.min-l;l=a.max+l;var v=l-k;if(v&&v/f<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(b,c,p){c&&e.push.apply(e,a.getLogTickPositions(f,p[c-1],p[c],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())e=e.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f),k,l,b.startOfWeek));else for(b=k+(c[0]-k)%f;b<=l&&b!==e[0];b+=f)e.push(b);0!==e.length&&a.trimTicks(e);return e},adjustForMinRange:function(){var a=
this.options,b=this.min,c=this.max,f,e,l,k,v;this.isXAxis&&"undefined"===typeof this.minRange&&!this.isLog&&(t(a.min)||t(a.max)?this.minRange=null:(this.series.forEach(function(b){k=b.xData;for(e=v=b.xIncrement?1:k.length-1;0<e;e--)if(l=k[e]-k[e-1],"undefined"===typeof f||l<f)f=l}),this.minRange=Math.min(5*f,this.dataMax-this.dataMin)));if(c-b<this.minRange){var m=this.dataMax-this.dataMin>=this.minRange;var n=this.minRange;var d=(n-c+b)/2;d=[b-d,z(a.min,b-d)];m&&(d[2]=this.isLog?this.log2lin(this.dataMin):
this.dataMin);b=A(d);c=[b+n,z(a.max,b+n)];m&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax);c=G(c);c-b<n&&(d[0]=c-n,d[1]=z(a.min,c-n),b=A(d))}this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:this.series.forEach(function(b){var c=b.closestPointRange,f=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&t(c)&&f&&(a=t(a)?Math.min(a,c):c)});return a},nameToX:function(a){var b=c(this.categories),f=b?this.categories:this.names,e=a.options.x;a.series.requireSorting=
!1;t(e)||(e=!1===this.options.uniqueNames?a.series.autoIncrement():b?f.indexOf(a.name):z(f.keys[a.name],-1));if(-1===e){if(!b)var p=f.length}else p=e;"undefined"!==typeof p&&(this.names[p]=a.name,this.names.keys[a.name]=p);return p},updateNames:function(){var a=this,b=this.names;0<b.length&&(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)a.max=Math.max(a.max,b.xData.length-
1),b.processData(),b.generatePoints();b.data.forEach(function(c,f){if(c&&c.options&&"undefined"!==typeof c.name){var e=a.nameToX(c);"undefined"!==typeof e&&e!==c.x&&(c.x=e,b.xData[f]=e)}})}))},setAxisTranslation:function(a){var b=this,c=b.max-b.min,e=b.axisPointRange||0,p=0,l=0,k=b.linkedParent,v=!!b.categories,m=b.transA,d=b.isXAxis;if(d||v||e){var n=b.getClosest();k?(p=k.minPointOffset,l=k.pointRangePadding):b.series.forEach(function(a){var c=v?1:d?z(a.options.pointRange,n,0):b.axisPointRange||
0,x=a.options.pointPlacement;e=Math.max(e,c);if(!b.single||v)a=a.is("xrange")?!d:d,p=Math.max(p,a&&f(x)?0:c/2),l=Math.max(l,a&&"on"===x?0:c)});k=b.ordinalSlope&&n?b.ordinalSlope/n:1;b.minPointOffset=p*=k;b.pointRangePadding=l*=k;b.pointRange=Math.min(e,b.single&&v?1:c);d&&(b.closestPointRange=n)}a&&(b.oldTransA=m);b.translationSlope=b.transA=m=b.staticScale||b.len/(c+l||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=m*p;q(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-
this.range},setTickInterval:function(a){var b=this,c=b.chart,f=b.options,p=b.isLog,k=b.isDatetimeAxis,v=b.isXAxis,d=b.isLinked,m=f.maxPadding,w=f.minPadding,B=f.tickInterval,L=f.tickPixelInterval,F=b.categories,V=n(b.threshold)?b.threshold:null,g=b.softThreshold;k||F||d||this.getTickAmount();var H=z(b.userMin,f.min);var K=z(b.userMax,f.max);if(d){b.linkedParent=c[b.coll][f.linkedTo];var Q=b.linkedParent.getExtremes();b.min=z(Q.min,Q.dataMin);b.max=z(Q.max,Q.dataMax);f.type!==b.linkedParent.options.type&&
h(11,1,c)}else{if(!g&&t(V))if(b.dataMin>=V)Q=V,w=0;else if(b.dataMax<=V){var u=V;m=0}b.min=z(H,Q,b.dataMin);b.max=z(K,u,b.dataMax)}p&&(b.positiveValuesOnly&&!a&&0>=Math.min(b.min,z(b.dataMin,b.min))&&h(10,1,c),b.min=y(b.log2lin(b.min),16),b.max=y(b.log2lin(b.max),16));b.range&&t(b.max)&&(b.userMin=b.min=H=Math.max(b.dataMin,b.minFromRange()),b.userMax=K=b.max,b.range=null);q(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(F||b.axisPointRange||b.usePercentage||d)&&t(b.min)&&
t(b.max)&&(c=b.max-b.min)&&(!t(H)&&w&&(b.min-=c*w),!t(K)&&m&&(b.max+=c*m));n(b.userMin)||(n(f.softMin)&&f.softMin<b.min&&(b.min=H=f.softMin),n(f.floor)&&(b.min=Math.max(b.min,f.floor)));n(b.userMax)||(n(f.softMax)&&f.softMax>b.max&&(b.max=K=f.softMax),n(f.ceiling)&&(b.max=Math.min(b.max,f.ceiling)));g&&t(b.dataMin)&&(V=V||0,!t(H)&&b.min<V&&b.dataMin>=V?b.min=b.options.minRange?Math.min(V,b.max-b.minRange):V:!t(K)&&b.max>V&&b.dataMax<=V&&(b.max=b.options.minRange?Math.max(V,b.min+b.minRange):V));b.tickInterval=
b.min===b.max||"undefined"===typeof b.min||"undefined"===typeof b.max?1:d&&!B&&L===b.linkedParent.options.tickPixelInterval?B=b.linkedParent.tickInterval:z(B,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,F?1:(b.max-b.min)*L/Math.max(b.len,L));v&&!a&&b.series.forEach(function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));
b.pointRange&&!B&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));a=z(f.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!B&&b.tickInterval<a&&(b.tickInterval=a);k||p||B||(b.tickInterval=l(b.tickInterval,null,e(b.tickInterval),z(f.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b=a.tickPositions;var c=this.getMinorTickInterval();
var f=a.tickPositioner,e=a.startOnTick,l=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===c&&this.tickInterval?this.tickInterval/5:c;this.single=this.min===this.max&&t(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=c=b&&b.slice();!c&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(c=[this.min,this.max],h(19,!1,
this.chart)):c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()],c[0]===c[1]&&(c.length=1)),this.tickPositions=c,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=c=f);this.paddedTicks=c.slice(0);
this.trimTicks(c,e,l);this.isLinked||(this.single&&2>c.length&&!this.categories&&!this.series.some(function(b){return b.is("heatmap")&&"between"===b.options.pointPlacement})&&(this.min-=.5,this.max+=.5),b||f||this.adjustTickAmount());q(this,"afterSetTickPositions")},trimTicks:function(a,b,c){var f=a[0],e=a[a.length-1],p=!this.isOrdinal&&this.minPointOffset||0;q(this,"trimTicks");if(!this.isLinked){if(b&&-Infinity!==f)this.min=f;else for(;this.min-p>a[0];)a.shift();if(c)this.max=e;else for(;this.max+
p<a[a.length-1];)a.pop();0===a.length&&t(f)&&!this.options.tickPositions&&a.push((e+f)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||!1===c.startOnTick||!1===c.endOnTick||this.isLog||this.chart[this.coll].forEach(function(c){var f=c.options;f=[c.horiz?f.left:f.top,f.width,f.height,f.pane].join();c.series.length&&(a[f]?b=!0:a[f]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!t(a.tickInterval)&&
this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.options,b=this.tickInterval,c=this.tickPositions,f=this.tickAmount,e=this.finalTickAmt,l=c&&c.length,k=z(this.threshold,this.softThreshold?0:null),v;if(this.hasData()){if(l<f){for(v=this.min;c.length<f;)c.length%2||v===k?c.push(y(c[c.length-1]+b)):c.unshift(y(c[0]-b));this.transA*=(l-
1)/(f-1);this.min=a.startOnTick?c[0]:Math.min(this.min,c[0]);this.max=a.endOnTick?c[c.length-1]:Math.max(this.max,c[c.length-1])}else l>f&&(this.tickInterval*=2,this.setTickPositions());if(t(e)){for(b=a=c.length;b--;)(3===e&&1===b%2||2>=e&&0<b&&b<a-1)&&c.splice(b,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(b){return b.isDirtyData||b.isDirty||b.xAxis&&b.xAxis.isDirty}),b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();
(b=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();q(this,"afterSetScale")},setExtremes:function(a,b,c,f,e){var p=this,
l=p.chart;c=z(c,!0);p.series.forEach(function(b){delete b.kdTree});e=N(e,{min:a,max:b});q(p,"setExtremes",e,function(){p.userMin=a;p.userMax=b;p.eventArgs=e;c&&l.redraw(f)})},zoom:function(a,b){var c=this.dataMin,f=this.dataMax,e=this.options,p=Math.min(c,z(e.min,c)),l=Math.max(f,z(e.max,f));a={newMin:a,newMax:b};q(this,"zoom",a,function(b){var a=b.newMin,e=b.newMax;if(a!==this.min||e!==this.max)this.allowZoomOutside||(t(c)&&(a<p&&(a=p),a>l&&(a=l)),t(f)&&(e<p&&(e=p),e>l&&(e=l))),this.displayBtn="undefined"!==
typeof a||"undefined"!==typeof e,this.setExtremes(a,e,!1,void 0,{trigger:"zoom"});b.zoomed=!0});return a.zoomed},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsets||[0,0,0,0],f=this.horiz,e=this.width=Math.round(w(z(b.width,a.plotWidth-c[3]+c[1]),a.plotWidth)),l=this.height=Math.round(w(z(b.height,a.plotHeight-c[0]+c[2]),a.plotHeight)),k=this.top=Math.round(w(z(b.top,a.plotTop+c[0]),a.plotHeight,a.plotTop));b=this.left=Math.round(w(z(b.left,a.plotLeft+c[3]),a.plotWidth,a.plotLeft));
this.bottom=a.chartHeight-l-k;this.right=a.chartWidth-e-b;this.len=Math.max(f?e:l,0);this.pos=f?b:k},getExtremes:function(){var a=this.isLog;return{min:a?y(this.lin2log(this.min)):this.min,max:a?y(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?this.lin2log(this.min):this.min;b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=c:Infinity===a?a=b:c>a?a=c:b<a&&(a=b);return this.translate(a,
0,1,0,1)},autoLabelAlign:function(a){var b=(z(a,0)-90*this.side+720)%360;a={align:"center"};q(this,"autoLabelAlign",a,function(a){15<b&&165>b?a.align="right":195<b&&345>b&&(a.align="left")});return a.align},tickSize:function(a){var b=this.options,c=b[a+"Length"],f=z(b[a+"Width"],"tick"===a&&this.isXAxis&&!this.categories?1:0);if(f&&c){"inside"===b[a+"Position"]&&(c=-c);var e=[c,f]}a={tickSize:e};q(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||
0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,f=c,e=this.len/(((this.categories?1:0)+this.max-this.min)/c),l,k=a.rotation,v=this.labelMetrics(),m,d=Number.MAX_VALUE,n,w=this.max-this.min,F=function(b){var a=b/(e||1);a=1<a?Math.ceil(a):1;a*c>w&&Infinity!==b&&Infinity!==e&&w&&(a=Math.ceil(w/c));return y(a*c)};b?(n=!a.staggerLines&&
!a.step&&(t(k)?[k]:e<z(a.autoRotationLimit,80)&&a.autoRotation))&&n.forEach(function(b){if(b===k||b&&-90<=b&&90>=b){m=F(Math.abs(v.h/Math.sin(K*b)));var a=m+Math.abs(b/360);a<d&&(d=a,l=b,f=m)}}):a.step||(f=F(v.h));this.autoRotation=n;this.labelRotation=z(l,k);return f},getSlotWidth:function(a){var b=this.chart,c=this.horiz,f=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),l=b.margin[3];return a&&a.slotWidth||c&&2>(f.step||0)&&!f.rotation&&(this.staggerLines||1)*this.len/
e||!c&&(f.style&&parseInt(f.style.width,10)||l&&l-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,e=this.ticks,l=this.options.labels,k=l&&l.style||{},v=this.horiz,d=this.getSlotWidth(),m=Math.max(1,Math.round(d-2*(l.padding||5))),n={},w=this.labelMetrics(),h=l.style&&l.style.textOverflow,F=0;f(l.rotation)||(n.rotation=l.rotation||0);c.forEach(function(b){b=e[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&b.label.textPxLength>F&&(F=
b.label.textPxLength)});this.maxLabelLength=F;if(this.autoRotation)F>m&&F>w.h?n.rotation=this.labelRotation:this.labelRotation=0;else if(d){var z=m;if(!h){var q="clip";for(m=c.length;!v&&m--;){var B=c[m];if(B=e[B].label)B.styles&&"ellipsis"===B.styles.textOverflow?B.css({textOverflow:"clip"}):B.textPxLength>d&&B.css({width:d+"px"}),B.getBBox().height>this.len/c.length-(w.h-w.f)&&(B.specificTextOverflow="ellipsis")}}}n.rotation&&(z=F>.5*a.chartHeight?.33*a.chartHeight:F,h||(q="ellipsis"));if(this.labelAlign=
l.align||this.autoLabelAlign(this.labelRotation))n.align=this.labelAlign;c.forEach(function(b){var a=(b=e[b])&&b.label,c=k.width,f={};a&&(a.attr(n),b.shortenLabel?b.shortenLabel():z&&!c&&"nowrap"!==k.whiteSpace&&(z<a.textPxLength||"SPAN"===a.element.tagName)?(f.width=z,h||(f.textOverflow=a.specificTextOverflow||q),a.css(f)):a.styles&&a.styles.width&&!f.width&&!c&&a.css({width:null}),delete a.specificTextOverflow,b.rotation=n.rotation)},this);this.tickRotCorr=b.rotCorr(w.b,this.labelRotation||0,0!==
this.side)},hasData:function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&t(this.min)&&t(this.max)},addTitle:function(c){var b=this.chart.renderer,f=this.horiz,e=this.opposite,l=this.options.title,p,k=this.chart.styledMode;this.axisTitle||((p=l.textAlign)||(p=(f?{low:"left",middle:"center",high:"right"}:{low:e?"right":"left",middle:"center",high:e?"left":"right"})[l.align]),this.axisTitle=b.text(l.text,0,0,l.useHTML).attr({zIndex:7,rotation:l.rotation||0,align:p}).addClass("highcharts-axis-title"),
k||this.axisTitle.css(a(l.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);k||l.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[c?"show":"hide"](c)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new r(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,f=a.options,e=a.tickPositions,l=a.ticks,k=a.horiz,d=a.side,m=b.inverted&&!a.isZAxis?[1,0,3,2][d]:d,n,w=0,h=0,F=f.title,B=f.labels,L=0,g=b.axisOffset;b=b.clipOffset;
var H=[-1,1,1,-1][d],K=f.className,Q=a.axisParent;var y=a.hasData();a.showAxis=n=y||z(f.showEmpty,!0);a.staggerLines=a.horiz&&B.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(K||"")).add(Q),a.axisGroup=c.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(K||"")).add(Q),a.labelGroup=c.g("axis-labels").attr({zIndex:B.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+
"-labels "+(K||"")).add(Q));y||a.isLinked?(e.forEach(function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),a.reserveSpaceDefault=0===d||2===d||{1:"left",3:"right"}[d]===a.labelAlign,z(B.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&e.forEach(function(b){L=Math.max(l[b].getLabelSize(),L)}),a.staggerLines&&(L*=a.staggerLines),a.labelOffset=L*(a.opposite?-1:1)):v(l,function(b,a){b.destroy();delete l[a]});if(F&&F.text&&!1!==F.enabled&&(a.addTitle(n),n&&!1!==F.reserveSpace)){a.titleOffset=
w=a.axisTitle.getBBox()[k?"height":"width"];var u=F.offset;h=t(u)?0:z(F.margin,k?5:10)}a.renderLine();a.offset=H*z(f.offset,g[d]?g[d]+(f.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===d?-a.labelMetrics().h:2===d?a.tickRotCorr.y:0;h=Math.abs(L)+h;L&&(h=h-c+H*(k?z(B.y,a.tickRotCorr.y+8*H):B.x));a.axisTitleMargin=z(u,h);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(l,e));k=this.tickSize("tick");g[d]=Math.max(g[d],a.axisTitleMargin+w+H*a.offset,h,e&&e.length&&k?k[0]+
H*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[m]=Math.max(b[m],f);q(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,c=this.opposite,f=this.offset,e=this.horiz,l=this.left+(c?this.width:0)+f;f=b.chartHeight-this.bottom-(c?this.height:0)+f;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:l,e?f:this.top,"L",e?b.chartWidth-this.right:l,e?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,f=this.len,e=this.options.title,l=a?b:c,k=this.opposite,d=this.offset,m=e.x||0,v=e.y||0,n=this.axisTitle,w=this.chart.renderer.fontMetrics(e.style&&e.style.fontSize,n);n=Math.max(n.getBBox(null,0).height-w.h-1,0);f={low:l+(a?0:f),middle:l+f/2,high:l+(a?f:0)}[e.align];b=(a?c+this.height:b)+(a?1:-1)*(k?-1:1)*this.axisTitleMargin+
[-n,n,w.f,-n][this.side];a={x:a?f+m:b+(k?this.width:0)+d+m,y:a?b+v-(k?this.height:0)+d:f+v};q(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var b=this.chart.hasRendered&&n(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new r(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,f=this.ticks,e=this.chart.hasRendered&&n(this.oldMin);if(!c||a>=this.min&&a<=this.max)f[a]||(f[a]=new r(this,a)),e&&f[a].isNew&&
f[a].render(b,!0,-1),f[a].render(b)},render:function(){var a=this,b=a.chart,c=a.options,f=a.isLog,e=a.isLinked,l=a.tickPositions,k=a.axisTitle,w=a.ticks,m=a.minorTicks,h=a.alternateBands,z=c.stackLabels,B=c.alternateGridColor,F=a.tickmarkOffset,L=a.axisLine,t=a.showAxis,g=E(b.renderer.globalAnimation),H,K;a.labelEdge.length=0;a.overlap=!1;[w,m,h].forEach(function(b){v(b,function(b){b.isActive=!1})});if(a.hasData()||e)a.minorTickInterval&&!a.categories&&a.getMinorTickPositions().forEach(function(b){a.renderMinorTick(b)}),
l.length&&(l.forEach(function(b,c){a.renderTick(b,c)}),F&&(0===a.min||a.single)&&(w[-1]||(w[-1]=new r(a,-1,null,!0)),w[-1].render(-1))),B&&l.forEach(function(c,e){K="undefined"!==typeof l[e+1]?l[e+1]+F:a.max-F;0===e%2&&c<a.max&&K<=a.max+(b.polar?-F:F)&&(h[c]||(h[c]=new d.PlotLineOrBand(a)),H=c+F,h[c].options={from:f?a.lin2log(H):H,to:f?a.lin2log(K):K,color:B},h[c].render(),h[c].isActive=!0)}),a._addedPlotLB||((c.plotLines||[]).concat(c.plotBands||[]).forEach(function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=
!0);[w,m,h].forEach(function(a){var c,f=[],e=g.duration;v(a,function(b,a){b.isActive||(b.render(a,!1,0),b.isActive=!1,f.push(a))});Q(function(){for(c=f.length;c--;)a[f[c]]&&!a[f[c]].isActive&&(a[f[c]].destroy(),delete a[f[c]])},a!==h&&b.hasRendered&&e?e:0)});L&&(L[L.isPlaced?"animate":"attr"]({d:this.getLinePath(L.strokeWidth())}),L.isPlaced=!0,L[t?"show":"hide"](t));k&&t&&(c=a.getTitlePosition(),n(c.y)?(k[k.isNew?"attr":"animate"](c),k.isNew=!1):(k.attr("y",-9999),k.isNew=!0));z&&z.enabled&&a.renderStackTotals();
a.isDirty=!1;q(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,f=b.plotLinesAndBands,e;q(this,"destroy",{keepEvents:a});a||B(b);v(c,function(b,a){D(b);c[a]=null});[b.ticks,b.minorTicks,b.alternateBands].forEach(function(b){D(b)});if(f)for(a=f.length;a--;)f[a].destroy();
"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){b[a]&&(b[a]=b[a].destroy())});for(e in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[e]=b.plotLinesAndBandsGroups[e].destroy();v(b,function(a,c){-1===b.keepProps.indexOf(c)&&delete b[c]})},drawCrosshair:function(a,b){var c=this.crosshair,f=z(c.snap,!0),e,l=this.cross,k=this.chart;q(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(t(b)||
!f)){f?t(b)&&(e=z("colorAxis"!==this.coll?b.crosshairPos:null,this.isXAxis?b.plotX:this.len-b.plotY)):e=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);if(t(e)){var d={value:b&&(this.isXAxis?b.x:z(b.stackY,b.y)),translatedValue:e};k.polar&&N(d,{isCrosshair:!0,chartX:a&&a.chartX,chartY:a&&a.chartY,point:b});d=this.getPlotLinePath(d)||null}if(!t(d)){this.hideCrosshair();return}f=this.categories&&!this.isRadial;l||(this.cross=l=k.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(f?"category ":"thin ")+c.className).attr({zIndex:z(c.zIndex,2)}).add(),k.styledMode||(l.attr({stroke:c.color||(f?I("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":z(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&l.attr({dashstyle:c.dashStyle})));l.show().attr({d:d});f&&!c.width&&l.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();q(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide();q(this,"afterHideCrosshair")}});
return d.Axis=g});S(r,"parts/DateTimeAxis.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.getMagnitude,u=g.normalizeTickInterval,I=g.timeUnits;d=d.Axis;d.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};d.prototype.normalizeTimeTickInterval=function(d,g){var A=g||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,
2]],["month",[1,2,3,4,6]],["year",null]];g=A[A.length-1];var G=I[g[0]],E=g[1],y;for(y=0;y<A.length&&!(g=A[y],G=I[g[0]],E=g[1],A[y+1]&&d<=(G*E[E.length-1]+I[A[y+1][0]])/2);y++);G===I.year&&d<5*G&&(E=[1,2,5]);d=u(d/G,E,"year"===g[0]?Math.max(r(d/G),1):1);return{unitRange:G,count:d,unitName:g[0]}}});S(r,"parts/LogarithmicAxis.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.getMagnitude,u=g.normalizeTickInterval,I=g.pick;d=d.Axis;d.prototype.getLogTickPositions=function(d,g,
A,G){var E=this.options,y=this.len,t=[];G||(this._minorAutoInterval=null);if(.5<=d)d=Math.round(d),t=this.getLinearTickPositions(d,g,A);else if(.08<=d){y=Math.floor(g);var D,h;for(E=.3<d?[1,2,4]:.15<d?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];y<A+1&&!h;y++){var N=E.length;for(D=0;D<N&&!h;D++){var q=this.log2lin(this.lin2log(y)*E[D]);q>g&&(!G||P<=A)&&"undefined"!==typeof P&&t.push(P);P>A&&(h=!0);var P=q}}}else g=this.lin2log(g),A=this.lin2log(A),d=G?this.getMinorTickInterval():E.tickInterval,d=I("auto"===d?
null:d,this._minorAutoInterval,E.tickPixelInterval/(G?5:1)*(A-g)/((G?y/this.tickPositions.length:y)||1)),d=u(d,null,r(d)),t=this.getLinearTickPositions(d,g,A).map(this.log2lin),G||(this._minorAutoInterval=d/5);G||(this.tickInterval=d);return t};d.prototype.log2lin=function(d){return Math.log(d)/Math.LN10};d.prototype.lin2log=function(d){return Math.pow(10,d)}});S(r,"parts/PlotLineOrBand.js",[r["parts/Globals.js"],r["parts/Axis.js"],r["parts/Utilities.js"]],function(d,g,r){var u=r.arrayMax,I=r.arrayMin,
M=r.defined,E=r.destroyObjectProperties,A=r.erase,G=r.extend,J=r.merge,y=r.objectEach,t=r.pick,D=function(){function h(d,h){this.axis=d;h&&(this.options=h,this.id=h.id)}h.prototype.render=function(){d.fireEvent(this,"render");var h=this,q=h.axis,g=q.horiz,e=h.options,c=e.label,k=h.label,n=e.to,f=e.from,a=e.value,l=M(f)&&M(n),v=M(a),z=h.svgElem,w=!z,B=[],L=e.color,Q=t(e.zIndex,0),H=e.events;B={"class":"highcharts-plot-"+(l?"band ":"line ")+(e.className||"")};var K={},p=q.chart.renderer,b=l?"bands":
"lines";q.isLog&&(f=q.log2lin(f),n=q.log2lin(n),a=q.log2lin(a));q.chart.styledMode||(v?(B.stroke=L||"#999999",B["stroke-width"]=t(e.width,1),e.dashStyle&&(B.dashstyle=e.dashStyle)):l&&(B.fill=L||"#e6ebf5",e.borderWidth&&(B.stroke=e.borderColor,B["stroke-width"]=e.borderWidth)));K.zIndex=Q;b+="-"+Q;(L=q.plotLinesAndBandsGroups[b])||(q.plotLinesAndBandsGroups[b]=L=p.g("plot-"+b).attr(K).add());w&&(h.svgElem=z=p.path().attr(B).add(L));if(v)B=q.getPlotLinePath({value:a,lineWidth:z.strokeWidth(),acrossPanes:e.acrossPanes});
else if(l)B=q.getPlotBandPath(f,n,e);else return;(w||!z.d)&&B&&B.length?(z.attr({d:B}),H&&y(H,function(b,a){z.on(a,function(b){H[a].apply(h,[b])})})):z&&(B?(z.show(!0),z.animate({d:B})):z.d&&(z.hide(),k&&(h.label=k=k.destroy())));c&&(M(c.text)||M(c.formatter))&&B&&B.length&&0<q.width&&0<q.height&&!B.isFlat?(c=J({align:g&&l&&"center",x:g?!l&&4:10,verticalAlign:!g&&l&&"middle",y:g?l?16:10:l?6:-4,rotation:g&&!l&&90},c),this.renderLabel(c,B,l,Q)):k&&k.hide();return h};h.prototype.renderLabel=function(d,
h,g,e){var c=this.label,k=this.axis.chart.renderer;c||(c={align:d.textAlign||d.align,rotation:d.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(d.className||"")},c.zIndex=e,e=this.getLabelText(d),this.label=c=k.text(e,0,0,d.useHTML).attr(c).add(),this.axis.chart.styledMode||c.css(d.style));k=h.xBounds||[h[1],h[4],g?h[6]:h[1]];h=h.yBounds||[h[2],h[5],g?h[7]:h[2]];g=I(k);e=I(h);c.align(d,!1,{x:g,y:e,width:u(k)-g,height:u(h)-e});c.show(!0)};h.prototype.getLabelText=function(d){return M(d.formatter)?
d.formatter.call(this):d.text};h.prototype.destroy=function(){A(this.axis.plotLinesAndBands,this);delete this.axis;E(this)};return h}();G(g.prototype,{getPlotBandPath:function(d,g){var h=this.getPlotLinePath({value:g,force:!0,acrossPanes:this.options.acrossPanes}),t=this.getPlotLinePath({value:d,force:!0,acrossPanes:this.options.acrossPanes}),e=[],c=this.horiz,k=1;d=d<this.min&&g<this.min||d>this.max&&g>this.max;if(t&&h){if(d){var n=t.toString()===h.toString();k=0}for(d=0;d<t.length;d+=6)c&&h[d+1]===
t[d+1]?(h[d+1]+=k,h[d+4]+=k):c||h[d+2]!==t[d+2]||(h[d+2]+=k,h[d+5]+=k),e.push("M",t[d+1],t[d+2],"L",t[d+4],t[d+5],h[d+4],h[d+5],h[d+1],h[d+2],"z"),e.isFlat=n}return e},addPlotBand:function(d){return this.addPlotBandOrLine(d,"plotBands")},addPlotLine:function(d){return this.addPlotBandOrLine(d,"plotLines")},addPlotBandOrLine:function(d,g){var h=(new D(this,d)).render(),t=this.userOptions;if(h){if(g){var e=t[g]||[];e.push(d);t[g]=e}this.plotLinesAndBands.push(h)}return h},removePlotBandOrLine:function(d){for(var h=
this.plotLinesAndBands,q=this.options,g=this.userOptions,e=h.length;e--;)h[e].id===d&&h[e].destroy();[q.plotLines||[],g.plotLines||[],q.plotBands||[],g.plotBands||[]].forEach(function(c){for(e=c.length;e--;)c[e].id===d&&A(c,c[e])})},removePlotBand:function(d){this.removePlotBandOrLine(d)},removePlotLine:function(d){this.removePlotBandOrLine(d)}});d.PlotLineOrBand=D;return d.PlotLineOrBand});S(r,"parts/Tooltip.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.clamp,u=g.css,
I=g.defined,M=g.discardElement,E=g.extend,A=g.format,G=g.isNumber,J=g.isString,y=g.merge,t=g.pick,D=g.splat,h=g.syncTimeout,N=g.timeUnits;"";var q=d.doc,P=function(){function e(c,e){this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=c;this.init(c,e)}e.prototype.applyFilter=function(){var c=this.chart;c.renderer.definition({tagName:"filter",id:"drop-shadow-"+c.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",
stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});c.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+c.index+"{filter:url(#drop-shadow-"+c.index+")}"})};e.prototype.bodyFormatter=function(c){return c.map(function(c){var e=c.series.tooltipOptions;return(e[(c.point.formatPrefix||"point")+"Formatter"]||
c.point.tooltipFormatter).call(c.point,e[(c.point.formatPrefix||"point")+"Format"]||"")})};e.prototype.cleanSplit=function(c){this.chart.series.forEach(function(e){var d=e&&e.tt;d&&(!d.isActive||c?e.tt=d.destroy():d.isActive=!1)})};e.prototype.defaultFormatter=function(c){var e=this.points||D(this);var d=[c.tooltipFooterHeaderFormatter(e[0])];d=d.concat(c.bodyFormatter(e));d.push(c.tooltipFooterHeaderFormatter(e[0],!0));return d};e.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());
this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),M(this.container));g.clearTimeout(this.hideTimer);g.clearTimeout(this.tooltipTimeout)};e.prototype.getAnchor=function(c,e){var d=this.chart,f=d.pointer,a=d.inverted,l=d.plotTop,k=d.plotLeft,h=0,w=0,B,q;c=D(c);this.followPointer&&e?("undefined"===typeof e.chartX&&(e=f.normalize(e)),c=[e.chartX-k,e.chartY-l]):c[0].tooltipPos?c=c[0].tooltipPos:(c.forEach(function(c){B=
c.series.yAxis;q=c.series.xAxis;h+=c.plotX+(!a&&q?q.left-k:0);w+=(c.plotLow?(c.plotLow+c.plotHigh)/2:c.plotY)+(!a&&B?B.top-l:0)}),h/=c.length,w/=c.length,c=[a?d.plotWidth-w:h,this.shared&&!a&&1<c.length&&e?e.chartY-l:a?d.plotHeight-h:w]);return c.map(Math.round)};e.prototype.getDateFormat=function(c,e,d,f){var a=this.chart.time,l=a.dateFormat("%m-%d %H:%M:%S.%L",e),k={millisecond:15,second:12,minute:9,hour:6,day:3},n="millisecond";for(w in N){if(c===N.week&&+a.dateFormat("%w",e)===d&&"00:00:00.000"===
l.substr(6)){var w="week";break}if(N[w]>c){w=n;break}if(k[w]&&l.substr(k[w])!=="01-01 00:00:00.000".substr(k[w]))break;"week"!==w&&(n=w)}if(w)var h=a.resolveDTLFormat(f[w]).main;return h};e.prototype.getLabel=function(){var c,e=this,n=this.chart.renderer,f=this.chart.styledMode,a=this.options,l="tooltip"+(I(a.className)?" "+a.className:""),v=(null===(c=a.style)||void 0===c?void 0:c.pointerEvents)||(!this.followPointer&&a.stickOnContact?"auto":"none"),h;c=function(){e.inContact=!0};var w=function(){var a=
e.chart.hoverSeries;e.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){this.outside&&(this.container=h=d.doc.createElement("div"),h.className="highcharts-tooltip-container",u(h,{position:"absolute",top:"1px",pointerEvents:v,zIndex:3}),d.doc.body.appendChild(h),this.renderer=n=new d.Renderer(h,0,0,{},void 0,void 0,n.styledMode));this.split?this.label=n.g(l):(this.label=n.label("",0,0,a.shape||"callout",null,null,a.useHTML,null,l).attr({padding:a.padding,r:a.borderRadius}),f||this.label.attr({fill:a.backgroundColor,
"stroke-width":a.borderWidth}).css(a.style).css({pointerEvents:v}).shadow(a.shadow));f&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(e.outside&&!e.split){var B={x:this.label.xSetter,y:this.label.ySetter};this.label.xSetter=function(a,c){B[c].call(this.label,e.distance);h.style.left=a+"px"};this.label.ySetter=function(a,c){B[c].call(this.label,e.distance);h.style.top=a+"px"}}this.label.on("mouseenter",c).on("mouseleave",w).attr({zIndex:8}).add()}return this.label};
e.prototype.getPosition=function(c,e,d){var f=this.chart,a=this.distance,l={},k=f.inverted&&d.h||0,n,w=this.outside,h=w?q.documentElement.clientWidth-2*a:f.chartWidth,g=w?Math.max(q.body.scrollHeight,q.documentElement.scrollHeight,q.body.offsetHeight,q.documentElement.offsetHeight,q.documentElement.clientHeight):f.chartHeight,Q=f.pointer.getChartPosition(),H=f.containerScaling,K=function(b){return H?b*H.scaleX:b},p=function(b){return H?b*H.scaleY:b},b=function(b){var l="x"===b;return[b,l?h:g,l?c:
e].concat(w?[l?K(c):p(e),l?Q.left-a+K(d.plotX+f.plotLeft):Q.top-a+p(d.plotY+f.plotTop),0,l?h:g]:[l?c:e,l?d.plotX+f.plotLeft:d.plotY+f.plotTop,l?f.plotLeft:f.plotTop,l?f.plotLeft+f.plotWidth:f.plotTop+f.plotHeight])},C=b("y"),x=b("x"),R=!this.followPointer&&t(d.ttBelow,!f.inverted===!!d.negative),O=function(b,c,f,e,d,m,v){var n="y"===b?p(a):K(a),w=(f-e)/2,x=e<d-a,h=d+a+e<c,F=d-n-f+w;d=d+n-w;if(R&&h)l[b]=d;else if(!R&&x)l[b]=F;else if(x)l[b]=Math.min(v-e,0>F-k?F:F-k);else if(h)l[b]=Math.max(m,d+k+f>
c?d:d+k);else return!1},y=function(b,c,f,e,d){var k;d<a||d>c-a?k=!1:l[b]=d<f/2?1:d>c-e/2?c-e-2:d-f/2;return k},u=function(b){var a=C;C=x;x=a;n=b},m=function(){!1!==O.apply(0,C)?!1!==y.apply(0,x)||n||(u(!0),m()):n?l.x=l.y=0:(u(!0),m())};(f.inverted||1<this.len)&&u();m();return l};e.prototype.getXDateFormat=function(c,e,d){e=e.dateTimeLabelFormats;var f=d&&d.closestPointRange;return(f?this.getDateFormat(f,c.x,d.options.startOfWeek,e):e.day)||e.year};e.prototype.hide=function(c){var e=this;g.clearTimeout(this.hideTimer);
c=t(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=h(function(){e.getLabel()[c?"fadeOut":"hide"]();e.isHidden=!0},c))};e.prototype.init=function(c,e){this.chart=c;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!c.inverted&&!c.polar;this.shared=e.shared||this.split;this.outside=t(e.outside,!(!c.scrollablePixelsX&&!c.scrollablePixelsY))};e.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};
e.prototype.move=function(c,e,d,f){var a=this,l=a.now,k=!1!==a.options.animation&&!a.isHidden&&(1<Math.abs(c-l.x)||1<Math.abs(e-l.y)),n=a.followPointer||1<a.len;E(l,{x:k?(2*l.x+c)/3:c,y:k?(l.y+e)/2:e,anchorX:n?void 0:k?(2*l.anchorX+d)/3:d,anchorY:n?void 0:k?(l.anchorY+f)/2:f});a.getLabel().attr(l);a.drawTracker();k&&(g.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){a&&a.move(c,e,d,f)},32))};e.prototype.refresh=function(c,e){var k=this.chart,f=this.options,a=c,l={},v=[],
h=f.formatter||this.defaultFormatter;l=this.shared;var w=k.styledMode;if(f.enabled){g.clearTimeout(this.hideTimer);this.followPointer=D(a)[0].series.tooltipOptions.followPointer;var B=this.getAnchor(a,e);e=B[0];var q=B[1];!l||a.series&&a.series.noSharedTooltip?l=a.getLabelConfig():(k.pointer.applyInactiveState(a),a.forEach(function(a){a.setState("hover");v.push(a.getLabelConfig())}),l={x:a[0].category,y:a[0].y},l.points=v,a=a[0]);this.len=v.length;k=h.call(l,this);h=a.series;this.distance=t(h.tooltipOptions.distance,
16);!1===k?this.hide():(this.split?this.renderSplit(k,D(c)):(c=this.getLabel(),f.style.width&&!w||c.css({width:this.chart.spacingBox.width}),c.attr({text:k&&k.join?k.join(""):k}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(a.colorIndex,h.colorIndex)),w||c.attr({stroke:f.borderColor||a.color||h.color||"#666666"}),this.updatePosition({plotX:e,plotY:q,negative:a.negative,ttBelow:a.ttBelow,h:B[2]||0})),this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=
!1);d.fireEvent(this,"refresh")}};e.prototype.renderSplit=function(c,e){function k(b,a,c,f,e){void 0===e&&(e=!0);c?(a=u?0:A,b=r(b-f/2,O.left,O.right-f)):(a-=m,b=e?b-f-C:b+C,b=r(b,e?b:O.left,O.right));return{x:b,y:a}}var f=this,a=f.chart,l=f.chart,v=l.plotHeight,h=l.plotLeft,w=l.plotTop,B=l.pointer,q=l.renderer,g=l.scrollablePixelsY,H=void 0===g?0:g;g=l.scrollingContainer;g=void 0===g?{scrollLeft:0,scrollTop:0}:g;var K=g.scrollLeft,p=g.scrollTop,b=l.styledMode,C=f.distance,x=f.options,R=f.options.positioner,
O={left:K,right:K+l.chartWidth,top:p,bottom:p+l.chartHeight},y=f.getLabel(),u=!(!a.xAxis[0]||!a.xAxis[0].opposite),m=w+p,D=0,A=v-H;J(c)&&(c=[!1,c]);c=c.slice(0,e.length+1).reduce(function(a,c,l){if(!1!==c&&""!==c){l=e[l-1]||{isHeader:!0,plotX:e[0].plotX,plotY:v,series:{}};var d=l.isHeader,n=d?f:l.series,F=n.tt,z=l.isHeader;var B=l.series;var g="highcharts-color-"+t(l.colorIndex,B.colorIndex,"none");F||(F={padding:x.padding,r:x.borderRadius},b||(F.fill=x.backgroundColor,F["stroke-width"]=x.borderWidth),
F=q.label("",0,0,x[z?"headerShape":"shape"]||"callout",void 0,void 0,x.useHTML).addClass((z?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+g).attr(F).add(y));F.isActive=!0;F.attr({text:c});b||F.css(x.style).shadow(x.shadow).attr({stroke:x.borderColor||l.color||B.color||"#333333"});c=n.tt=F;z=c.getBBox();n=z.width+c.strokeWidth();d&&(D=z.height,A+=D,u&&(m-=D));B=l.plotX;B=void 0===B?0:B;g=l.plotY;g=void 0===g?0:g;var L=l.series;if(l.isHeader){B=h+B;var K=w+v/2}else F=L.xAxis,L=L.yAxis,
B=F.pos+r(B,-C,F.len+C),L.pos+g>=p+w&&L.pos+g<=p+w+v-H&&(K=L.pos+g);B=r(B,O.left-C,O.right+C);"number"===typeof K?(z=z.height+1,g=R?R.call(f,n,z,l):k(B,K,d,n),a.push({align:R?0:void 0,anchorX:B,anchorY:K,boxWidth:n,point:l,rank:t(g.rank,d?1:0),size:z,target:g.y,tt:c,x:g.x})):c.isActive=!1}return a},[]);!R&&c.some(function(b){return b.x<O.left})&&(c=c.map(function(b){var a=k(b.anchorX,b.anchorY,b.point.isHeader,b.boxWidth,!1);return E(b,{target:a.y,x:a.x})}));f.cleanSplit();d.distribute(c,A);c.forEach(function(b){var a=
b.pos;b.tt.attr({visibility:"undefined"===typeof a?"hidden":"inherit",x:b.x,y:a+m,anchorX:b.anchorX,anchorY:b.anchorY})});c=f.container;a=f.renderer;f.outside&&c&&a&&(l=y.getBBox(),a.setSize(l.width+l.x,l.height+l.y,!1),B=B.getChartPosition(),c.style.left=B.left+"px",c.style.top=B.top+"px")};e.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&this.tracker.destroy();else{var c=this.chart,e=this.label,d=c.hoverPoint;if(e&&d){var f={x:0,y:0,width:0,height:0};
d=this.getAnchor(d);var a=e.getBBox();d[0]+=c.plotLeft-e.translateX;d[1]+=c.plotTop-e.translateY;f.x=Math.min(0,d[0]);f.y=Math.min(0,d[1]);f.width=0>d[0]?Math.max(Math.abs(d[0]),a.width-d[0]):Math.max(Math.abs(d[0]),a.width);f.height=0>d[1]?Math.max(Math.abs(d[1]),a.height-Math.abs(d[1])):Math.max(Math.abs(d[1]),a.height);this.tracker?this.tracker.attr(f):(this.tracker=e.renderer.rect(f).addClass("highcharts-tracker").add(e),c.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};e.prototype.styledModeFormat=
function(c){return c.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};e.prototype.tooltipFooterHeaderFormatter=function(c,e){var k=e?"footer":"header",f=c.series,a=f.tooltipOptions,l=a.xDateFormat,v=f.xAxis,h=v&&"datetime"===v.options.type&&G(c.key),w=a[k+"Format"];e={isFooter:e,labelConfig:c};d.fireEvent(this,"headerFormatter",e,function(e){h&&!l&&(l=this.getXDateFormat(c,a,v));h&&l&&(c.point&&
c.point.tooltipDateKeys||["key"]).forEach(function(a){w=w.replace("{point."+a+"}","{point."+a+":"+l+"}")});f.chart.styledMode&&(w=this.styledModeFormat(w));e.text=A(w,{point:c,series:f},this.chart)});return e.text};e.prototype.update=function(c){this.destroy();y(!0,this.chart.options.tooltip.userOptions,c);this.init(this.chart,y(!0,this.options,c))};e.prototype.updatePosition=function(c){var e=this.chart,d=e.pointer,f=this.getLabel(),a=c.plotX+e.plotLeft,l=c.plotY+e.plotTop;d=d.getChartPosition();
c=(this.options.positioner||this.getPosition).call(this,f.width,f.height,c);if(this.outside){var v=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(f.width+v,f.height+v,!1);if(e=e.containerScaling)u(this.container,{transform:"scale("+e.scaleX+", "+e.scaleY+")"}),a*=e.scaleX,l*=e.scaleY;a+=d.left-c.x;l+=d.top-c.y}this.move(Math.round(c.x),Math.round(c.y||0),a,l)};return e}();d.Tooltip=P;return d.Tooltip});S(r,"parts/Pointer.js",[r["parts/Globals.js"],r["parts/Utilities.js"],r["parts/Tooltip.js"],
r["parts/Color.js"]],function(d,g,r,u){var I=g.addEvent,M=g.attr,E=g.css,A=g.defined,G=g.extend,J=g.find,y=g.fireEvent,t=g.isNumber,D=g.isObject,h=g.objectEach,N=g.offset,q=g.pick,P=g.splat,e=u.parse,c=d.charts,k=d.noop;g=function(){function n(c,a){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.chart=c;this.hasDragged=!1;this.options=a;this.unbindContainerMouseLeave=function(){};this.init(c,a)}n.prototype.applyInactiveState=function(c){var a=[],f;(c||[]).forEach(function(c){f=
c.series;a.push(f);f.linkedParent&&a.push(f.linkedParent);f.linkedSeries&&(a=a.concat(f.linkedSeries));f.navigatorSeries&&a.push(f.navigatorSeries)});this.chart.series.forEach(function(c){-1===a.indexOf(c)?c.setState("inactive",!0):c.options.inactiveOtherPoints&&c.setAllPointsToState("inactive")})};n.prototype.destroy=function(){var c=this;"undefined"!==typeof c.unDocMouseMove&&c.unDocMouseMove();this.unbindContainerMouseLeave();d.chartCount||(d.unbindDocumentMouseUp&&(d.unbindDocumentMouseUp=d.unbindDocumentMouseUp()),
d.unbindDocumentTouchEnd&&(d.unbindDocumentTouchEnd=d.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);h(c,function(a,f){c[f]=null})};n.prototype.drag=function(c){var a=this.chart,f=a.options.chart,d=c.chartX,k=c.chartY,w=this.zoomHor,n=this.zoomVert,h=a.plotLeft,q=a.plotTop,g=a.plotWidth,t=a.plotHeight,p=this.selectionMarker,b=this.mouseDownX||0,C=this.mouseDownY||0,x=D(f.panning)?f.panning&&f.panning.enabled:f.panning,y=f.panKey&&c[f.panKey+"Key"];if(!p||!p.touch)if(d<h?d=h:d>h+g&&(d=
h+g),k<q?k=q:k>q+t&&(k=q+t),this.hasDragged=Math.sqrt(Math.pow(b-d,2)+Math.pow(C-k,2)),10<this.hasDragged){var O=a.isInsidePlot(b-h,C-q);a.hasCartesianSeries&&(this.zoomX||this.zoomY)&&O&&!y&&!p&&(this.selectionMarker=p=a.renderer.rect(h,q,w?1:g,n?1:t,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),a.styledMode||p.attr({fill:f.selectionMarkerFill||e("#335cad").setOpacity(.25).get()}));p&&w&&(d-=b,p.attr({width:Math.abs(d),x:(0<d?0:d)+b}));p&&n&&(d=k-C,p.attr({height:Math.abs(d),y:(0<
d?0:d)+C}));O&&!p&&x&&a.pan(c,f.panning)}};n.prototype.dragStart=function(c){var a=this.chart;a.mouseIsDown=c.type;a.cancelClick=!1;a.mouseDownX=this.mouseDownX=c.chartX;a.mouseDownY=this.mouseDownY=c.chartY};n.prototype.drop=function(c){var a=this,f=this.chart,e=this.hasPinched;if(this.selectionMarker){var d={originalEvent:c,xAxis:[],yAxis:[]},k=this.selectionMarker,n=k.attr?k.attr("x"):k.x,h=k.attr?k.attr("y"):k.y,q=k.attr?k.attr("width"):k.width,g=k.attr?k.attr("height"):k.height,K;if(this.hasDragged||
e)f.axes.forEach(function(f){if(f.zoomEnabled&&A(f.min)&&(e||a[{xAxis:"zoomX",yAxis:"zoomY"}[f.coll]])){var b=f.horiz,l="touchend"===c.type?f.minPixelPadding:0,k=f.toValue((b?n:h)+l);b=f.toValue((b?n+q:h+g)-l);d[f.coll].push({axis:f,min:Math.min(k,b),max:Math.max(k,b)});K=!0}}),K&&y(f,"selection",d,function(a){f.zoom(G(a,e?{animation:!1}:null))});t(f.index)&&(this.selectionMarker=this.selectionMarker.destroy());e&&this.scaleGroups()}f&&t(f.index)&&(E(f.container,{cursor:f._cursor}),f.cancelClick=
10<this.hasDragged,f.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};n.prototype.findNearestKDPoint=function(c,a,e){var f=this.chart,d=f.hoverPoint;f=f.tooltip;if(d&&f&&f.isStickyOnContact())return d;var l;c.forEach(function(c){var f=!(c.noSharedTooltip&&a)&&0>c.options.findNearestPointBy.indexOf("y");c=c.searchPoint(e,f);if((f=D(c,!0))&&!(f=!D(l,!0))){f=l.distX-c.distX;var d=l.dist-c.dist,k=(c.series.group&&c.series.group.zIndex)-(l.series.group&&l.series.group.zIndex);f=0<(0!==
f&&a?f:0!==d?d:0!==k?k:l.series.index>c.series.index?-1:1)}f&&(l=c)});return l};n.prototype.getChartCoordinatesFromPoint=function(c,a){var f=c.series,e=f.xAxis;f=f.yAxis;var d=q(c.clientX,c.plotX),k=c.shapeArgs;if(e&&f)return a?{chartX:e.len+e.pos-d,chartY:f.len+f.pos-c.plotY}:{chartX:d+e.pos,chartY:c.plotY+f.pos};if(k&&k.x&&k.y)return{chartX:k.x,chartY:k.y}};n.prototype.getChartPosition=function(){return this.chartPosition||(this.chartPosition=N(this.chart.container))};n.prototype.getCoordinates=
function(c){var a={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(f){a[f.isXAxis?"xAxis":"yAxis"].push({axis:f,value:f.toValue(c[f.horiz?"chartX":"chartY"])})});return a};n.prototype.getHoverData=function(c,a,e,d,k,n){var f,l=[];d=!(!d||!c);var v=a&&!a.stickyTracking,h={chartX:n?n.chartX:void 0,chartY:n?n.chartY:void 0,shared:k};y(this,"beforeGetHoverData",h);v=v?[a]:e.filter(function(a){return h.filter?h.filter(a):a.visible&&!(!k&&a.directTouch)&&q(a.options.enableMouseTracking,!0)&&a.stickyTracking});
a=(f=d||!n?c:this.findNearestKDPoint(v,k,n))&&f.series;f&&(k&&!a.noSharedTooltip?(v=e.filter(function(a){return h.filter?h.filter(a):a.visible&&!(!k&&a.directTouch)&&q(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),v.forEach(function(a){var c=J(a.points,function(b){return b.x===f.x&&!b.isNull});D(c)&&(a.chart.isBoosting&&(c=a.getPoint(c)),l.push(c))})):l.push(f));h={hoverPoint:f};y(this,"afterGetHoverData",h);return{hoverPoint:h.hoverPoint,hoverSeries:a,hoverPoints:l}};n.prototype.getPointFromEvent=
function(c){c=c.target;for(var a;c&&!a;)a=c.point,c=c.parentNode;return a};n.prototype.onTrackerMouseOut=function(c){var a=this.chart.hoverSeries;c=c.relatedTarget||c.toElement;this.isDirectTouch=!1;if(!(!a||!c||a.stickyTracking||this.inClass(c,"highcharts-tooltip")||this.inClass(c,"highcharts-series-"+a.index)&&this.inClass(c,"highcharts-tracker")))a.onMouseOut()};n.prototype.inClass=function(c,a){for(var f;c;){if(f=M(c,"class")){if(-1!==f.indexOf(a))return!0;if(-1!==f.indexOf("highcharts-container"))return!1}c=
c.parentNode}};n.prototype.init=function(c,a){this.options=a;this.chart=c;this.runChartClick=a.chart.events&&!!a.chart.events.click;this.pinchDown=[];this.lastValidTouch={};r&&(c.tooltip=new r(c,a.tooltip),this.followTouchMove=q(a.tooltip.followTouchMove,!0));this.setDOMEvents()};n.prototype.normalize=function(c,a){var f=c.touches,e=f?f.length?f.item(0):f.changedTouches[0]:c;a||(a=this.getChartPosition());f=e.pageX-a.left;a=e.pageY-a.top;if(e=this.chart.containerScaling)f/=e.scaleX,a/=e.scaleY;return G(c,
{chartX:Math.round(f),chartY:Math.round(a)})};n.prototype.onContainerClick=function(c){var a=this.chart,f=a.hoverPoint,e=a.plotLeft,d=a.plotTop;c=this.normalize(c);a.cancelClick||(f&&this.inClass(c.target,"highcharts-tracker")?(y(f.series,"click",G(c,{point:f})),a.hoverPoint&&f.firePointEvent("click",c)):(G(c,this.getCoordinates(c)),a.isInsidePlot(c.chartX-e,c.chartY-d)&&y(a,"click",c)))};n.prototype.onContainerMouseDown=function(c){c=this.normalize(c);2!==c.button&&(this.zoomOption(c),c.preventDefault&&
c.preventDefault(),this.dragStart(c))};n.prototype.onContainerMouseLeave=function(f){var a=c[d.hoverChartIndex];a&&(f.relatedTarget||f.toElement)&&(a.pointer.reset(),a.pointer.chartPosition=void 0)};n.prototype.onContainerMouseMove=function(f){var a=this.chart;A(d.hoverChartIndex)&&c[d.hoverChartIndex]&&c[d.hoverChartIndex].mouseIsDown||(d.hoverChartIndex=a.index);f=this.normalize(f);f.preventDefault||(f.returnValue=!1);"mousedown"===a.mouseIsDown&&this.drag(f);a.openMenu||!this.inClass(f.target,
"highcharts-tracker")&&!a.isInsidePlot(f.chartX-a.plotLeft,f.chartY-a.plotTop)||this.runPointActions(f)};n.prototype.onDocumentTouchEnd=function(f){c[d.hoverChartIndex]&&c[d.hoverChartIndex].pointer.drop(f)};n.prototype.onContainerTouchMove=function(c){this.touch(c)};n.prototype.onContainerTouchStart=function(c){this.zoomOption(c);this.touch(c,!0)};n.prototype.onDocumentMouseMove=function(c){var a=this.chart,f=this.chartPosition,e=a.tooltip;c=this.normalize(c,f);!f||e&&e.isStickyOnContact()||a.isInsidePlot(c.chartX-
a.plotLeft,c.chartY-a.plotTop)||this.inClass(c.target,"highcharts-tracker")||this.reset()};n.prototype.onDocumentMouseUp=function(f){c[d.hoverChartIndex]&&c[d.hoverChartIndex].pointer.drop(f)};n.prototype.pinch=function(c){var a=this,f=a.chart,e=a.pinchDown,d=c.touches||[],n=d.length,h=a.lastValidTouch,g=a.hasZoom,t=a.selectionMarker,H={},K=1===n&&(a.inClass(c.target,"highcharts-tracker")&&f.runTrackerClick||a.runChartClick),p={};1<n&&(a.initiated=!0);g&&a.initiated&&!K&&c.preventDefault();[].map.call(d,
function(b){return a.normalize(b)});"touchstart"===c.type?([].forEach.call(d,function(b,a){e[a]={chartX:b.chartX,chartY:b.chartY}}),h.x=[e[0].chartX,e[1]&&e[1].chartX],h.y=[e[0].chartY,e[1]&&e[1].chartY],f.axes.forEach(function(b){if(b.zoomEnabled){var a=f.bounds[b.horiz?"h":"v"],c=b.minPixelPadding,e=b.toPixels(Math.min(q(b.options.min,b.dataMin),b.dataMin)),d=b.toPixels(Math.max(q(b.options.max,b.dataMax),b.dataMax)),l=Math.max(e,d);a.min=Math.min(b.pos,Math.min(e,d)-c);a.max=Math.max(b.pos+b.len,
l+c)}}),a.res=!0):a.followTouchMove&&1===n?this.runPointActions(a.normalize(c)):e.length&&(t||(a.selectionMarker=t=G({destroy:k,touch:!0},f.plotBox)),a.pinchTranslate(e,d,H,t,p,h),a.hasPinched=g,a.scaleGroups(H,p),a.res&&(a.res=!1,this.reset(!1,0)))};n.prototype.pinchTranslate=function(c,a,e,d,k,n){this.zoomHor&&this.pinchTranslateDirection(!0,c,a,e,d,k,n);this.zoomVert&&this.pinchTranslateDirection(!1,c,a,e,d,k,n)};n.prototype.pinchTranslateDirection=function(c,a,e,d,k,n,h,q){var f=this.chart,l=
c?"x":"y",v=c?"X":"Y",p="chart"+v,b=c?"width":"height",w=f["plot"+(c?"Left":"Top")],x,B,g=q||1,z=f.inverted,t=f.bounds[c?"h":"v"],m=1===a.length,L=a[0][p],y=e[0][p],u=!m&&a[1][p],F=!m&&e[1][p];e=function(){"number"===typeof F&&20<Math.abs(L-u)&&(g=q||Math.abs(y-F)/Math.abs(L-u));B=(w-y)/g+L;x=f["plot"+(c?"Width":"Height")]/g};e();a=B;if(a<t.min){a=t.min;var V=!0}else a+x>t.max&&(a=t.max-x,V=!0);V?(y-=.8*(y-h[l][0]),"number"===typeof F&&(F-=.8*(F-h[l][1])),e()):h[l]=[y,F];z||(n[l]=B-w,n[b]=x);n=z?
1/g:g;k[b]=x;k[l]=a;d[z?c?"scaleY":"scaleX":"scale"+v]=g;d["translate"+v]=n*w+(y-n*L)};n.prototype.reset=function(c,a){var f=this.chart,e=f.hoverSeries,d=f.hoverPoint,k=f.hoverPoints,n=f.tooltip,h=n&&n.shared?k:d;c&&h&&P(h).forEach(function(a){a.series.isCartesian&&"undefined"===typeof a.plotX&&(c=!1)});if(c)n&&h&&P(h).length&&(n.refresh(h),n.shared&&k?k.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&
a.series.yAxis.drawCrosshair(null,a))}):d&&(d.setState(d.state,!0),f.axes.forEach(function(a){a.crosshair&&d.series[a.coll]===a&&a.drawCrosshair(null,d)})));else{if(d)d.onMouseOut();k&&k.forEach(function(a){a.setState()});if(e)e.onMouseOut();n&&n.hide(a);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());f.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=f.hoverPoints=f.hoverPoint=null}};n.prototype.runPointActions=function(f,a){var e=this.chart,k=e.tooltip&&e.tooltip.options.enabled?
e.tooltip:void 0,n=k?k.shared:!1,h=a||e.hoverPoint,g=h&&h.series||e.hoverSeries;g=this.getHoverData(h,g,e.series,(!f||"touchmove"!==f.type)&&(!!a||g&&g.directTouch&&this.isDirectTouch),n,f);h=g.hoverPoint;var t=g.hoverPoints;a=(g=g.hoverSeries)&&g.tooltipOptions.followPointer;n=n&&g&&!g.noSharedTooltip;if(h&&(h!==e.hoverPoint||k&&k.isHidden)){(e.hoverPoints||[]).forEach(function(a){-1===t.indexOf(a)&&a.setState()});if(e.hoverSeries!==g)g.onMouseOver();this.applyInactiveState(t);(t||[]).forEach(function(a){a.setState("hover")});
e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");if(!h.series)return;h.firePointEvent("mouseOver");e.hoverPoints=t;e.hoverPoint=h;k&&k.refresh(n?t:h,f)}else a&&k&&!k.isHidden&&(h=k.getAnchor([{}],f),k.updatePosition({plotX:h[0],plotY:h[1]}));this.unDocMouseMove||(this.unDocMouseMove=I(e.container.ownerDocument,"mousemove",function(a){var f=c[d.hoverChartIndex];if(f)f.pointer.onDocumentMouseMove(a)}));e.axes.forEach(function(a){var c=q(a.crosshair.snap,!0),e=c?J(t,function(c){return c.series[a.coll]===
a}):void 0;e||!c?a.drawCrosshair(f,e):a.hideCrosshair()})};n.prototype.scaleGroups=function(c,a){var f=this.chart,e;f.series.forEach(function(d){e=c||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(e),d.markerGroup&&(d.markerGroup.attr(e),d.markerGroup.clip(a?f.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(e))});f.clipRect.attr(a||f.clipBox)};n.prototype.setDOMEvents=function(){var c=this,a=c.chart.container,e=a.ownerDocument;a.onmousedown=function(a){c.onContainerMouseDown(a)};
a.onmousemove=function(a){c.onContainerMouseMove(a)};a.onclick=function(a){c.onContainerClick(a)};this.unbindContainerMouseLeave=I(a,"mouseleave",c.onContainerMouseLeave);d.unbindDocumentMouseUp||(d.unbindDocumentMouseUp=I(e,"mouseup",c.onDocumentMouseUp));d.hasTouch&&(I(a,"touchstart",function(a){c.onContainerTouchStart(a)}),I(a,"touchmove",function(a){c.onContainerTouchMove(a)}),d.unbindDocumentTouchEnd||(d.unbindDocumentTouchEnd=I(e,"touchend",c.onDocumentTouchEnd)))};n.prototype.touch=function(c,
a){var f=this.chart,e;if(f.index!==d.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});d.hoverChartIndex=f.index;if(1===c.touches.length)if(c=this.normalize(c),(e=f.isInsidePlot(c.chartX-f.plotLeft,c.chartY-f.plotTop))&&!f.openMenu){a&&this.runPointActions(c);if("touchmove"===c.type){a=this.pinchDown;var k=a[0]?4<=Math.sqrt(Math.pow(a[0].chartX-c.chartX,2)+Math.pow(a[0].chartY-c.chartY,2)):!1}q(k,!0)&&this.pinch(c)}else a&&this.reset();else 2===c.touches.length&&this.pinch(c)};n.prototype.zoomOption=
function(c){var a=this.chart,f=a.options.chart,e=f.zoomType||"";a=a.inverted;/touch/.test(c.type)&&(e=q(f.pinchType,e));this.zoomX=c=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=c&&!a||e&&a;this.zoomVert=e&&!a||c&&a;this.hasZoom=c||e};return n}();d.Pointer=g;return d.Pointer});S(r,"parts/MSPointer.js",[r["parts/Globals.js"],r["parts/Pointer.js"],r["parts/Utilities.js"]],function(d,g,r){function u(){var d=[];d.item=function(d){return this[d]};G(h,function(h){d.push({pageX:h.pageX,pageY:h.pageY,
target:h.target})});return d}function I(h,g,e,c){"touch"!==h.pointerType&&h.pointerType!==h.MSPOINTER_TYPE_TOUCH||!y[d.hoverChartIndex]||(c(h),c=y[d.hoverChartIndex].pointer,c[g]({type:e,target:h.currentTarget,preventDefault:D,touches:u()}))}var M=this&&this.__extends||function(){var d=function(h,e){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var d in e)e.hasOwnProperty(d)&&(c[d]=e[d])};return d(h,e)};return function(h,e){function c(){this.constructor=
h}d(h,e);h.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),E=r.addEvent,A=r.css,G=r.objectEach,J=r.removeEvent,y=d.charts,t=d.doc,D=d.noop,h={},N=!!d.win.PointerEvent;return function(d){function g(){return null!==d&&d.apply(this,arguments)||this}M(g,d);g.prototype.batchMSEvents=function(e){e(this.chart.container,N?"pointerdown":"MSPointerDown",this.onContainerPointerDown);e(this.chart.container,N?"pointermove":"MSPointerMove",this.onContainerPointerMove);e(t,N?"pointerup":
"MSPointerUp",this.onDocumentPointerUp)};g.prototype.destroy=function(){this.batchMSEvents(J);d.prototype.destroy.call(this)};g.prototype.init=function(e,c){d.prototype.init.call(this,e,c);this.hasZoom&&A(e.container,{"-ms-touch-action":"none","touch-action":"none"})};g.prototype.onContainerPointerDown=function(e){I(e,"onContainerTouchStart","touchstart",function(c){h[c.pointerId]={pageX:c.pageX,pageY:c.pageY,target:c.currentTarget}})};g.prototype.onContainerPointerMove=function(e){I(e,"onContainerTouchMove",
"touchmove",function(c){h[c.pointerId]={pageX:c.pageX,pageY:c.pageY};h[c.pointerId].target||(h[c.pointerId].target=c.currentTarget)})};g.prototype.onDocumentPointerUp=function(e){I(e,"onDocumentTouchEnd","touchend",function(c){delete h[c.pointerId]})};g.prototype.setDOMEvents=function(){d.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)};return g}(g)});S(r,"parts/Legend.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent,
u=g.css,I=g.defined,M=g.discardElement,E=g.find,A=g.fireEvent,G=g.format,J=g.isNumber,y=g.merge,t=g.pick,D=g.relativeLength,h=g.setAnimation,N=g.stableSort,q=g.syncTimeout;g=g.wrap;var P=d.isFirefox,e=d.marginNames,c=d.win,k=function(){function c(c,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=
this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=c;this.init(c,a)}c.prototype.init=function(c,a){this.chart=c;this.setOptions(a);a.enabled&&(this.render(),r(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=r(this.chart,"render",function(){this.legend.proximatePositions();
this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};c.prototype.setOptions=function(c){var a=t(c.padding,8);this.options=c;this.chart.styledMode||(this.itemStyle=c.itemStyle,this.itemHiddenStyle=y(this.itemStyle,c.itemHiddenStyle));this.itemMarginTop=c.itemMarginTop||0;this.itemMarginBottom=c.itemMarginBottom||0;this.padding=a;this.initialItemY=a-5;this.symbolWidth=t(c.symbolWidth,16);this.pages=[];this.proximate="proximate"===c.layout&&!this.chart.inverted;this.baseline=void 0};
c.prototype.update=function(c,a){var f=this.chart;this.setOptions(y(!0,this.options,c));this.destroy();f.isDirtyLegend=f.isDirtyBox=!0;t(a,!0)&&f.redraw();A(this,"afterUpdate")};c.prototype.colorizeItem=function(c,a){c.legendGroup[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var f=this.options,e=c.legendItem,d=c.legendLine,k=c.legendSymbol,h=this.itemHiddenStyle.color;f=a?f.itemStyle.color:h;var n=a?c.color||h:h,g=c.options&&c.options.marker,q={fill:n};e&&
e.css({fill:f,color:f});d&&d.attr({stroke:n});k&&(g&&k.isMarker&&(q=c.pointAttribs(),a||(q.stroke=q.fill=h)),k.attr(q))}A(this,"afterColorizeItem",{item:c,visible:a})};c.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};c.prototype.positionItem=function(c){var a=this.options,f=a.symbolPadding;a=!a.rtl;var e=c._legendItemPos,d=e[0];e=e[1];var k=c.checkbox;if((c=c.legendGroup)&&c.element)c[I(c.translateY)?"animate":"attr"]({translateX:a?
d:this.legendWidth-d-2*f-4,translateY:e});k&&(k.x=d,k.y=e)};c.prototype.destroyItem=function(c){var a=c.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(a){c[a]&&(c[a]=c[a].destroy())});a&&M(c.checkbox)};c.prototype.destroy=function(){function c(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(a){["legendItem","legendGroup"].forEach(c,a)});"clipRect up down pager nav box title group".split(" ").forEach(c,this);this.display=null};c.prototype.positionCheckboxes=
function(){var c=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,e=this.titleHeight;if(c){var d=c.translateY;this.allItems.forEach(function(f){var k=f.checkbox;if(k){var l=d+e+k.y+(this.scrollOffset||0)+3;u(k,{left:c.translateX+f.checkboxOffset+k.x-20+"px",top:l+"px",display:this.proximate||l>d-6&&l<d+a-6?"":"none"})}},this)}};c.prototype.renderTitle=function(){var c=this.options,a=this.padding,e=c.title,d=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,a-
3,a-4,null,null,null,c.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(e.style),this.title.add(this.group)),e.width||this.title.css({width:this.maxLegendWidth+"px"}),c=this.title.getBBox(),d=c.height,this.offsetWidth=c.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d};c.prototype.setText=function(c){var a=this.options;c.legendItem.attr({text:a.labelFormat?G(a.labelFormat,c,this.chart):a.labelFormatter.call(c)})};c.prototype.renderItem=function(c){var a=
this.chart,e=a.renderer,f=this.options,d=this.symbolWidth,k=f.symbolPadding,h=this.itemStyle,n=this.itemHiddenStyle,g="horizontal"===f.layout?t(f.itemDistance,20):0,q=!f.rtl,K=c.legendItem,p=!c.series,b=!p&&c.series.drawLegendSymbol?c.series:c,C=b.options;C=this.createCheckboxForItem&&C&&C.showCheckbox;g=d+k+g+(C?20:0);var x=f.useHTML,R=c.options.className;K||(c.legendGroup=e.g("legend-item").addClass("highcharts-"+b.type+"-series highcharts-color-"+c.colorIndex+(R?" "+R:"")+(p?" highcharts-series-"+
c.index:"")).attr({zIndex:1}).add(this.scrollGroup),c.legendItem=K=e.text("",q?d+k:-k,this.baseline||0,x),a.styledMode||K.css(y(c.visible?h:n)),K.attr({align:q?"left":"right",zIndex:2}).add(c.legendGroup),this.baseline||(this.fontMetrics=e.fontMetrics(a.styledMode?12:h.fontSize,K),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,K.attr("y",this.baseline)),this.symbolHeight=f.symbolHeight||this.fontMetrics.f,b.drawLegendSymbol(this,c),this.setItemEvents&&this.setItemEvents(c,K,x));C&&!c.checkbox&&
this.createCheckboxForItem&&this.createCheckboxForItem(c);this.colorizeItem(c,c.visible);!a.styledMode&&h.width||K.css({width:(f.itemWidth||this.widthOption||a.spacingBox.width)-g});this.setText(c);a=K.getBBox();c.itemWidth=c.checkboxOffset=f.itemWidth||c.legendItemWidth||a.width+g;this.maxItemWidth=Math.max(this.maxItemWidth,c.itemWidth);this.totalItemWidth+=c.itemWidth;this.itemHeight=c.itemHeight=Math.round(c.legendItemHeight||a.height||this.symbolHeight)};c.prototype.layoutItem=function(c){var a=
this.options,e=this.padding,f="horizontal"===a.layout,d=c.itemHeight,k=this.itemMarginBottom,h=this.itemMarginTop,n=f?t(a.itemDistance,20):0,g=this.maxLegendWidth;a=a.alignColumns&&this.totalItemWidth>g?this.maxItemWidth:c.itemWidth;f&&this.itemX-e+a>g&&(this.itemX=e,this.lastLineHeight&&(this.itemY+=h+this.lastLineHeight+k),this.lastLineHeight=0);this.lastItemY=h+this.itemY+k;this.lastLineHeight=Math.max(d,this.lastLineHeight);c._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=a:(this.itemY+=
h+d+k,this.lastLineHeight=d);this.offsetWidth=this.widthOption||Math.max((f?this.itemX-e-(c.checkbox?0:n):a)+e,this.offsetWidth)};c.prototype.getAllItems=function(){var c=[];this.chart.series.forEach(function(a){var e=a&&a.options;a&&t(e.showInLegend,I(e.linkedTo)?!1:void 0,!0)&&(c=c.concat(a.legendItems||("point"===e.legendType?a.data:a)))});A(this,"afterGetAllItems",{allItems:c});return c};c.prototype.getAlignment=function(){var c=this.options;return this.proximate?c.align.charAt(0)+"tv":c.floating?
"":c.align.charAt(0)+c.verticalAlign.charAt(0)+c.layout.charAt(0)};c.prototype.adjustMargins=function(c,a){var f=this.chart,d=this.options,k=this.getAlignment();k&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(l,h){l.test(k)&&!I(c[h])&&(f[e[h]]=Math.max(f[e[h]],f.legend[(h+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][h]*d[h%2?"x":"y"]+t(d.margin,12)+a[h]+(f.titleOffset[h]||0)))})};c.prototype.proximatePositions=function(){var c=this.chart,a=[],e="left"===this.options.align;
this.allItems.forEach(function(f){var d=e;if(f.yAxis&&f.points){f.xAxis.options.reversed&&(d=!d);var k=E(d?f.points:f.points.slice(0).reverse(),function(a){return J(a.plotY)});d=this.itemMarginTop+f.legendItem.getBBox().height+this.itemMarginBottom;var l=f.yAxis.top-c.plotTop;f.visible?(k=k?k.plotY:f.yAxis.height,k+=l-.3*d):k=l+f.yAxis.height;a.push({target:k,size:d,item:f})}},this);d.distribute(a,c.plotHeight);a.forEach(function(a){a.item._legendItemPos[1]=c.plotTop-c.spacing[0]+a.pos})};c.prototype.render=
function(){var c=this.chart,a=c.renderer,e=this.group,d,k=this.box,h=this.options,n=this.padding;this.itemX=n;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=D(h.width,c.spacingBox.width-n);var g=c.spacingBox.width-2*n-h.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(g/=2);this.maxLegendWidth=this.widthOption||g;e||(this.group=e=a.g("legend").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(e),this.scrollGroup=a.g().add(this.contentGroup));
this.renderTitle();g=this.getAllItems();N(g,function(a,c){return(a.options&&a.options.legendIndex||0)-(c.options&&c.options.legendIndex||0)});h.reversed&&g.reverse();this.allItems=g;this.display=d=!!g.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;g.forEach(this.renderItem,this);g.forEach(this.layoutItem,this);g=(this.widthOption||this.offsetWidth)+n;var q=this.lastItemY+this.lastLineHeight+this.titleHeight;q=this.handleOverflow(q);q+=n;k||(this.box=k=a.rect().addClass("highcharts-legend-box").attr({r:h.borderRadius}).add(e),
k.isNew=!0);c.styledMode||k.attr({stroke:h.borderColor,"stroke-width":h.borderWidth||0,fill:h.backgroundColor||"none"}).shadow(h.shadow);0<g&&0<q&&(k[k.isNew?"attr":"animate"](k.crisp.call({},{x:0,y:0,width:g,height:q},k.strokeWidth())),k.isNew=!1);k[d?"show":"hide"]();c.styledMode&&"none"===e.getStyle("display")&&(g=q=0);this.legendWidth=g;this.legendHeight=q;d&&(a=c.spacingBox,k=a.y,/(lth|ct|rth)/.test(this.getAlignment())&&0<c.titleOffset[0]?k+=c.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&
0<c.titleOffset[2]&&(k-=c.titleOffset[2]),k!==a.y&&(a=y(a,{y:k})),e.align(y(h,{width:g,height:q,verticalAlign:this.proximate?"top":h.verticalAlign}),!0,a));this.proximate||this.positionItems();A(this,"afterRender")};c.prototype.handleOverflow=function(c){var a=this,e=this.chart,f=e.renderer,d=this.options,k=d.y,h=this.padding;k=e.spacingBox.height+("top"===d.verticalAlign?-k:k)-h;var n=d.maxHeight,g,q=this.clipRect,y=d.navigation,p=t(y.animation,!0),b=y.arrowSize||12,C=this.nav,x=this.pages,R,O=this.allItems,
u=function(b){"number"===typeof b?q.attr({height:b}):q&&(a.clipRect=q.destroy(),a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+h+"px,9999px,"+(h+b)+"px,0)":"auto")},D=function(c){a[c]=f.circle(0,0,1.3*b).translate(b/2,b/2).add(C);e.styledMode||a[c].attr("fill","rgba(0,0,0,0.0001)");return a[c]};"horizontal"!==d.layout||"middle"===d.verticalAlign||d.floating||(k/=2);n&&(k=Math.min(k,n));x.length=0;c>k&&!1!==y.enabled?(this.clipHeight=g=Math.max(k-20-this.titleHeight-
h,0),this.currentPage=t(this.currentPage,1),this.fullHeight=c,O.forEach(function(b,a){var c=b._legendItemPos[1],e=Math.round(b.legendItem.getBBox().height),f=x.length;if(!f||c-x[f-1]>g&&(R||c)!==x[f-1])x.push(R||c),f++;b.pageIx=f-1;R&&(O[a-1].pageIx=f-1);a===O.length-1&&c+e-x[f-1]>g&&c!==R&&(x.push(c),b.pageIx=f);c!==R&&(R=c)}),q||(q=a.clipRect=f.clipRect(0,h,9999,0),a.contentGroup.clip(q)),u(g),C||(this.nav=C=f.g().attr({zIndex:1}).add(this.group),this.up=f.symbol("triangle",0,0,b,b).add(C),D("upTracker").on("click",
function(){a.scroll(-1,p)}),this.pager=f.text("",15,10).addClass("highcharts-legend-navigation"),e.styledMode||this.pager.css(y.style),this.pager.add(C),this.down=f.symbol("triangle-down",0,0,b,b).add(C),D("downTracker").on("click",function(){a.scroll(1,p)})),a.scroll(0),c=k):C&&(u(),this.nav=C.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return c};c.prototype.scroll=function(c,a){var e=this,f=this.chart,k=this.pages,n=k.length,g=this.currentPage+c;c=this.clipHeight;var y=this.options.navigation,
u=this.pager,H=this.padding;g>n&&(g=n);0<g&&("undefined"!==typeof a&&h(a,f),this.nav.attr({translateX:H,translateY:c+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===g?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),u.attr({text:g+"/"+n}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":g===n?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),
f.styledMode||(this.up.attr({fill:1===g?y.inactiveColor:y.activeColor}),this.upTracker.css({cursor:1===g?"default":"pointer"}),this.down.attr({fill:g===n?y.inactiveColor:y.activeColor}),this.downTracker.css({cursor:g===n?"default":"pointer"})),this.scrollOffset=-k[g-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=g,this.positionCheckboxes(),a=d.animObject(t(a,f.renderer.globalAnimation,!0)),q(function(){A(e,"afterScroll",{currentPage:g})},a.duration||
0))};return c}();(/Trident\/7\.0/.test(c.navigator&&c.navigator.userAgent)||P)&&g(k.prototype,"positionItem",function(c,e){var a=this,f=function(){e._legendItemPos&&c.call(a,e)};f();a.bubbleLegend||setTimeout(f)});d.Legend=k;return d.Legend});S(r,"parts/Chart.js",[r["parts/Globals.js"],r["parts/Legend.js"],r["parts/MSPointer.js"],r["parts/Pointer.js"],r["parts/Time.js"],r["parts/Utilities.js"]],function(d,g,r,u,I,M){var E=M.addEvent,A=M.animate,G=M.animObject,J=M.attr,y=M.createElement,t=M.css,D=
M.defined,h=M.discardElement,N=M.erase,q=M.error,P=M.extend,e=M.find,c=M.fireEvent,k=M.getStyle,n=M.isArray,f=M.isFunction,a=M.isNumber,l=M.isObject,v=M.isString,z=M.merge,w=M.numberFormat,B=M.objectEach,L=M.pick,Q=M.pInt,H=M.relativeLength,K=M.removeEvent,p=M.setAnimation,b=M.splat,C=M.syncTimeout,x=M.uniqueKey,R=d.doc,O=d.Axis,X=d.defaultOptions,U=d.charts,m=d.marginNames,T=d.seriesTypes,Z=d.win,ca=d.Chart=function(){this.getArgs.apply(this,arguments)};d.chart=function(b,a,c){return new ca(b,a,
c)};P(ca.prototype,{callbacks:[],getArgs:function(){var b=[].slice.call(arguments);if(v(b[0])||b[0].nodeName)this.renderTo=b.shift();this.init(b[0],b[1])},init:function(b,a){var e,k=b.series,h=b.plotOptions||{};c(this,"init",{args:arguments},function(){b.series=null;e=z(X,b);B(e.plotOptions,function(b,a){l(b)&&(b.tooltip=h[a]&&z(h[a].tooltip)||void 0)});e.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;e.series=b.series=k;this.userOptions=b;var m=e.chart,n=m.events;
this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=a;this.isResizing=0;this.options=e;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new I(b.time):d.time;this.numberFormatter=m.numberFormatter||w;this.styledMode=m.styledMode;this.hasCartesianSeries=m.showAxes;var p=this;p.index=U.length;U.push(p);d.chartCount++;n&&B(n,function(b,a){f(b)&&E(p,a,b)});p.xAxis=[];p.yAxis=[];p.pointCount=p.colorCounter=p.symbolCounter=0;c(p,"afterInit");
p.firstRender()})},initSeries:function(b){var a=this.options.chart;a=b.type||a.type||a.defaultSeriesType;var c=T[a];c||q(17,!0,this,{missingModuleFor:a});a=new c;a.init(this,b);return a},setSeriesData:function(){this.getSeriesOrderByLinks().forEach(function(b){b.points||b.data||!b.enabledDataSorting||b.setData(b.options.data,!1)})},getSeriesOrderByLinks:function(){return this.series.concat().sort(function(b,a){return b.linkedSeries.length||a.linkedSeries.length?a.linkedSeries.length-b.linkedSeries.length:
0})},orderSeries:function(b){var a=this.series;for(b=b||0;b<a.length;b++)a[b]&&(a[b].index=b,a[b].name=a[b].getName())},isInsidePlot:function(b,a,e){var f=e?a:b;b=e?b:a;f={x:f,y:b,isInsidePlot:0<=f&&f<=this.plotWidth&&0<=b&&b<=this.plotHeight};c(this,"afterIsInsidePlot",f);return f.isInsidePlot},redraw:function(b){c(this,"beforeRedraw");var a=this.axes,e=this.series,f=this.pointer,d=this.legend,k=this.userOptions.legend,l=this.isDirtyLegend,h=this.hasCartesianSeries,m=this.isDirtyBox,n=this.renderer,
x=n.isHidden(),g=[];this.setResponsive&&this.setResponsive(!1);p(this.hasRendered?b:!1,this);x&&this.temporaryDisplay();this.layOutTitles();for(b=e.length;b--;){var w=e[b];if(w.options.stacking){var C=!0;if(w.isDirty){var v=!0;break}}}if(v)for(b=e.length;b--;)w=e[b],w.options.stacking&&(w.isDirty=!0);e.forEach(function(b){b.isDirty&&("point"===b.options.legendType?(b.updateTotals&&b.updateTotals(),l=!0):k&&(k.labelFormatter||k.labelFormat)&&(l=!0));b.isDirtyData&&c(b,"updatedData")});l&&d&&d.options.enabled&&
(d.render(),this.isDirtyLegend=!1);C&&this.getStacks();h&&a.forEach(function(b){b.updateNames();b.setScale()});this.getMargins();h&&(a.forEach(function(b){b.isDirty&&(m=!0)}),a.forEach(function(b){var a=b.min+","+b.max;b.extKey!==a&&(b.extKey=a,g.push(function(){c(b,"afterSetExtremes",P(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(m||C)&&b.redraw()}));m&&this.drawChartBox();c(this,"predraw");e.forEach(function(b){(m||b.isDirty)&&b.visible&&b.redraw();b.isDirtyData=!1});f&&f.reset(!0);n.draw();
c(this,"redraw");c(this,"render");x&&this.temporaryDisplay(!0);g.forEach(function(b){b.call()})},get:function(b){function a(a){return a.id===b||a.options&&a.options.id===b}var c=this.series,f;var d=e(this.axes,a)||e(this.series,a);for(f=0;!d&&f<c.length;f++)d=e(c[f].points||[],a);return d},getAxes:function(){var a=this,e=this.options,f=e.xAxis=b(e.xAxis||{});e=e.yAxis=b(e.yAxis||{});c(this,"getAxes");f.forEach(function(b,a){b.index=a;b.isX=!0});e.forEach(function(b,a){b.index=a});f.concat(e).forEach(function(b){new O(a,
b)});c(this,"afterGetAxes")},getSelectedPoints:function(){var b=[];this.series.forEach(function(a){b=b.concat(a.getPointsCollection().filter(function(b){return L(b.selectedStaging,b.selected)}))});return b},getSelectedSeries:function(){return this.series.filter(function(b){return b.selected})},setTitle:function(b,a,c){this.applyDescription("title",b);this.applyDescription("subtitle",a);this.applyDescription("caption",void 0);this.layOutTitles(c)},applyDescription:function(b,a){var c=this,e="title"===
b?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};e=this.options[b]=z(!this.styledMode&&{style:e},this.options[b],a);var f=this[b];f&&a&&(this[b]=f=f.destroy());e&&!f&&(f=this.renderer.text(e.text,0,0,e.useHTML).attr({align:e.align,"class":"highcharts-"+b,zIndex:e.zIndex||4}).add(),f.update=function(a){c[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[b]](a)},this.styledMode||f.css(e.style),this[b]=f)},layOutTitles:function(b){var a=[0,0,0],e=this.renderer,
f=this.spacingBox;["title","subtitle","caption"].forEach(function(b){var c=this[b],d=this.options[b],k=d.verticalAlign||"top";b="title"===b?-3:"top"===k?a[0]+2:0;if(c){if(!this.styledMode)var l=d.style.fontSize;l=e.fontMetrics(l,c).b;c.css({width:(d.width||f.width+(d.widthAdjust||0))+"px"});var h=Math.round(c.getBBox(d.useHTML).height);c.align(P({y:"bottom"===k?l:b+l,height:h},d),!1,"spacingBox");d.floating||("top"===k?a[0]=Math.ceil(a[0]+h):"bottom"===k&&(a[2]=Math.ceil(a[2]+h)))}},this);a[0]&&"top"===
(this.options.title.verticalAlign||"top")&&(a[0]+=this.options.title.margin);a[2]&&"bottom"===this.options.caption.verticalAlign&&(a[2]+=this.options.caption.margin);var d=!this.titleOffset||this.titleOffset.join(",")!==a.join(",");this.titleOffset=a;c(this,"afterLayOutTitles");!this.isDirtyBox&&d&&(this.isDirtyBox=this.isDirtyLegend=d,this.hasRendered&&L(b,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,a=b.width;b=b.height;var c=this.renderTo;D(a)||(this.containerWidth=
k(c,"width"));D(b)||(this.containerHeight=k(c,"height"));this.chartWidth=Math.max(0,a||this.containerWidth||600);this.chartHeight=Math.max(0,H(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var a=this.renderTo;if(b)for(;a&&a.style;)a.hcOrigStyle&&(t(a,a.hcOrigStyle),delete a.hcOrigStyle),a.hcOrigDetached&&(R.body.removeChild(a),a.hcOrigDetached=!1),a=a.parentNode;else for(;a&&a.style;){R.body.contains(a)||a.parentNode||(a.hcOrigDetached=!0,R.body.appendChild(a));
if("none"===k(a,"display",!1)||a.hcOricDetached)a.hcOrigStyle={display:a.style.display,height:a.style.height,overflow:a.style.overflow},b={display:"block",overflow:"hidden"},a!==this.renderTo&&(b.height=0),t(a,b),a.offsetWidth||a.style.setProperty("display","block","important");a=a.parentNode;if(a===R.body)break}},setClassName:function(b){this.container.className="highcharts-container "+(b||"")},getContainer:function(){var b=this.options,e=b.chart;var f=this.renderTo;var k=x(),l,h;f||(this.renderTo=
f=e.renderTo);v(f)&&(this.renderTo=f=R.getElementById(f));f||q(13,!0,this);var m=Q(J(f,"data-highcharts-chart"));a(m)&&U[m]&&U[m].hasRendered&&U[m].destroy();J(f,"data-highcharts-chart",this.index);f.innerHTML="";e.skipClone||f.offsetWidth||this.temporaryDisplay();this.getChartSize();m=this.chartWidth;var n=this.chartHeight;t(f,{overflow:"hidden"});this.styledMode||(l=P({position:"relative",overflow:"hidden",width:m+"px",height:n+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
e.style));this.container=f=y("div",{id:k},l,f);this._cursor=f.style.cursor;this.renderer=new (d[e.renderer]||d.Renderer)(f,m,n,null,e.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);p(void 0,this);this.setClassName(e.className);if(this.styledMode)for(h in b.defs)this.renderer.definition(b.defs[h]);else this.renderer.setStyle(e.style);this.renderer.chartIndex=this.index;c(this,"afterGetContainer")},getMargins:function(b){var a=this.spacing,e=this.margin,f=this.titleOffset;this.resetMargins();
f[0]&&!D(e[0])&&(this.plotTop=Math.max(this.plotTop,f[0]+a[0]));f[2]&&!D(e[2])&&(this.marginBottom=Math.max(this.marginBottom,f[2]+a[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(e,a);c(this,"getMargins");b||this.getAxisMargins()},getAxisMargins:function(){var b=this,a=b.axisOffset=[0,0,0,0],c=b.colorAxis,e=b.margin,f=function(b){b.forEach(function(b){b.visible&&b.getOffset()})};b.hasCartesianSeries?f(b.axes):c&&c.length&&f(c);m.forEach(function(c,f){D(e[f])||(b[c]+=a[f])});b.setChartSize()},
reflow:function(b){var a=this,c=a.options.chart,e=a.renderTo,f=D(c.width)&&D(c.height),d=c.width||k(e,"width");c=c.height||k(e,"height");e=b?b.target:Z;if(!f&&!a.isPrinting&&d&&c&&(e===Z||e===R)){if(d!==a.containerWidth||c!==a.containerHeight)M.clearTimeout(a.reflowTimeout),a.reflowTimeout=C(function(){a.container&&a.setSize(void 0,void 0,!1)},b?100:0);a.containerWidth=d;a.containerHeight=c}},setReflow:function(b){var a=this;!1===b||this.unbindReflow?!1===b&&this.unbindReflow&&(this.unbindReflow=
this.unbindReflow()):(this.unbindReflow=E(Z,"resize",function(b){a.options&&a.reflow(b)}),E(this,"destroy",this.unbindReflow))},setSize:function(b,a,e){var f=this,d=f.renderer;f.isResizing+=1;p(e,f);e=d.globalAnimation;f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;"undefined"!==typeof b&&(f.options.chart.width=b);"undefined"!==typeof a&&(f.options.chart.height=a);f.getChartSize();f.styledMode||(e?A:t)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+"px"},e);f.setChartSize(!0);
d.setSize(f.chartWidth,f.chartHeight,e);f.axes.forEach(function(b){b.isDirty=!0;b.setScale()});f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();f.getMargins();f.redraw(e);f.oldChartHeight=null;c(f,"resize");C(function(){f&&c(f,"endResize",null,function(){--f.isResizing})},G(e).duration||0)},setChartSize:function(b){var a=this.inverted,e=this.renderer,f=this.chartWidth,d=this.chartHeight,k=this.options.chart,l=this.spacing,h=this.clipOffset,m,n,p,x;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=
n=Math.round(this.plotTop);this.plotWidth=p=Math.max(0,Math.round(f-m-this.marginRight));this.plotHeight=x=Math.max(0,Math.round(d-n-this.marginBottom));this.plotSizeX=a?x:p;this.plotSizeY=a?p:x;this.plotBorderWidth=k.plotBorderWidth||0;this.spacingBox=e.spacingBox={x:l[3],y:l[0],width:f-l[3]-l[1],height:d-l[0]-l[2]};this.plotBox=e.plotBox={x:m,y:n,width:p,height:x};f=2*Math.floor(this.plotBorderWidth/2);a=Math.ceil(Math.max(f,h[3])/2);e=Math.ceil(Math.max(f,h[0])/2);this.clipBox={x:a,y:e,width:Math.floor(this.plotSizeX-
Math.max(f,h[1])/2-a),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(f,h[2])/2-e))};b||this.axes.forEach(function(b){b.setAxisSize();b.setAxisTranslation()});c(this,"afterSetChartSize",{skipAxes:b})},resetMargins:function(){c(this,"resetMargins");var b=this,a=b.options.chart;["margin","spacing"].forEach(function(c){var e=a[c],f=l(e)?e:[e,e,e,e];["Top","Right","Bottom","Left"].forEach(function(e,d){b[c][d]=L(a[c+e],f[d])})});m.forEach(function(a,c){b[a]=L(b.margin[c],b.spacing[c])});b.axisOffset=
[0,0,0,0];b.clipOffset=[0,0,0,0]},drawChartBox:function(){var b=this.options.chart,a=this.renderer,e=this.chartWidth,f=this.chartHeight,d=this.chartBackground,k=this.plotBackground,l=this.plotBorder,h=this.styledMode,m=this.plotBGImage,n=b.backgroundColor,p=b.plotBackgroundColor,x=b.plotBackgroundImage,g,w=this.plotLeft,C=this.plotTop,v=this.plotWidth,q=this.plotHeight,t=this.plotBox,B=this.clipRect,z=this.clipBox,O="animate";d||(this.chartBackground=d=a.rect().addClass("highcharts-background").add(),
O="attr");if(h)var y=g=d.strokeWidth();else{y=b.borderWidth||0;g=y+(b.shadow?8:0);n={fill:n||"none"};if(y||d["stroke-width"])n.stroke=b.borderColor,n["stroke-width"]=y;d.attr(n).shadow(b.shadow)}d[O]({x:g/2,y:g/2,width:e-g-y%2,height:f-g-y%2,r:b.borderRadius});O="animate";k||(O="attr",this.plotBackground=k=a.rect().addClass("highcharts-plot-background").add());k[O](t);h||(k.attr({fill:p||"none"}).shadow(b.plotShadow),x&&(m?(x!==m.attr("href")&&m.attr("href",x),m.animate(t)):this.plotBGImage=a.image(x,
w,C,v,q).add()));B?B.animate({width:z.width,height:z.height}):this.clipRect=a.clipRect(z);O="animate";l||(O="attr",this.plotBorder=l=a.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());h||l.attr({stroke:b.plotBorderColor,"stroke-width":b.plotBorderWidth||0,fill:"none"});l[O](l.crisp({x:w,y:C,width:v,height:q},-l.strokeWidth()));this.isDirtyBox=!1;c(this,"afterDrawChartBox")},propFromSeries:function(){var b=this,a=b.options.chart,c,e=b.options.series,f,d;["inverted","angular","polar"].forEach(function(k){c=
T[a.type||a.defaultSeriesType];d=a[k]||c&&c.prototype[k];for(f=e&&e.length;!d&&f--;)(c=T[e[f].type])&&c.prototype[k]&&(d=!0);b[k]=d})},linkSeries:function(){var b=this,a=b.series;a.forEach(function(b){b.linkedSeries.length=0});a.forEach(function(a){var c=a.options.linkedTo;v(c)&&(c=":previous"===c?b.series[a.index-1]:b.get(c))&&c.linkedParent!==a&&(c.linkedSeries.push(a),a.linkedParent=c,c.enabledDataSorting&&a.setDataSortingOptions(),a.visible=L(a.options.visible,c.options.visible,a.visible))});
c(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(b){b.translate();b.render()})},renderLabels:function(){var b=this,a=b.options.labels;a.items&&a.items.forEach(function(c){var e=P(a.style,c.style),f=Q(e.left)+b.plotLeft,d=Q(e.top)+b.plotTop+12;delete e.left;delete e.top;b.renderer.text(c.html,f,d).attr({zIndex:2}).css(e).add()})},render:function(){var b=this.axes,a=this.colorAxis,c=this.renderer,e=this.options,f=0,d=function(b){b.forEach(function(b){b.visible&&b.render()})};
this.setTitle();this.legend=new g(this,e.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();e=this.plotWidth;b.some(function(b){if(b.horiz&&b.visible&&b.options.labels.enabled&&b.series.length)return f=21,!0});var k=this.plotHeight=Math.max(this.plotHeight-f,0);b.forEach(function(b){b.setScale()});this.getAxisMargins();var l=1.1<e/this.plotWidth;var h=1.05<k/this.plotHeight;if(l||h)b.forEach(function(b){(b.horiz&&l||!b.horiz&&h)&&b.setTickInterval(!0)}),this.getMargins();
this.drawChartBox();this.hasCartesianSeries?d(b):a&&a.length&&d(a);this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0},addCredits:function(b){var a=this;b=z(!0,this.options.credits,b);b.enabled&&!this.credits&&(this.credits=this.renderer.text(b.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){b.href&&
(Z.location.href=b.href)}).attr({align:b.position.align,zIndex:8}),a.styledMode||this.credits.css(b.style),this.credits.add().align(b.position),this.credits.update=function(b){a.credits=a.credits.destroy();a.addCredits(b)})},updateContainerScaling:function(){var b=this.container;if(b.offsetWidth&&b.offsetHeight&&b.getBoundingClientRect){var a=b.getBoundingClientRect(),c=a.width/b.offsetWidth;b=a.height/b.offsetHeight;1!==c||1!==b?this.containerScaling={scaleX:c,scaleY:b}:delete this.containerScaling}},
destroy:function(){var b=this,a=b.axes,e=b.series,f=b.container,k,l=f&&f.parentNode;c(b,"destroy");b.renderer.forExport?N(U,b):U[b.index]=void 0;d.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");K(b);for(k=a.length;k--;)a[k]=a[k].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(k=e.length;k--;)e[k]=e[k].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var c=
b[a];c&&c.destroy&&(b[a]=c.destroy())});f&&(f.innerHTML="",K(f),l&&h(f));B(b,function(a,c){delete b[c]})},firstRender:function(){var b=this,a=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();(n(a.series)?a.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();b.setSeriesData();c(b,"beforeRender");u&&(b.pointer=d.hasTouch||!Z.PointerEvent&&!Z.MSPointerEvent?new u(b,a):new r(b,a));b.render();if(!b.renderer.imgCount&&
!b.hasLoaded)b.onload();b.temporaryDisplay(!0)}},onload:function(){this.callbacks.concat([this.callback]).forEach(function(b){b&&"undefined"!==typeof this.index&&b.apply(this,[this])},this);c(this,"load");c(this,"render");D(this.index)&&this.setReflow(this.options.chart.reflow);this.hasLoaded=!0}})});S(r,"parts/ScrollablePlotArea.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent,u=g.createElement,I=g.pick,M=g.stop;g=d.Chart;"";r(g,"afterSetChartSize",function(g){var u=
this.options.chart.scrollablePlotArea,r=u&&u.minWidth;u=u&&u.minHeight;if(!this.renderer.forExport){if(r){if(this.scrollablePixelsX=r=Math.max(0,r-this.chartWidth)){this.plotWidth+=r;this.inverted?(this.clipBox.height+=r,this.plotBox.height+=r):(this.clipBox.width+=r,this.plotBox.width+=r);var E={1:{name:"right",value:r}}}}else u&&(this.scrollablePixelsY=r=Math.max(0,u-this.chartHeight))&&(this.plotHeight+=r,this.inverted?(this.clipBox.width+=r,this.plotBox.width+=r):(this.clipBox.height+=r,this.plotBox.height+=
r),E={2:{name:"bottom",value:r}});E&&!g.skipAxes&&this.axes.forEach(function(g){E[g.side]?g.getPlotLinePath=function(){var t=E[g.side].name,y=this[t];this[t]=y-E[g.side].value;var h=d.Axis.prototype.getPlotLinePath.apply(this,arguments);this[t]=y;return h}:(g.setAxisSize(),g.setAxisTranslation())})}});r(g,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});g.prototype.setUpScrolling=function(){var d=
this,g={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(g.overflowX="auto");this.scrollablePixelsY&&(g.overflowY="auto");this.scrollingContainer=u("div",{className:"highcharts-scrolling"},g,this.renderTo);r(this.scrollingContainer,"scroll",function(){d.pointer&&delete d.pointer.chartPosition});this.innerContainer=u("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=
null};g.prototype.moveFixedElements=function(){var d=this.container,g=this.fixedRenderer,u=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),r;this.scrollablePixelsX&&!this.inverted?r=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?r=".highcharts-xaxis":
this.scrollablePixelsY&&!this.inverted?r=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(r=".highcharts-yaxis");u.push(r,r+"-labels");u.forEach(function(y){[].forEach.call(d.querySelectorAll(y),function(d){(d.namespaceURI===g.SVG_NS?g.box:g.box.parentNode).appendChild(d);d.style.pointerEvents="auto"})})};g.prototype.applyFixed=function(){var g,A=!this.fixedDiv,G=this.options.chart.scrollablePlotArea;A?(this.fixedDiv=u("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",
pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=g=new d.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight),this.scrollableMask=g.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":I(G.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),r(this,"afterShowResetZoom",this.moveFixedElements),r(this,"afterLayOutTitles",
this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);g=this.chartWidth+(this.scrollablePixelsX||0);var J=this.chartHeight+(this.scrollablePixelsY||0);M(this.container);this.container.style.width=g+"px";this.container.style.height=J+"px";this.renderer.boxWrapper.attr({width:g,height:J,viewBox:[0,0,g,J].join(" ")});this.chartBackground.attr({width:g,height:J});this.scrollablePixelsY&&(this.scrollingContainer.style.height=this.chartHeight+"px");A&&(G.scrollPositionX&&
(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*G.scrollPositionX),G.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*G.scrollPositionY));J=this.axisOffset;A=this.plotTop-J[0]-1;G=this.plotLeft-J[3]-1;g=this.plotTop+this.plotHeight+J[2]+1;J=this.plotLeft+this.plotWidth+J[1]+1;var y=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),t=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);A=this.scrollablePixelsX?["M",0,A,"L",this.plotLeft-1,A,"L",this.plotLeft-
1,g,"L",0,g,"Z","M",y,A,"L",this.chartWidth,A,"L",this.chartWidth,g,"L",y,g,"Z"]:this.scrollablePixelsY?["M",G,0,"L",G,this.plotTop-1,"L",J,this.plotTop-1,"L",J,0,"Z","M",G,t,"L",G,this.chartHeight,"L",J,this.chartHeight,"L",J,t,"Z"]:["M",0,0];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:A})}});S(r,"mixins/legend-symbol.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.merge,u=g.pick;d.LegendSymbolMixin={drawRectangle:function(d,g){var r=d.symbolHeight,
A=d.options.squareSymbol;g.legendSymbol=this.chart.renderer.rect(A?(d.symbolWidth-r)/2:0,d.baseline-r+1,A?r:d.symbolWidth,r,u(d.options.symbolRadius,r/2)).addClass("highcharts-point").attr({zIndex:3}).add(g.legendGroup)},drawLineMarker:function(d){var g=this.options,E=g.marker,A=d.symbolWidth,G=d.symbolHeight,J=G/2,y=this.chart.renderer,t=this.legendGroup;d=d.baseline-Math.round(.3*d.fontMetrics.b);var D={};this.chart.styledMode||(D={"stroke-width":g.lineWidth||0},g.dashStyle&&(D.dashstyle=g.dashStyle));
this.legendLine=y.path(["M",0,d,"L",A,d]).addClass("highcharts-graph").attr(D).add(t);E&&!1!==E.enabled&&A&&(g=Math.min(u(E.radius,J),J),0===this.symbol.indexOf("url")&&(E=r(E,{width:G,height:G}),g=0),this.legendSymbol=E=y.symbol(this.symbol,A/2-g,d-g,2*g,2*g,E).addClass("highcharts-point").add(t),E.isMarker=!0)}};return d.LegendSymbolMixin});S(r,"parts/Point.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){"";var r=g.animObject,u=g.defined,I=g.erase,M=g.extend,E=g.format,A=g.getNestedProperty,
G=g.isArray,J=g.isNumber,y=g.isObject,t=g.syncTimeout,D=g.pick,h=g.removeEvent,N=g.uniqueKey,q=d.fireEvent;g=function(){function d(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}d.prototype.animateBeforeDestroy=function(){var e=this,c={x:e.startXPos,opacity:0},d,h=e.getGraphicalProps();h.singular.forEach(function(f){d="dataLabel"===
f;e[f]=e[f].animate(d?{x:e[f].startXPos,y:e[f].startYPos,opacity:0}:c)});h.plural.forEach(function(c){e[c].forEach(function(a){a.element&&a.animate(M({x:e.startXPos},a.startYPos?{x:a.startXPos,y:a.startYPos}:{}))})})};d.prototype.applyOptions=function(e,c){var k=this.series,h=k.options.pointValKey||k.pointValKey;e=d.prototype.optionsToObject.call(this,e);M(this,e);this.options=this.options?M(this.options,e):e;e.group&&delete this.group;e.dataLabels&&delete this.dataLabels;h&&(this.y=d.prototype.getNestedProperty.call(this,
h));this.formatPrefix=(this.isNull=D(this.isValid&&!this.isValid(),null===this.x||!J(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof c&&k.xAxis&&k.xAxis.hasNames&&(this.x=k.xAxis.nameToX(this));"undefined"===typeof this.x&&k&&(this.x="undefined"===typeof c?k.autoIncrement(this):c);return this};d.prototype.destroy=function(){function e(){if(c.graphic||c.dataLabel||c.dataLabels)h(c),c.destroyElements();for(l in c)c[l]=null}var c=this,d=c.series,n=d.chart;
d=d.options.dataSorting;var f=n.hoverPoints,a=r(c.series.chart.renderer.globalAnimation),l;c.legendItem&&n.legend.destroyItem(c);f&&(c.setState(),I(f,c),f.length||(n.hoverPoints=null));if(c===n.hoverPoint)c.onMouseOut();d&&d.enabled?(this.animateBeforeDestroy(),t(e,a.duration)):e();n.pointCount--};d.prototype.destroyElements=function(e){var c=this;e=c.getGraphicalProps(e);e.singular.forEach(function(e){c[e]=c[e].destroy()});e.plural.forEach(function(e){c[e].forEach(function(c){c.element&&c.destroy()});
delete c[e]})};d.prototype.firePointEvent=function(e,c,d){var k=this,f=this.series.options;(f.point.events[e]||k.options&&k.options.events&&k.options.events[e])&&k.importEvents();"click"===e&&f.allowPointSelect&&(d=function(a){k.select&&k.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});q(k,e,c,d)};d.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==
typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};d.prototype.getGraphicalProps=function(e){var c=this,d=[],h,f={singular:[],plural:[]};e=e||{graphic:1,dataLabel:1};e.graphic&&d.push("graphic","shadowGroup");e.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(h=d.length;h--;){var a=d[h];c[a]&&f.singular.push(a)}["dataLabel",
"connector"].forEach(function(a){var d=a+"s";e[a]&&c[d]&&f.plural.push(d)});return f};d.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};d.prototype.getNestedProperty=function(e){if(e)return 0===e.indexOf("custom.")?A(e,this.options):this[e]};d.prototype.getZone=function(){var e=this.series,c=e.zones;e=e.zoneAxis||
"y";var d=0,h;for(h=c[d];this[e]>=h.value;)h=c[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=h&&h.color&&!this.options.color?h.color:this.nonZonedColor;return h};d.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};d.prototype.init=function(e,c,d){this.series=e;this.applyOptions(c,d);this.id=u(this.id)?this.id:N();this.resolveColor();e.chart.pointCount++;q(this,"afterInit");return this};d.prototype.optionsToObject=
function(e){var c={},k=this.series,h=k.options.keys,f=h||k.pointArrayMap||["y"],a=f.length,l=0,g=0;if(J(e)||null===e)c[f[0]]=e;else if(G(e))for(!h&&e.length>a&&(k=typeof e[0],"string"===k?c.name=e[0]:"number"===k&&(c.x=e[0]),l++);g<a;)h&&"undefined"===typeof e[l]||(0<f[g].indexOf(".")?d.prototype.setNestedProperty(c,e[l],f[g]):c[f[g]]=e[l]),l++,g++;else"object"===typeof e&&(c=e,e.dataLabels&&(k._hasPointLabels=!0),e.marker&&(k._hasPointMarkers=!0));return c};d.prototype.resolveColor=function(){var e=
this.series;var c=e.chart.options.chart.colorCount;var d=e.chart.styledMode;d||this.options.color||(this.color=e.color);e.options.colorByPoint?(d||(c=e.options.colors||e.chart.options.colors,this.color=this.color||c[e.colorCounter],c=c.length),d=e.colorCounter,e.colorCounter++,e.colorCounter===c&&(e.colorCounter=0)):d=e.colorIndex;this.colorIndex=D(this.colorIndex,d)};d.prototype.setNestedProperty=function(e,c,d){d.split(".").reduce(function(e,f,a,d){e[f]=d.length-1===a?c:y(e[f],!0)?e[f]:{};return e[f]},
e);return e};d.prototype.tooltipFormatter=function(e){var c=this.series,d=c.tooltipOptions,h=D(d.valueDecimals,""),f=d.valuePrefix||"",a=d.valueSuffix||"";c.chart.styledMode&&(e=c.chart.tooltip.styledModeFormat(e));(c.pointArrayMap||["y"]).forEach(function(c){c="{point."+c;if(f||a)e=e.replace(RegExp(c+"}","g"),f+c+"}"+a);e=e.replace(RegExp(c+"}","g"),c+":,."+h+"f}")});return E(e,{point:this,series:this.series},c.chart)};return d}();d.Point=g;return d.Point});S(r,"parts/Series.js",[r["parts/Globals.js"],
r["mixins/legend-symbol.js"],r["parts/Point.js"],r["parts/Utilities.js"]],function(d,g,r,u){"";var I=u.addEvent,M=u.animObject,E=u.arrayMax,A=u.arrayMin,G=u.clamp,J=u.correctFloat,y=u.defined,t=u.erase,D=u.error,h=u.extend,N=u.find,q=u.fireEvent,P=u.getNestedProperty,e=u.isArray,c=u.isFunction,k=u.isNumber,n=u.isString,f=u.merge,a=u.objectEach,l=u.pick,v=u.removeEvent,z=u.seriesType,w=u.splat,B=u.syncTimeout,L=d.defaultOptions,Q=d.defaultPlotOptions,H=d.seriesTypes,K=d.SVGElement,p=d.win;d.Series=
z("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){var b=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":b(this.y,-1)},padding:5,style:{fontSize:"11px",
fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,eventsToUnbind:[],
isCartesian:!0,parallelArrays:["x","y"],pointClass:r,requireSorting:!0,sorted:!0,init:function(b,e){q(this,"init",{options:e});var f=this,d=b.series,k;this.eventOptions=this.eventOptions||{};f.chart=b;f.options=e=f.setOptions(e);f.linkedSeries=[];f.bindAxes();h(f,{name:e.name,state:"",visible:!1!==e.visible,selected:!0===e.selected});var p=e.events;a(p,function(b,a){c(b)&&f.eventOptions[a]!==b&&(c(f.eventOptions[a])&&v(f,a,f.eventOptions[a]),f.eventOptions[a]=b,I(f,a,b))});if(p&&p.click||e.point&&
e.point.events&&e.point.events.click||e.allowPointSelect)b.runTrackerClick=!0;f.getColor();f.getSymbol();f.parallelArrays.forEach(function(b){f[b+"Data"]||(f[b+"Data"]=[])});f.isCartesian&&(b.hasCartesianSeries=!0);d.length&&(k=d[d.length-1]);f._i=l(k&&k._i,-1)+1;b.orderSeries(this.insert(d));e.dataSorting&&e.dataSorting.enabled?f.setDataSortingOptions():f.points||f.data||f.setData(e.data,!1);q(this,"afterInit")},is:function(b){return H[b]&&this instanceof H[b]},insert:function(b){var a=this.options.index,
c;if(k(a)){for(c=b.length;c--;)if(a>=l(b[c].options.index,b[c]._i)){b.splice(c+1,0,this);break}-1===c&&b.unshift(this);c+=1}else b.push(this);return l(c,b.length-1)},bindAxes:function(){var b=this,a=b.options,c=b.chart,e;q(this,"bindAxes",null,function(){(b.axisTypes||[]).forEach(function(f){c[f].forEach(function(c){e=c.options;if(a[f]===e.index||"undefined"!==typeof a[f]&&a[f]===e.id||"undefined"===typeof a[f]&&0===e.index)b.insert(c.series),b[f]=c,c.isDirty=!0});b[f]||b.optionalAxis===f||D(18,!0,
c)})});q(this,"afterBindAxes")},updateParallelArrays:function(b,a){var c=b.series,e=arguments,f=k(a)?function(e){var f="y"===e&&c.toYData?c.toYData(b):b[e];c[e+"Data"][a]=f}:function(b){Array.prototype[a].apply(c[b+"Data"],Array.prototype.slice.call(e,2))};c.parallelArrays.forEach(f)},hasData:function(){return this.visible&&"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var b=this.options,a=this.xIncrement,
c,e=b.pointIntervalUnit,f=this.chart.time;a=l(a,b.pointStart,0);this.pointInterval=c=l(this.pointInterval,b.pointInterval,1);e&&(b=new f.Date(a),"day"===e?f.set("Date",b,f.get("Date",b)+c):"month"===e?f.set("Month",b,f.get("Month",b)+c):"year"===e&&f.set("FullYear",b,f.get("FullYear",b)+c),c=b.getTime()-a);this.xIncrement=a+c;return a},setDataSortingOptions:function(){var b=this.options;h(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});y(b.pointRange)||(b.pointRange=1)},setOptions:function(b){var a=
this.chart,c=a.options,e=c.plotOptions,d=a.userOptions||{};b=f(b);a=a.styledMode;var k={plotOptions:e,userOptions:b};q(this,"setOptions",k);var h=k.plotOptions[this.type],m=d.plotOptions||{};this.userOptions=k.userOptions;d=f(h,e.series,d.plotOptions&&d.plotOptions[this.type],b);this.tooltipOptions=f(L.tooltip,L.plotOptions.series&&L.plotOptions.series.tooltip,L.plotOptions[this.type].tooltip,c.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,b.tooltip);this.stickyTracking=l(b.stickyTracking,
m[this.type]&&m[this.type].stickyTracking,m.series&&m.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:d.stickyTracking);null===h.marker&&delete d.marker;this.zoneAxis=d.zoneAxis;c=this.zones=(d.zones||[]).slice();!d.negativeColor&&!d.negativeFillColor||d.zones||(e={value:d[this.zoneAxis+"Threshold"]||d.threshold||0,className:"highcharts-negative"},a||(e.color=d.negativeColor,e.fillColor=d.negativeFillColor),c.push(e));c.length&&y(c[c.length-1].value)&&c.push(a?{}:{color:this.color,
fillColor:this.fillColor});q(this,"afterSetOptions",{options:d});return d},getName:function(){return l(this.options.name,"Series "+(this.index+1))},getCyclic:function(b,a,c){var e=this.chart,f=this.userOptions,d=b+"Index",k=b+"Counter",h=c?c.length:l(e.options.chart[b+"Count"],e[b+"Count"]);if(!a){var p=l(f[d],f["_"+d]);y(p)||(e.series.length||(e[k]=0),f["_"+d]=p=e[k]%h,e[k]+=1);c&&(a=c[p])}"undefined"!==typeof p&&(this[d]=p);this[b]=a},getColor:function(){this.chart.styledMode?this.getCyclic("color"):
this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||Q[this.type].color,this.chart.options.colors)},getPointsCollection:function(){return(this.hasGroupedData?this.points:this.data)||[]},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(b,a){var c=b.id,e=b.x,f=this.points,d,h=this.options.dataSorting;if(c)var l=this.chart.get(c);else if(this.linkedParent||this.enabledDataSorting){var p=
h&&h.matchByName?"name":"index";l=N(f,function(a){return!a.touched&&a[p]===b[p]});if(!l)return}if(l){var n=l&&l.index;"undefined"!==typeof n&&(d=!0)}"undefined"===typeof n&&k(e)&&(n=this.xData.indexOf(e,a));-1!==n&&"undefined"!==typeof n&&this.cropped&&(n=n>=this.cropStart?n-this.cropStart:n);!d&&f[n]&&f[n].touched&&(n=void 0);return n},drawLegendSymbol:g.drawLineMarker,updateData:function(b,a){var c=this.options,e=c.dataSorting,f=this.points,d=[],h,l,n,p=this.requireSorting,g=b.length===f.length,
w=!0;this.xIncrement=null;b.forEach(function(b,a){var l=y(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};var m=l.x;if(l.id||k(m)){if(m=this.findPointIndex(l,n),-1===m||"undefined"===typeof m?d.push(b):f[m]&&b!==c.data[m]?(f[m].update(b,!1,null,!1),f[m].touched=!0,p&&(n=m+1)):f[m]&&(f[m].touched=!0),!g||a!==m||e&&e.enabled||this.hasDerivedData)h=!0}else d.push(b)},this);if(h)for(b=f.length;b--;)(l=f[b])&&!l.touched&&l.remove&&l.remove(!1,a);else!g||e&&e.enabled?w=!1:(b.forEach(function(b,
a){f[a].update&&b!==f[a].y&&f[a].update(b,!1,null,!1)}),d.length=0);f.forEach(function(b){b&&(b.touched=!1)});if(!w)return!1;d.forEach(function(b){this.addPoint(b,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=E(this.xData),this.autoIncrement());return!0},setData:function(b,a,c,f){var d=this,h=d.points,p=h&&h.length||0,m,g=d.options,w=d.chart,x=g.dataSorting,q=null,v=d.xAxis;q=g.turboThreshold;var C=this.xData,t=this.yData,B=(m=d.pointArrayMap)&&m.length,
z=g.keys,y=0,L=1,u;b=b||[];m=b.length;a=l(a,!0);x&&x.enabled&&(b=this.sortData(b));!1!==f&&m&&p&&!d.cropped&&!d.hasGroupedData&&d.visible&&!d.isSeriesBoosting&&(u=this.updateData(b,c));if(!u){d.xIncrement=null;d.colorCounter=0;this.parallelArrays.forEach(function(b){d[b+"Data"].length=0});if(q&&m>q)if(q=d.getFirstValidPoint(b),k(q))for(c=0;c<m;c++)C[c]=this.autoIncrement(),t[c]=b[c];else if(e(q))if(B)for(c=0;c<m;c++)f=b[c],C[c]=f[0],t[c]=f.slice(1,B+1);else for(z&&(y=z.indexOf("x"),L=z.indexOf("y"),
y=0<=y?y:0,L=0<=L?L:1),c=0;c<m;c++)f=b[c],C[c]=f[y],t[c]=f[L];else D(12,!1,w);else for(c=0;c<m;c++)"undefined"!==typeof b[c]&&(f={series:d},d.pointClass.prototype.applyOptions.apply(f,[b[c]]),d.updateParallelArrays(f,c));t&&n(t[0])&&D(14,!0,w);d.data=[];d.options.data=d.userOptions.data=b;for(c=p;c--;)h[c]&&h[c].destroy&&h[c].destroy();v&&(v.minRange=v.userMinRange);d.isDirty=w.isDirtyBox=!0;d.isDirtyData=!!h;c=!1}"point"===g.legendType&&(this.processData(),this.generatePoints());a&&w.redraw(c)},
sortData:function(b){var a=this,c=a.options.dataSorting.sortKey||"y",e=function(b,a){return y(a)&&b.pointClass.prototype.optionsToObject.call({series:b},a)||{}};b.forEach(function(c,f){b[f]=e(a,c);b[f].index=f},this);b.concat().sort(function(b,a){b=P(c,b);a=P(c,a);return a<b?-1:a>b?1:0}).forEach(function(b,a){b.x=a},this);a.linkedSeries&&a.linkedSeries.forEach(function(a){var c=a.options,f=c.data;c.dataSorting&&c.dataSorting.enabled||!f||(f.forEach(function(c,d){f[d]=e(a,c);b[d]&&(f[d].x=b[d].x,f[d].index=
d)}),a.setData(f,!1))});return b},processData:function(b){var a=this.xData,c=this.yData,e=a.length;var f=0;var d=this.xAxis,k=this.options;var h=k.cropThreshold;var l=this.getExtremesFromAll||k.getExtremesFromAll,p=this.isCartesian;k=d&&d.val2lin;var n=d&&d.isLog,g=this.requireSorting;if(p&&!this.isDirty&&!d.isDirty&&!this.yAxis.isDirty&&!b)return!1;if(d){b=d.getExtremes();var w=b.min;var q=b.max}if(p&&this.sorted&&!l&&(!h||e>h||this.forceCrop))if(a[e-1]<w||a[0]>q)a=[],c=[];else if(this.yData&&(a[0]<
w||a[e-1]>q)){f=this.cropData(this.xData,this.yData,w,q);a=f.xData;c=f.yData;f=f.start;var v=!0}for(h=a.length||1;--h;)if(e=n?k(a[h])-k(a[h-1]):a[h]-a[h-1],0<e&&("undefined"===typeof t||e<t))var t=e;else 0>e&&g&&(D(15,!1,this.chart),g=!1);this.cropped=v;this.cropStart=f;this.processedXData=a;this.processedYData=c;this.closestPointRange=this.basePointRange=t},cropData:function(b,a,c,e,f){var d=b.length,k=0,h=d,p;f=l(f,this.cropShoulder);for(p=0;p<d;p++)if(b[p]>=c){k=Math.max(0,p-f);break}for(c=p;c<
d;c++)if(b[c]>e){h=c+f;break}return{xData:b.slice(k,h),yData:a.slice(k,h),start:k,end:h}},generatePoints:function(){var b=this.options,a=b.data,c=this.data,e,f=this.processedXData,d=this.processedYData,k=this.pointClass,l=f.length,p=this.cropStart||0,n=this.hasGroupedData;b=b.keys;var g=[],v;c||n||(c=[],c.length=a.length,c=this.data=c);b&&n&&(this.options.keys=!1);for(v=0;v<l;v++){var t=p+v;if(n){var B=(new k).init(this,[f[v]].concat(w(d[v])));B.dataGroup=this.groupMap[v];B.dataGroup.options&&(B.options=
B.dataGroup.options,h(B,B.dataGroup.options),delete B.dataLabels)}else(B=c[t])||"undefined"===typeof a[t]||(c[t]=B=(new k).init(this,a[t],f[v]));B&&(B.index=t,g[v]=B)}this.options.keys=b;if(c&&(l!==(e=c.length)||n))for(v=0;v<e;v++)v!==p||n||(v+=l),c[v]&&(c[v].destroyElements(),c[v].plotX=void 0);this.data=c;this.points=g;q(this,"afterGeneratePoints")},getXExtremes:function(b){return{min:A(b),max:E(b)}},getExtremes:function(b){var a=this.xAxis,c=this.yAxis,f=this.processedXData||this.xData,d=[],h=
0,l=0;var m=0;var p=this.requireSorting?this.cropShoulder:0,n=c?c.positiveValuesOnly:!1,g;b=b||this.stackedYData||this.processedYData||[];c=b.length;a&&(m=a.getExtremes(),l=m.min,m=m.max);for(g=0;g<c;g++){var w=f[g];var v=b[g];var t=(k(v)||e(v))&&(v.length||0<v||!n);w=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!a||(f[g+p]||w)>=l&&(f[g-p]||w)<=m;if(t&&w)if(t=v.length)for(;t--;)k(v[t])&&(d[h++]=v[t]);else d[h++]=v}this.dataMin=A(d);this.dataMax=E(d);q(this,"afterGetExtremes")},
getFirstValidPoint:function(b){for(var a=null,c=b.length,e=0;null===a&&e<c;)a=b[e],e++;return a},translate:function(){this.processedXData||this.processData();this.generatePoints();var b=this.options,a=b.stacking,c=this.xAxis,f=c.categories,d=this.enabledDataSorting,h=this.yAxis,p=this.points,m=p.length,n=!!this.modifyValue,g,w=this.pointPlacementToXValue(),v=!!w,t=b.threshold,B=b.startFromThreshold?t:0,z,L=this.zoneAxis||"y",u=Number.MAX_VALUE;for(g=0;g<m;g++){var K=p[g],r=K.x,H=K.y,D=K.low,A=a&&
h.stacks[(this.negStacks&&H<(B?0:t)?"-":"")+this.stackKey];h.positiveValuesOnly&&null!==H&&0>=H&&(K.isNull=!0);K.plotX=z=J(G(c.translate(r,0,0,0,1,w,"flags"===this.type),-1E5,1E5));if(a&&this.visible&&A&&A[r]){var N=this.getStackIndicator(N,r,this.index);if(!K.isNull){var Q=A[r];var E=Q.points[N.key]}}e(E)&&(D=E[0],H=E[1],D===B&&N.key===A[r].base&&(D=l(k(t)&&t,h.min)),h.positiveValuesOnly&&0>=D&&(D=null),K.total=K.stackTotal=Q.total,K.percentage=Q.total&&K.y/Q.total*100,K.stackY=H,this.irregularWidths||
Q.setOffset(this.pointXOffset||0,this.barW||0));K.yBottom=y(D)?G(h.translate(D,0,1,0,1),-1E5,1E5):null;n&&(H=this.modifyValue(H,K));K.plotY="number"===typeof H&&Infinity!==H?G(h.translate(H,0,1,0,1),-1E5,1E5):void 0;K.isInside=this.isPointInside(K);K.clientX=v?J(c.translate(r,0,0,0,1,w)):z;K.negative=K[L]<(b[L+"Threshold"]||t||0);K.category=f&&"undefined"!==typeof f[K.x]?f[K.x]:K.x;if(!K.isNull&&!1!==K.visible){"undefined"!==typeof P&&(u=Math.min(u,Math.abs(z-P)));var P=z}K.zone=this.zones.length&&
K.getZone();!K.graphic&&this.group&&d&&(K.isNew=!0)}this.closestPointRangePx=u;q(this,"afterTranslate")},getValidPoints:function(b,a,c){var e=this.chart;return(b||this.points||[]).filter(function(b){return a&&!e.isInsidePlot(b.plotX,b.plotY,e.inverted)?!1:!1!==b.visible&&(c||!b.isNull)})},getClipBox:function(b,a){var c=this.options,e=this.chart,f=e.inverted,d=this.xAxis,k=d&&this.yAxis;b&&!1===c.clip&&k?b=f?{y:-e.chartWidth+k.len+k.pos,height:e.chartWidth,width:e.chartHeight,x:-e.chartHeight+d.len+
d.pos}:{y:-k.pos,height:e.chartHeight,width:e.chartWidth,x:-d.pos}:(b=this.clipBox||e.clipBox,a&&(b.width=e.plotSizeX,b.x=0));return a?{width:b.width,x:b.x}:b},setClip:function(b){var a=this.chart,c=this.options,e=a.renderer,f=a.inverted,d=this.clipBox,k=this.getClipBox(b),h=this.sharedClipKey||["_sharedClip",b&&b.duration,b&&b.easing,k.height,c.xAxis,c.yAxis].join(),l=a[h],p=a[h+"m"];b&&(k.width=0,f&&(k.x=a.plotHeight+(!1!==c.clip?0:a.plotTop)));l?a.hasLoaded||l.attr(k):(b&&(a[h+"m"]=p=e.clipRect(f?
a.plotSizeX+99:-99,f?-a.plotLeft:-a.plotTop,99,f?a.chartWidth:a.chartHeight)),a[h]=l=e.clipRect(k),l.count={length:0});b&&!l.count[this.index]&&(l.count[this.index]=!0,l.count.length+=1);if(!1!==c.clip||b)this.group.clip(b||d?l:a.clipRect),this.markerGroup.clip(p),this.sharedClipKey=h;b||(l.count[this.index]&&(delete l.count[this.index],--l.count.length),0===l.count.length&&h&&a[h]&&(d||(a[h]=a[h].destroy()),a[h+"m"]&&(a[h+"m"]=a[h+"m"].destroy())))},animate:function(b){var a=this.chart,c=M(this.options.animation);
if(!a.hasRendered)if(b)this.setClip(c);else{var e=this.sharedClipKey;b=a[e];var f=this.getClipBox(c,!0);b&&b.animate(f,c);a[e+"m"]&&a[e+"m"].animate({width:f.width+99,x:f.x-(a.inverted?0:99)},c)}},afterAnimate:function(){this.setClip();q(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var b=this.points,a=this.chart,c,e,f=this.options.marker,d=this[this.specialGroup]||this.markerGroup,k=this.xAxis,h=l(f.enabled,!k||k.isRadial?!0:null,this.closestPointRangePx>=f.enabledThreshold*
f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(c=0;c<b.length;c++){var p=b[c];var n=(e=p.graphic)?"animate":"attr";var g=p.marker||{};var w=!!p.marker;if((h&&"undefined"===typeof g.enabled||g.enabled)&&!p.isNull&&!1!==p.visible){var v=l(g.symbol,this.symbol);var q=this.markerAttribs(p,p.selected&&"select");this.enabledDataSorting&&(p.startXPos=k.reversed?-q.width:k.width);var t=!1!==p.isInside;e?e[t?"show":"hide"](t).animate(q):t&&(0<q.width||p.hasImage)&&(p.graphic=e=a.renderer.symbol(v,
q.x,q.y,q.width,q.height,w?g:f).add(d),this.enabledDataSorting&&a.hasRendered&&(e.attr({x:p.startXPos}),n="animate"));e&&"animate"===n&&e[t?"show":"hide"](t).animate(q);if(e&&!a.styledMode)e[n](this.pointAttribs(p,p.selected&&"select"));e&&e.addClass(p.getClassName(),!0)}else e&&(p.graphic=e.destroy())}},markerAttribs:function(b,a){var c=this.options.marker,e=b.marker||{},f=e.symbol||c.symbol,d=l(e.radius,c.radius);a&&(c=c.states[a],a=e.states&&e.states[a],d=l(a&&a.radius,c&&c.radius,d+(c&&c.radiusPlus||
0)));b.hasImage=f&&0===f.indexOf("url");b.hasImage&&(d=0);b={x:Math.floor(b.plotX)-d,y:b.plotY-d};d&&(b.width=b.height=2*d);return b},pointAttribs:function(b,a){var c=this.options.marker,e=b&&b.options,f=e&&e.marker||{},d=this.color,k=e&&e.color,h=b&&b.color;e=l(f.lineWidth,c.lineWidth);var p=b&&b.zone&&b.zone.color;b=1;d=k||p||h||d;k=f.fillColor||c.fillColor||d;d=f.lineColor||c.lineColor||d;a=a||"normal";c=c.states[a];a=f.states&&f.states[a]||{};e=l(a.lineWidth,c.lineWidth,e+l(a.lineWidthPlus,c.lineWidthPlus,
0));k=a.fillColor||c.fillColor||k;d=a.lineColor||c.lineColor||d;b=l(a.opacity,c.opacity,b);return{stroke:d,"stroke-width":e,fill:k,opacity:b}},destroy:function(b){var c=this,e=c.chart,f=/AppleWebKit\/533/.test(p.navigator.userAgent),d,k,h=c.data||[],l,n;q(c,"destroy");this.removeEvents(b);(c.axisTypes||[]).forEach(function(b){(n=c[b])&&n.series&&(t(n.series,c),n.isDirty=n.forceRedraw=!0)});c.legendItem&&c.chart.legend.destroyItem(c);for(k=h.length;k--;)(l=h[k])&&l.destroy&&l.destroy();c.points=null;
u.clearTimeout(c.animationTimeout);a(c,function(b,a){b instanceof K&&!b.survive&&(d=f&&"group"===a?"hide":"destroy",b[d]())});e.hoverSeries===c&&(e.hoverSeries=null);t(e.series,c);e.orderSeries();a(c,function(a,e){b&&"hcEvents"===e||delete c[e]})},getGraphPath:function(b,a,c){var e=this,f=e.options,d=f.step,k,h=[],l=[],p;b=b||e.points;(k=b.reversed)&&b.reverse();(d={right:1,center:2}[d]||d&&3)&&k&&(d=4-d);b=this.getValidPoints(b,!1,!(f.connectNulls&&!a&&!c));b.forEach(function(k,n){var m=k.plotX,
g=k.plotY,w=b[n-1];(k.leftCliff||w&&w.rightCliff)&&!c&&(p=!0);k.isNull&&!y(a)&&0<n?p=!f.connectNulls:k.isNull&&!a?p=!0:(0===n||p?n=["M",k.plotX,k.plotY]:e.getPointSpline?n=e.getPointSpline(b,k,n):d?(n=1===d?["L",w.plotX,g]:2===d?["L",(w.plotX+m)/2,w.plotY,"L",(w.plotX+m)/2,g]:["L",m,w.plotY],n.push("L",m,g)):n=["L",m,g],l.push(k.x),d&&(l.push(k.x),2===d&&l.push(k.x)),h.push.apply(h,n),p=!1)});h.xMap=l;return e.graphPath=h},drawGraph:function(){var b=this,a=this.options,c=(this.gappedPath||this.getGraphPath).call(this),
e=this.chart.styledMode,f=[["graph","highcharts-graph"]];e||f[0].push(a.lineColor||this.color||"#cccccc",a.dashStyle);f=b.getZonesGraphs(f);f.forEach(function(f,d){var k=f[0],h=b[k],l=h?"animate":"attr";h?(h.endX=b.preventGraphAnimation?null:c.xMap,h.animate({d:c})):c.length&&(b[k]=h=b.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(b.group));h&&!e&&(k={stroke:f[2],"stroke-width":a.lineWidth,fill:b.fillGraph&&b.color||"none"},f[3]?k.dashstyle=f[3]:"square"!==a.linecap&&(k["stroke-linecap"]=
k["stroke-linejoin"]="round"),h[l](k).shadow(2>d&&a.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,c){c=["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||"")];this.chart.styledMode||c.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(c)},this);return a},applyZones:function(){var a=this,c=this.chart,e=c.renderer,f=this.zones,d,k,h=this.clips||[],p,n=this.graph,g=this.area,w=Math.max(c.chartWidth,
c.chartHeight),v=this[(this.zoneAxis||"y")+"Axis"],q=c.inverted,t,B,z,y=!1;if(f.length&&(n||g)&&v&&"undefined"!==typeof v.min){var K=v.reversed;var L=v.horiz;n&&!this.showLine&&n.hide();g&&g.hide();var u=v.getExtremes();f.forEach(function(b,f){d=K?L?c.plotWidth:0:L?0:v.toPixels(u.min)||0;d=G(l(k,d),0,w);k=G(Math.round(v.toPixels(l(b.value,u.max),!0)||0),0,w);y&&(d=k=v.toPixels(u.max));t=Math.abs(d-k);B=Math.min(d,k);z=Math.max(d,k);v.isXAxis?(p={x:q?z:B,y:0,width:t,height:w},L||(p.x=c.plotHeight-
p.x)):(p={x:0,y:q?z:B,width:w,height:t},L&&(p.y=c.plotWidth-p.y));q&&e.isVML&&(p=v.isXAxis?{x:0,y:K?B:z,height:p.width,width:c.chartWidth}:{x:p.y-c.plotLeft-c.spacingBox.x,y:0,width:p.height,height:c.chartHeight});h[f]?h[f].animate(p):h[f]=e.clipRect(p);n&&a["zone-graph-"+f].clip(h[f]);g&&a["zone-area-"+f].clip(h[f]);y=b.value>u.max;a.resetZones&&0===k&&(k=void 0)});this.clips=h}else a.visible&&(n&&n.show(!0),g&&g.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&
(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(c.isRadialSeries?!1:a))})}var c=this,e=c.chart;c.xAxis&&(c.eventsToUnbind.push(I(e,"resize",b)),b(),c.invertGroups=b)},plotGroup:function(a,c,e,f,d){var b=this[a],k=!b;k&&(this[a]=b=this.chart.renderer.g().attr({zIndex:f||.1}).add(d));b.addClass("highcharts-"+c+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(y(this.colorIndex)?"highcharts-color-"+this.colorIndex+
" ":"")+(this.options.className||"")+(b.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);b.attr({visibility:e})[k?"attr":"animate"](this.getPlotBox());return b},getPlotBox:function(){var a=this.chart,c=this.xAxis,e=this.yAxis;a.inverted&&(c=e,e=this.xAxis);return{translateX:c?c.left:a.plotLeft,translateY:e?e.top:a.plotTop,scaleX:1,scaleY:1}},removeEvents:function(a){a?this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind.length=0):v(this)},render:function(){var a=
this,c=a.chart,e=a.options,f=!a.finishedAnimating&&c.renderer.isSVG&&M(e.animation).duration,d=a.visible?"inherit":"hidden",k=e.zIndex,h=a.hasRendered,l=c.seriesGroup,p=c.inverted;q(this,"render");var n=a.plotGroup("group","series",d,k,l);a.markerGroup=a.plotGroup("markerGroup","markers",d,k,l);f&&a.animate&&a.animate(!0);n.inverted=a.isCartesian||a.invertable?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();
a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);!1===e.clip||a.sharedClipKey||h||n.clip(c.clipRect);f&&a.animate&&a.animate();h||(a.animationTimeout=B(function(){a.afterAnimate()},f||0));a.isDirty=!1;a.hasRendered=!0;q(a,"afterRender")},redraw:function(){var a=this.chart,c=this.isDirty||this.isDirtyData,e=this.group,f=this.xAxis,d=this.yAxis;e&&(a.inverted&&e.attr({width:a.plotWidth,height:a.plotHeight}),e.animate({translateX:l(f&&f.left,a.plotLeft),translateY:l(d&&
d.top,a.plotTop)}));this.translate();this.render();c&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,c){var b=this.xAxis,e=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?b.len-a.chartY+b.pos:a.chartX-b.pos,plotY:f?e.len-a.chartX+e.pos:a.chartY-e.pos},c,a)},buildKDTree:function(a){function b(a,e,f){var d;if(d=a&&a.length){var k=c.kdAxisArray[e%f];a.sort(function(a,b){return a[k]-b[k]});d=Math.floor(d/2);return{point:a[d],left:b(a.slice(0,d),e+1,f),
right:b(a.slice(d+1),e+1,f)}}}this.buildingKdTree=!0;var c=this,e=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;B(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),e,e);c.buildingKdTree=!1},c.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,c,e){function b(a,c,e,l){var p=c.point,n=f.kdAxisArray[e%l],g=p;var m=y(a[d])&&y(p[d])?Math.pow(a[d]-p[d],2):null;var w=y(a[k])&&y(p[k])?Math.pow(a[k]-p[k],2):null;w=(m||0)+(w||0);p.dist=y(w)?Math.sqrt(w):Number.MAX_VALUE;
p.distX=y(m)?Math.sqrt(m):Number.MAX_VALUE;n=a[n]-p[n];w=0>n?"left":"right";m=0>n?"right":"left";c[w]&&(w=b(a,c[w],e+1,l),g=w[h]<g[h]?w:p);c[m]&&Math.sqrt(n*n)<g[h]&&(a=b(a,c[m],e+1,l),g=a[h]<g[h]?a:g);return g}var f=this,d=this.kdAxisArray[0],k=this.kdAxisArray[1],h=c?"distX":"dist";c=-1<f.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(e);if(this.kdTree)return b(a,this.kdTree,c,c)},pointPlacementToXValue:function(){var a=this.options,c=a.pointRange,
e=this.xAxis;a=a.pointPlacement;"between"===a&&(a=e.reversed?-.5:.5);return k(a)?a*l(c,e.pointRange):0},isPointInside:function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&0<=a.plotX&&a.plotX<=this.xAxis.len}});""});S(r,"parts/Stacking.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.correctFloat,u=g.defined,I=g.destroyObjectProperties,M=g.format,E=g.objectEach,A=g.pick;g=d.Axis;var G=d.Chart,J=d.Series;d.StackItem=
function(d,g,u,h,r){var q=d.chart.inverted;this.axis=d;this.isNegative=u;this.options=g=g||{};this.x=h;this.total=null;this.points={};this.stack=r;this.rightCliff=this.leftCliff=0;this.alignOptions={align:g.align||(q?u?"left":"right":"center"),verticalAlign:g.verticalAlign||(q?"middle":u?"bottom":"top"),y:g.y,x:g.x};this.textAlign=g.textAlign||(q?u?"right":"left":"center")};d.StackItem.prototype={destroy:function(){I(this,this.axis)},render:function(d){var g=this.axis.chart,y=this.options,h=y.format;
h=h?M(h,this,g):y.formatter.call(this);this.label?this.label.attr({text:h,visibility:"hidden"}):(this.label=g.renderer.label(h,null,null,y.shape,null,null,y.useHTML,!1,"stack-labels"),h={text:h,rotation:y.rotation,padding:A(y.padding,5),visibility:"hidden"},this.label.attr(h),g.styledMode||this.label.css(y.style),this.label.added||this.label.add(d));this.label.labelrank=g.plotHeight},setOffset:function(d,g,r,h,N){var q=this.axis,t=q.chart;h=q.translate(q.usePercentage?100:h?h:this.total,0,0,0,1);
r=q.translate(r?r:0);r=u(h)&&Math.abs(h-r);d=A(N,t.xAxis[0].translate(this.x))+d;q=u(h)&&this.getStackBox(t,this,d,h,g,r,q);g=this.label;r=this.isNegative;d="justify"===A(this.options.overflow,"justify");var e=this.textAlign;g&&q&&(N=g.getBBox(),h=g.padding,e="left"===e?t.inverted?-h:h:"right"===e?N.width:t.inverted&&"center"===e?N.width/2:t.inverted?r?N.width+h:-h:N.width/2,r=t.inverted?N.height/2:r?-h:N.height,this.alignOptions.x=A(this.options.x,0),this.alignOptions.y=A(this.options.y,0),q.x-=
e,q.y-=r,g.align(this.alignOptions,null,q),t.isInsidePlot(g.alignAttr.x+e-this.alignOptions.x,g.alignAttr.y+r-this.alignOptions.y)?g.show():(g.alignAttr.y=-9999,d=!1),d&&J.prototype.justifyDataLabel.call(this.axis,g,this.alignOptions,g.alignAttr,N,q),g.attr({x:g.alignAttr.x,y:g.alignAttr.y}),A(!d&&this.options.crop,!0)&&((t=t.isInsidePlot(g.x-h+g.width,g.y)&&t.isInsidePlot(g.x+h,g.y))||g.hide()))},getStackBox:function(d,g,r,h,u,q,A){var e=g.axis.reversed,c=d.inverted;d=A.height+A.pos-(c?d.plotLeft:
d.plotTop);g=g.isNegative&&!e||!g.isNegative&&e;return{x:c?g?h:h-q:r,y:c?d-r-u:g?d-h-q:d-h,width:c?q:u,height:c?u:q}}};G.prototype.getStacks=function(){var d=this,g=d.inverted;d.yAxis.forEach(function(d){d.stacks&&d.hasVisibleSeries&&(d.oldStacks=d.stacks)});d.series.forEach(function(t){var h=t.xAxis&&t.xAxis.options||{};!t.options.stacking||!0!==t.visible&&!1!==d.options.chart.ignoreHiddenSeries||(t.stackKey=[t.type,A(t.options.stack,""),g?h.top:h.left,g?h.height:h.width].join())})};g.prototype.buildStacks=
function(){var g=this.series,t=A(this.options.reversedStacks,!0),r=g.length,h;if(!this.isXAxis){this.usePercentage=!1;for(h=r;h--;){var u=g[t?h:r-h-1];u.setStackedPoints()}for(h=0;h<r;h++)g[h].modifyStacks();d.fireEvent(this,"afterBuildStacks")}};g.prototype.renderStackTotals=function(){var d=this.chart,g=d.renderer,r=this.stacks,h=this.stackTotalGroup;h||(this.stackTotalGroup=h=g.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());h.translate(d.plotLeft,d.plotTop);E(r,function(d){E(d,
function(d){d.render(h)})})};g.prototype.resetStacks=function(){var d=this,g=d.stacks;d.isXAxis||E(g,function(g){E(g,function(h,t){h.touched<d.stacksTouched?(h.destroy(),delete g[t]):(h.total=null,h.cumulative=null)})})};g.prototype.cleanStacks=function(){if(!this.isXAxis){if(this.oldStacks)var d=this.stacks=this.oldStacks;E(d,function(d){E(d,function(d){d.cumulative=d.total})})}};J.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var g=
this.processedXData,t=this.processedYData,D=[],h=t.length,N=this.options,q=N.threshold,G=A(N.startFromThreshold&&q,0),e=N.stack;N=N.stacking;var c=this.stackKey,k="-"+c,n=this.negStacks,f=this.yAxis,a=f.stacks,l=f.oldStacks,v,z;f.stacksTouched+=1;for(z=0;z<h;z++){var w=g[z];var B=t[z];var L=this.getStackIndicator(L,w,this.index);var Q=L.key;var H=(v=n&&B<(G?0:q))?k:c;a[H]||(a[H]={});a[H][w]||(l[H]&&l[H][w]?(a[H][w]=l[H][w],a[H][w].total=null):a[H][w]=new d.StackItem(f,f.options.stackLabels,v,w,e));
H=a[H][w];null!==B?(H.points[Q]=H.points[this.index]=[A(H.cumulative,G)],u(H.cumulative)||(H.base=Q),H.touched=f.stacksTouched,0<L.index&&!1===this.singleStacks&&(H.points[Q][0]=H.points[this.index+","+w+",0"][0])):H.points[Q]=H.points[this.index]=null;"percent"===N?(v=v?c:k,n&&a[v]&&a[v][w]?(v=a[v][w],H.total=v.total=Math.max(v.total,H.total)+Math.abs(B)||0):H.total=r(H.total+(Math.abs(B)||0))):H.total=r(H.total+(B||0));H.cumulative=A(H.cumulative,G)+(B||0);null!==B&&(H.points[Q].push(H.cumulative),
D[z]=H.cumulative)}"percent"===N&&(f.usePercentage=!0);this.stackedYData=D;f.oldStacks={}}};J.prototype.modifyStacks=function(){var d=this,g=d.stackKey,r=d.yAxis.stacks,h=d.processedXData,u,q=d.options.stacking;d[q+"Stacker"]&&[g,"-"+g].forEach(function(g){for(var e=h.length,c,k;e--;)if(c=h[e],u=d.getStackIndicator(u,c,d.index,g),k=(c=r[g]&&r[g][c])&&c.points[u.key])d[q+"Stacker"](k,c,e)})};J.prototype.percentStacker=function(d,g,u){g=g.total?100/g.total:0;d[0]=r(d[0]*g);d[1]=r(d[1]*g);this.stackedYData[u]=
d[1]};J.prototype.getStackIndicator=function(d,g,r,h){!u(d)||d.x!==g||h&&d.key!==h?d={x:g,index:0,key:h}:d.index++;d.key=[r,g,d.index].join();return d}});S(r,"parts/Dynamics.js",[r["parts/Globals.js"],r["parts/Point.js"],r["parts/Time.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=u.addEvent,M=u.animate,E=u.createElement,A=u.css,G=u.defined,J=u.erase,y=u.error,t=u.extend,D=u.fireEvent,h=u.isArray,N=u.isNumber,q=u.isObject,P=u.isString,e=u.merge,c=u.objectEach,k=u.pick,n=u.relativeLength,f=
u.setAnimation,a=u.splat,l=d.Axis;u=d.Chart;var v=d.Series,z=d.seriesTypes;d.cleanRecursively=function(a,e){var f={};c(a,function(c,k){if(q(a[k],!0)&&!a.nodeType&&e[k])c=d.cleanRecursively(a[k],e[k]),Object.keys(c).length&&(f[k]=c);else if(q(a[k])||a[k]!==e[k])f[k]=a[k]});return f};t(u.prototype,{addSeries:function(a,c,e){var f,d=this;a&&(c=k(c,!0),D(d,"addSeries",{options:a},function(){f=d.initSeries(a);d.isDirtyLegend=!0;d.linkSeries();f.enabledDataSorting&&f.setData(a.data,!1);D(d,"afterAddSeries",
{series:f});c&&d.redraw(e)}));return f},addAxis:function(a,c,e,f){return this.createAxis(c?"xAxis":"yAxis",{axis:a,redraw:e,animation:f})},addColorAxis:function(a,c,e){return this.createAxis("colorAxis",{axis:a,redraw:c,animation:e})},createAxis:function(c,f){var h=this.options,g="colorAxis"===c,n=f.redraw,w=f.animation;f=e(f.axis,{index:this[c].length,isX:"xAxis"===c});var p=g?new d.ColorAxis(this,f):new l(this,f);h[c]=a(h[c]||{});h[c].push(f);g&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=
[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));k(n,!0)&&this.redraw(w);return p},showLoading:function(a){var c=this,e=c.options,f=c.loadingDiv,d=e.loading,h=function(){f&&A(f,{left:c.plotLeft+"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+"px"})};f||(c.loadingDiv=f=E("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=E("span",{className:"highcharts-loading-inner"},null,f),I(c,"redraw",h));f.className="highcharts-loading";
c.loadingSpan.innerHTML=k(a,e.lang.loading,"");c.styledMode||(A(f,t(d.style,{zIndex:10})),A(c.loadingSpan,d.labelStyle),c.loadingShown||(A(f,{opacity:0,display:""}),M(f,{opacity:d.style.opacity||.5},{duration:d.showDuration||0})));c.loadingShown=!0;h()},hideLoading:function(){var a=this.options,c=this.loadingDiv;c&&(c.className="highcharts-loading highcharts-loading-hidden",this.styledMode||M(c,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){A(c,{display:"none"})}}));this.loadingShown=
!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:["xAxis","yAxis","zAxis",
"series"],update:function(f,h,l,g){var v=this,w={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},p,b,q,t=f.isResponsiveOptions,z=[];D(v,"update",{options:f});t||v.setResponsive(!1,!0);f=d.cleanRecursively(f,v.options);e(!0,v.userOptions,f);if(p=f.chart){e(!0,v.options.chart,p);"className"in p&&v.setClassName(p.className);"reflow"in p&&v.setReflow(p.reflow);if("inverted"in p||"polar"in p||"type"in p){v.propFromSeries();var B=!0}"alignTicks"in p&&(B=!0);c(p,function(a,
c){-1!==v.propsRequireUpdateSeries.indexOf("chart."+c)&&(b=!0);-1!==v.propsRequireDirtyBox.indexOf(c)&&(v.isDirtyBox=!0);t||-1===v.propsRequireReflow.indexOf(c)||(q=!0)});!v.styledMode&&"style"in p&&v.renderer.setStyle(p.style)}!v.styledMode&&f.colors&&(this.options.colors=f.colors);f.plotOptions&&e(!0,this.options.plotOptions,f.plotOptions);f.time&&this.time===d.time&&(this.time=new r(f.time));c(f,function(a,c){if(v[c]&&"function"===typeof v[c].update)v[c].update(a,!1);else if("function"===typeof v[w[c]])v[w[c]](a);
"chart"!==c&&-1!==v.propsRequireUpdateSeries.indexOf(c)&&(b=!0)});this.collectionsWithUpdate.forEach(function(b){if(f[b]){if("series"===b){var c=[];v[b].forEach(function(a,b){a.options.isInternal||c.push(k(a.options.index,b))})}a(f[b]).forEach(function(a,e){(e=G(a.id)&&v.get(a.id)||v[b][c?c[e]:e])&&e.coll===b&&(e.update(a,!1),l&&(e.touched=!0));!e&&l&&v.collectionsWithInit[b]&&(v.collectionsWithInit[b][0].apply(v,[a].concat(v.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});l&&v[b].forEach(function(a){a.touched||
a.options.isInternal?delete a.touched:z.push(a)})}});z.forEach(function(a){a.remove&&a.remove(!1)});B&&v.axes.forEach(function(a){a.update({},!1)});b&&v.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);f.loading&&e(!0,v.options.loading,f.loading);B=p&&p.width;p=p&&p.height;P(p)&&(p=n(p,B||v.chartWidth));q||N(B)&&B!==v.chartWidth||N(p)&&p!==v.chartHeight?v.setSize(B,p,g):k(h,!0)&&v.redraw(g);D(v,"afterUpdate",{options:f,redraw:h,animation:g})},setSubtitle:function(a,c){this.applyDescription("subtitle",
a);this.layOutTitles(c)},setCaption:function(a,c){this.applyDescription("caption",a);this.layOutTitles(c)}});u.prototype.collectionsWithInit={xAxis:[u.prototype.addAxis,[!0]],yAxis:[u.prototype.addAxis,[!1]],series:[u.prototype.addSeries]};t(g.prototype,{update:function(a,c,e,f){function d(){h.applyOptions(a);var f=b&&h.hasDummyGraphic;f=null===h.y?!f:f;b&&f&&(h.graphic=b.destroy(),delete h.hasDummyGraphic);q(a,!0)&&(b&&b.element&&a&&a.marker&&"undefined"!==typeof a.marker.symbol&&(h.graphic=b.destroy()),
a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()),h.connector&&(h.connector=h.connector.destroy()));g=h.index;l.updateParallelArrays(h,g);v.data[g]=q(v.data[g],!0)||q(a,!0)?h.options:k(a,v.data[g]);l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===v.legendType&&(n.isDirtyLegend=!0);c&&n.redraw(e)}var h=this,l=h.series,b=h.graphic,g,n=l.chart,v=l.options;c=k(c,!0);!1===f?d():h.firePointEvent("update",{options:a},d)},remove:function(a,c){this.series.removePoint(this.series.data.indexOf(this),
a,c)}});t(v.prototype,{addPoint:function(a,c,e,f,d){var h=this.options,l=this.data,b=this.chart,g=this.xAxis;g=g&&g.hasNames&&g.names;var n=h.data,v=this.xData,q;c=k(c,!0);var w={series:this};this.pointClass.prototype.applyOptions.apply(w,[a]);var t=w.x;var m=v.length;if(this.requireSorting&&t<v[m-1])for(q=!0;m&&v[m-1]>t;)m--;this.updateParallelArrays(w,"splice",m,0,0);this.updateParallelArrays(w,m);g&&w.name&&(g[t]=w.name);n.splice(m,0,a);q&&(this.data.splice(m,0,null),this.processData());"point"===
h.legendType&&this.generatePoints();e&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(w,"shift"),n.shift()));!1!==d&&D(this,"addPoint",{point:w});this.isDirtyData=this.isDirty=!0;c&&b.redraw(f)},removePoint:function(a,c,e){var d=this,h=d.data,l=h[a],g=d.points,b=d.chart,n=function(){g&&g.length===h.length&&g.splice(a,1);h.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(l||{series:d},"splice",a,1);l&&l.destroy();d.isDirty=!0;d.isDirtyData=!0;c&&b.redraw()};f(e,
b);c=k(c,!0);l?l.firePointEvent("remove",null,n):n()},remove:function(a,c,e,f){function d(){h.destroy(f);h.remove=null;l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();k(a,!0)&&l.redraw(c)}var h=this,l=h.chart;!1!==e?D(h,"remove",null,d):d()},update:function(a,c){a=d.cleanRecursively(a,this.userOptions);D(this,"update",{options:a});var f=this,h=f.chart,l=f.userOptions,g=f.initialType||f.type,n=a.type||l.type||h.options.chart.type,b=!(this.hasDerivedData||a.dataGrouping||n&&n!==this.type||"undefined"!==
typeof a.pointStart||a.pointInterval||a.pointIntervalUnit||a.keys),v=z[g].prototype,q,w=["group","markerGroup","dataLabelsGroup","transformGroup"],r=["eventOptions","navigatorSeries","baseSeries"],B=f.finishedAnimating&&{animation:!1},u={};b&&(r.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==a.visible&&r.push("area","graph"),f.parallelArrays.forEach(function(a){r.push(a+"Data")}),
a.data&&(a.dataSorting&&t(f.options.dataSorting,a.dataSorting),this.setData(a.data,!1)));a=e(l,B,{index:"undefined"===typeof l.index?f.index:l.index,pointStart:k(l.pointStart,f.xData[0])},!b&&{data:f.options.data},a);b&&a.data&&(a.data=f.options.data);r=w.concat(r);r.forEach(function(a){r[a]=f[a];delete f[a]});f.remove(!1,null,!1,!0);for(q in v)f[q]=void 0;z[n||g]?t(f,z[n||g].prototype):y(17,!0,h,{missingModuleFor:n||g});r.forEach(function(a){f[a]=r[a]});f.init(h,a);if(b&&this.points){var m=f.options;
!1===m.visible?(u.graphic=1,u.dataLabel=1):f._hasPointLabels||(n=m.marker,v=m.dataLabels,n&&(!1===n.enabled||"symbol"in n)&&(u.graphic=1),v&&!1===v.enabled&&(u.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(u).length&&a.destroyElements(u),!1===m.showInLegend&&a.legendItem&&h.legend.destroyItem(a))},this)}a.zIndex!==l.zIndex&&w.forEach(function(b){f[b]&&f[b].attr({zIndex:a.zIndex})});f.initialType=g;h.linkSeries();D(this,"afterUpdate");k(c,!0)&&h.redraw(b?
void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});t(l.prototype,{update:function(a,f){var d=this.chart,h=a&&a.events||{};a=e(this.userOptions,a);d.options[this.coll].indexOf&&(d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)]=a);c(d.options[this.coll].events,function(a,c){"undefined"===typeof h[c]&&(h[c]=void 0)});this.destroy(!0);this.init(d,t(a,{events:h}));d.isDirtyBox=!0;k(f,!0)&&d.redraw()},remove:function(a){for(var c=
this.chart,e=this.coll,f=this.series,d=f.length;d--;)f[d]&&f[d].remove(!1);J(c.axes,this);J(c[e],this);h(c.options[e])?c.options[e].splice(this.options.index,1):delete c.options[e];c[e].forEach(function(a,c){a.options.index=a.userOptions.index=c});this.destroy();c.isDirtyBox=!0;k(a,!0)&&c.redraw()},setTitle:function(a,c){this.update({title:a},c)},setCategories:function(a,c){this.update({categories:a},c)}})});S(r,"parts/AreaSeries.js",[r["parts/Globals.js"],r["parts/Color.js"],r["mixins/legend-symbol.js"],
r["parts/Utilities.js"]],function(d,g,r,u){var I=g.parse,M=u.objectEach,E=u.pick;g=u.seriesType;var A=d.Series;g("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(d){var g=[],r=[],t=this.xAxis,u=this.yAxis,h=u.stacks[this.stackKey],A={},q=this.index,G=u.series,e=G.length,c=E(u.options.reversedStacks,!0)?1:-1,k;d=d||this.points;if(this.options.stacking){for(k=0;k<d.length;k++)d[k].leftNull=d[k].rightNull=void 0,A[d[k].x]=d[k];M(h,function(c,a){null!==c.total&&r.push(a)});
r.sort(function(c,a){return c-a});var n=G.map(function(c){return c.visible});r.forEach(function(f,a){var d=0,v,z;if(A[f]&&!A[f].isNull)g.push(A[f]),[-1,1].forEach(function(d){var l=1===d?"rightNull":"leftNull",g=0,w=h[r[a+d]];if(w)for(k=q;0<=k&&k<e;)v=w.points[k],v||(k===q?A[f][l]=!0:n[k]&&(z=h[f].points[k])&&(g-=z[1]-z[0])),k+=c;A[f][1===d?"rightCliff":"leftCliff"]=g});else{for(k=q;0<=k&&k<e;){if(v=h[f].points[k]){d=v[1];break}k+=c}d=u.translate(d,0,1,0,1);g.push({isNull:!0,plotX:t.translate(f,0,
0,0,1),x:f,plotY:d,yBottom:d})}})}return g},getGraphPath:function(d){var g=A.prototype.getGraphPath,r=this.options,t=r.stacking,u=this.yAxis,h,N=[],q=[],G=this.index,e=u.stacks[this.stackKey],c=r.threshold,k=Math.round(u.getThreshold(r.threshold));r=E(r.connectNulls,"percent"===t);var n=function(f,h,l){var g=d[f];f=t&&e[g.x].points[G];var n=g[l+"Null"]||0;l=g[l+"Cliff"]||0;g=!0;if(l||n){var v=(n?f[0]:f[1])+l;var w=f[0]+l;g=!!n}else!t&&d[h]&&d[h].isNull&&(v=w=c);"undefined"!==typeof v&&(q.push({plotX:a,
plotY:null===v?k:u.getThreshold(v),isNull:g,isCliff:!0}),N.push({plotX:a,plotY:null===w?k:u.getThreshold(w),doCurve:!1}))};d=d||this.points;t&&(d=this.getStackPoints(d));for(h=0;h<d.length;h++){t||(d[h].leftCliff=d[h].rightCliff=d[h].leftNull=d[h].rightNull=void 0);var f=d[h].isNull;var a=E(d[h].rectPlotX,d[h].plotX);var l=E(d[h].yBottom,k);if(!f||r)r||n(h,h-1,"left"),f&&!t&&r||(q.push(d[h]),N.push({x:h,plotX:a,plotY:l})),r||n(h,h+1,"right")}h=g.call(this,q,!0,!0);N.reversed=!0;f=g.call(this,N,!0,
!0);f.length&&(f[0]="L");f=h.concat(f);g=g.call(this,q,!1,r);f.xMap=h.xMap;this.areaPath=f;return g},drawGraph:function(){this.areaPath=[];A.prototype.drawGraph.apply(this);var d=this,g=this.areaPath,r=this.options,t=[["area","highcharts-area",this.color,r.fillColor]];this.zones.forEach(function(g,h){t.push(["zone-area-"+h,"highcharts-area highcharts-zone-area-"+h+" "+g.className,g.color||d.color,g.fillColor||r.fillColor])});t.forEach(function(t){var h=t[0],u=d[h],q=u?"animate":"attr",y={};u?(u.endX=
d.preventGraphAnimation?null:g.xMap,u.animate({d:g})):(y.zIndex=0,u=d[h]=d.chart.renderer.path(g).addClass(t[1]).add(d.group),u.isArea=!0);d.chart.styledMode||(y.fill=E(t[3],I(t[2]).setOpacity(E(r.fillOpacity,.75)).get()));u[q](y);u.startX=g.xMap;u.shiftUnit=r.step?2:1})},drawLegendSymbol:r.drawRectangle});""});S(r,"parts/SplineSeries.js",[r["parts/Utilities.js"]],function(d){var g=d.pick;d=d.seriesType;d("spline","line",{},{getPointSpline:function(d,r,I){var u=r.plotX,E=r.plotY,A=d[I-1];I=d[I+1];
if(A&&!A.isNull&&!1!==A.doCurve&&!r.isCliff&&I&&!I.isNull&&!1!==I.doCurve&&!r.isCliff){d=A.plotY;var G=I.plotX;I=I.plotY;var J=0;var y=(1.5*u+A.plotX)/2.5;var t=(1.5*E+d)/2.5;G=(1.5*u+G)/2.5;var D=(1.5*E+I)/2.5;G!==y&&(J=(D-t)*(G-u)/(G-y)+E-D);t+=J;D+=J;t>d&&t>E?(t=Math.max(d,E),D=2*E-t):t<d&&t<E&&(t=Math.min(d,E),D=2*E-t);D>I&&D>E?(D=Math.max(I,E),t=2*E-D):D<I&&D<E&&(D=Math.min(I,E),t=2*E-D);r.rightContX=G;r.rightContY=D}r=["C",g(A.rightContX,A.plotX),g(A.rightContY,A.plotY),g(y,u),g(t,E),u,E];A.rightContX=
A.rightContY=null;return r}});""});S(r,"parts/AreaSplineSeries.js",[r["parts/Globals.js"],r["mixins/legend-symbol.js"],r["parts/Utilities.js"]],function(d,g,r){r=r.seriesType;var u=d.seriesTypes.area.prototype;r("areaspline","spline",d.defaultPlotOptions.area,{getStackPoints:u.getStackPoints,getGraphPath:u.getGraphPath,drawGraph:u.drawGraph,drawLegendSymbol:g.drawRectangle});""});S(r,"parts/ColumnSeries.js",[r["parts/Globals.js"],r["parts/Color.js"],r["mixins/legend-symbol.js"],r["parts/Utilities.js"]],
function(d,g,r,u){"";var I=g.parse,M=u.animObject,E=u.clamp,A=u.defined,G=u.extend,J=u.isNumber,y=u.merge,t=u.pick;g=u.seriesType;var D=d.Series;g("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,
borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){D.prototype.init.apply(this,arguments);var d=this,g=d.chart;g.hasRendered&&g.series.forEach(function(h){h.type===d.type&&(h.isDirty=!0)})},getColumnMetrics:function(){var d=this,g=d.options,q=d.xAxis,r=d.yAxis,e=q.options.reversedStacks;e=q.reversed&&!e||!q.reversed&&e;var c,k={},n=0;!1===g.grouping?n=1:d.chart.series.forEach(function(a){var e=a.yAxis,f=a.options;if(a.type===
d.type&&(a.visible||!d.chart.options.chart.ignoreHiddenSeries)&&r.len===e.len&&r.pos===e.pos){if(f.stacking){c=a.stackKey;"undefined"===typeof k[c]&&(k[c]=n++);var h=k[c]}else!1!==f.grouping&&(h=n++);a.columnIndex=h}});var f=Math.min(Math.abs(q.transA)*(q.ordinalSlope||g.pointRange||q.closestPointRange||q.tickInterval||1),q.len),a=f*g.groupPadding,l=(f-2*a)/(n||1);g=Math.min(g.maxPointWidth||q.len,t(g.pointWidth,l*(1-2*g.pointPadding)));d.columnMetrics={width:g,offset:(l-g)/2+(a+((d.columnIndex||
0)+(e?1:0))*l-f/2)*(e?-1:1)};return d.columnMetrics},crispCol:function(d,g,q,t){var e=this.chart,c=this.borderWidth,k=-(c%2?.5:0);c=c%2?.5:1;e.inverted&&e.renderer.isVML&&(c+=1);this.options.crisp&&(q=Math.round(d+q)+k,d=Math.round(d)+k,q-=d);t=Math.round(g+t)+c;k=.5>=Math.abs(g)&&.5<t;g=Math.round(g)+c;t-=g;k&&t&&(--g,t+=1);return{x:d,y:g,width:q,height:t}},translate:function(){var d=this,g=d.chart,q=d.options,r=d.dense=2>d.closestPointRange*d.xAxis.transA;r=d.borderWidth=t(q.borderWidth,r?0:1);
var e=d.xAxis,c=d.yAxis,k=q.threshold,n=d.translatedThreshold=c.getThreshold(k),f=t(q.minPointLength,5),a=d.getColumnMetrics(),l=a.width,v=d.barW=Math.max(l,1+2*r),z=d.pointXOffset=a.offset,w=d.dataMin,u=d.dataMax;g.inverted&&(n-=.5);q.pointPadding&&(v=Math.ceil(v));D.prototype.translate.apply(d);d.points.forEach(function(a){var h=t(a.yBottom,n),q=999+Math.abs(h),r=l,p=a.plotX;q=E(a.plotY,-q,c.len+q);var b=a.plotX+z,B=v,x=Math.min(q,h),y=Math.max(q,h)-x;if(f&&Math.abs(y)<f){y=f;var L=!c.reversed&&
!a.negative||c.reversed&&a.negative;a.y===k&&d.dataMax<=k&&c.min<k&&w!==u&&(L=!L);x=Math.abs(x-n)>f?h-f:n-(L?f:0)}A(a.options.pointWidth)&&(r=B=Math.ceil(a.options.pointWidth),b-=Math.round((r-l)/2));a.barX=b;a.pointWidth=r;a.tooltipPos=g.inverted?[c.len+c.pos-g.plotLeft-q,e.len+e.pos-g.plotTop-(p||0)-z-B/2,y]:[b+B/2,q+c.pos-g.plotTop,y];a.shapeType=d.pointClass.prototype.shapeType||"rect";a.shapeArgs=d.crispCol.apply(d,a.isNull?[b,n,B,0]:[b,x,B,y])})},getSymbol:d.noop,drawLegendSymbol:r.drawRectangle,
drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(d,g){var h=this.options,r=this.pointAttrToOptions||{};var e=r.stroke||"borderColor";var c=r["stroke-width"]||"borderWidth",k=d&&d.color||this.color,n=d&&d[e]||h[e]||this.color||k,f=d&&d[c]||h[c]||this[c]||0;r=d&&d.options.dashStyle||h.dashStyle;var a=t(d&&d.opacity,h.opacity,1);if(d&&this.zones.length){var l=d.getZone();k=d.options.color||l&&(l.color||d.nonZonedColor)||this.color;l&&
(n=l.borderColor||n,r=l.dashStyle||r,f=l.borderWidth||f)}g&&d&&(d=y(h.states[g],d.options.states&&d.options.states[g]||{}),g=d.brightness,k=d.color||"undefined"!==typeof g&&I(k).brighten(d.brightness).get()||k,n=d[e]||n,f=d[c]||f,r=d.dashStyle||r,a=t(d.opacity,a));e={fill:k,stroke:n,"stroke-width":f,opacity:a};r&&(e.dashstyle=r);return e},drawPoints:function(){var d=this,g=this.chart,q=d.options,t=g.renderer,e=q.animationLimit||250,c;d.points.forEach(function(k){var h=k.graphic,f=!!h,a=h&&g.pointCount<
e?"animate":"attr";if(J(k.plotY)&&null!==k.y){c=k.shapeArgs;h&&k.hasNewShapeType()&&(h=h.destroy());d.enabledDataSorting&&(k.startXPos=d.xAxis.reversed?-(c?c.width:0):d.xAxis.width);h||(k.graphic=h=t[k.shapeType](c).add(k.group||d.group))&&d.enabledDataSorting&&g.hasRendered&&g.pointCount<e&&(h.attr({x:k.startXPos}),f=!0,a="animate");if(h&&f)h[a](y(c));if(q.borderRadius)h[a]({r:q.borderRadius});g.styledMode||h[a](d.pointAttribs(k,k.selected&&"select")).shadow(!1!==k.allowShadow&&q.shadow,null,q.stacking&&
!q.borderRadius);h.addClass(k.getClassName(),!0)}else h&&(k.graphic=h.destroy())})},animate:function(d){var h=this,g=this.yAxis,t=h.options,e=this.chart.inverted,c={},k=e?"translateX":"translateY";if(d)c.scaleY=.001,d=E(g.toPixels(t.threshold),g.pos,g.pos+g.len),e?c.translateX=d-g.len:c.translateY=d,h.clipBox&&h.setClip(),h.group.attr(c);else{var n=h.group.attr(k);h.group.animate({scaleY:1},G(M(h.options.animation),{step:function(e,a){h.group&&(c[k]=n+a.pos*(g.pos-n),h.group.attr(c))}}))}},remove:function(){var d=
this,g=d.chart;g.hasRendered&&g.series.forEach(function(h){h.type===d.type&&(h.isDirty=!0)});D.prototype.remove.apply(d,arguments)}});""});S(r,"parts/BarSeries.js",[r["parts/Utilities.js"]],function(d){d=d.seriesType;d("bar","column",null,{inverted:!0});""});S(r,"parts/ScatterSeries.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent;g=g.seriesType;var u=d.Series;g("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&u.prototype.drawGraph.call(this)},applyJitter:function(){var d=this,g=this.options.jitter,r=this.points.length;g&&this.points.forEach(function(u,E){["x","y"].forEach(function(A,y){var t="plot"+A.toUpperCase();if(g[A]&&!u.isNull){var D=d[A+"Axis"];var h=g[A]*D.transA;
if(D&&!D.isLog){var G=Math.max(0,u[t]-h);D=Math.min(D.len,u[t]+h);y=1E4*Math.sin(E+y*r);u[t]=G+(D-G)*(y-Math.floor(y));"x"===A&&(u.clientX=u.plotX)}}})})}});r(u,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});""});S(r,"mixins/centered-series.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.isNumber,u=g.pick,I=g.relativeLength,M=d.deg2rad;d.CenteredSeriesMixin={getCenter:function(){var d=this.options,g=this.chart,r=2*(d.slicedOffset||0),J=g.plotWidth-2*r,
y=g.plotHeight-2*r,t=d.center,D=Math.min(J,y),h=d.size,N=d.innerSize||0;"string"===typeof h&&(h=parseFloat(h));"string"===typeof N&&(N=parseFloat(N));d=[u(t[0],"50%"),u(t[1],"50%"),u(h&&0>h?void 0:d.size,"100%"),u(N&&0>N?void 0:d.innerSize||0,"0%")];g.angular&&(d[3]=0);for(t=0;4>t;++t)h=d[t],g=2>t||2===t&&/%$/.test(h),d[t]=I(h,[J,y,D,d[2]][t])+(g?r:0);d[3]>d[2]&&(d[3]=d[2]);return d},getStartAndEndRadians:function(d,g){d=r(d)?d:0;g=r(g)&&g>d&&360>g-d?g:d+360;return{start:M*(d+-90),end:M*(g+-90)}}}});
S(r,"parts/PieSeries.js",[r["parts/Globals.js"],r["mixins/legend-symbol.js"],r["parts/Point.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=u.addEvent,M=u.clamp,E=u.defined,A=u.fireEvent,G=u.isNumber,J=u.merge,y=u.pick,t=u.relativeLength,D=u.seriesType,h=u.setAnimation;u=d.CenteredSeriesMixin;var N=u.getStartAndEndRadians,q=d.noop,P=d.Series;D("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",
distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],
pointAttribs:d.seriesTypes.column.prototype.pointAttribs,animate:function(e){var c=this,d=c.points,g=c.startAngleRad;e||d.forEach(function(e){var a=e.graphic,f=e.shapeArgs;a&&f&&(a.attr({r:y(e.startR,c.center&&c.center[3]/2),start:g,end:g}),a.animate({r:f.r,start:f.start,end:f.end},c.options.animation))})},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var e,c=0,d=this.points,g=d.length,f=this.options.ignoreHiddenPoint;for(e=0;e<g;e++){var a=d[e];c+=f&&!a.visible?0:
a.isNull?0:a.y}this.total=c;for(e=0;e<g;e++)a=d[e],a.percentage=0<c&&(a.visible||!f)?a.y/c*100:0,a.total=c},generatePoints:function(){P.prototype.generatePoints.call(this);this.updateTotals()},getX:function(e,c,d){var k=this.center,f=this.radii?this.radii[d.index]:k[2]/2;e=Math.asin(M((e-k[1])/(f+d.labelDistance),-1,1));return k[0]+(c?-1:1)*Math.cos(e)*(f+d.labelDistance)+(0<d.labelDistance?(c?-1:1)*this.options.dataLabels.padding:0)},translate:function(e){this.generatePoints();var c=0,d=this.options,
g=d.slicedOffset,f=g+(d.borderWidth||0),a=N(d.startAngle,d.endAngle),h=this.startAngleRad=a.start;a=(this.endAngleRad=a.end)-h;var v=this.points,q=d.dataLabels.distance;d=d.ignoreHiddenPoint;var w,r=v.length;e||(this.center=e=this.getCenter());for(w=0;w<r;w++){var u=v[w];var D=h+c*a;if(!d||u.visible)c+=u.percentage/100;var H=h+c*a;u.shapeType="arc";u.shapeArgs={x:e[0],y:e[1],r:e[2]/2,innerR:e[3]/2,start:Math.round(1E3*D)/1E3,end:Math.round(1E3*H)/1E3};u.labelDistance=y(u.options.dataLabels&&u.options.dataLabels.distance,
q);u.labelDistance=t(u.labelDistance,u.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,u.labelDistance);H=(H+D)/2;H>1.5*Math.PI?H-=2*Math.PI:H<-Math.PI/2&&(H+=2*Math.PI);u.slicedTranslation={translateX:Math.round(Math.cos(H)*g),translateY:Math.round(Math.sin(H)*g)};var K=Math.cos(H)*e[2]/2;var p=Math.sin(H)*e[2]/2;u.tooltipPos=[e[0]+.7*K,e[1]+.7*p];u.half=H<-Math.PI/2||H>Math.PI/2?1:0;u.angle=H;D=Math.min(f,u.labelDistance/5);u.labelPosition={natural:{x:e[0]+K+Math.cos(H)*u.labelDistance,
y:e[1]+p+Math.sin(H)*u.labelDistance},"final":{},alignment:0>u.labelDistance?"center":u.half?"right":"left",connectorPosition:{breakAt:{x:e[0]+K+Math.cos(H)*D,y:e[1]+p+Math.sin(H)*D},touchingSliceAt:{x:e[0]+K,y:e[1]+p}}}}A(this,"afterTranslate")},drawEmpty:function(){var e=this.options;if(0===this.total){var c=this.center[0];var d=this.center[1];this.graph||(this.graph=this.chart.renderer.circle(c,d,0).addClass("highcharts-graph").add(this.group));this.graph.animate({"stroke-width":e.borderWidth,
cx:c,cy:d,r:this.center[2]/2,fill:e.fillColor||"none",stroke:e.color||"#cccccc"},this.options.animation)}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var e=this,c=e.chart,d=c.renderer,g,f,a,h,v=e.options.shadow;this.drawEmpty();!v||e.shadowGroup||c.styledMode||(e.shadowGroup=d.g("shadow").attr({zIndex:-1}).add(e.group));e.points.forEach(function(k){var l={};f=k.graphic;if(!k.isNull&&f){h=k.shapeArgs;g=k.getTranslate();if(!c.styledMode){var n=k.shadowGroup;v&&!n&&(n=
k.shadowGroup=d.g("shadow").add(e.shadowGroup));n&&n.attr(g);a=e.pointAttribs(k,k.selected&&"select")}k.delayedRendering?(f.setRadialReference(e.center).attr(h).attr(g),c.styledMode||f.attr(a).attr({"stroke-linejoin":"round"}).shadow(v,n),k.delayedRendering=!1):(f.setRadialReference(e.center),c.styledMode||J(!0,l,a),J(!0,l,h,g),f.animate(l));f.attr({visibility:k.visible?"inherit":"hidden"});f.addClass(k.getClassName())}else f&&(k.graphic=f.destroy())})},drawPoints:function(){var e=this.chart.renderer;
this.points.forEach(function(c){c.graphic&&c.hasNewShapeType()&&(c.graphic=c.graphic.destroy());c.graphic||(c.graphic=e[c.shapeType](c.shapeArgs).add(c.series.group),c.delayedRendering=!0)})},searchPoint:q,sortByAngle:function(e,c){e.sort(function(e,d){return"undefined"!==typeof e.angle&&(d.angle-e.angle)*c})},drawLegendSymbol:g.drawRectangle,getCenter:u.getCenter,getSymbol:q,drawGraph:null},{init:function(){r.prototype.init.apply(this,arguments);var e=this;e.name=y(e.name,"Slice");var c=function(c){e.slice("select"===
c.type)};I(e,"select",c);I(e,"unselect",c);return e},isValid:function(){return G(this.y)&&0<=this.y},setVisible:function(e,c){var d=this,g=d.series,f=g.chart,a=g.options.ignoreHiddenPoint;c=y(c,a);e!==d.visible&&(d.visible=d.options.visible=e="undefined"===typeof e?!d.visible:e,g.options.data[g.data.indexOf(d)]=d.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(d[a])d[a][e?"show":"hide"](!0)}),d.legendItem&&f.legend.colorizeItem(d,e),e||"hover"!==d.state||d.setState(""),
a&&(g.isDirty=!0),c&&f.redraw())},slice:function(e,c,d){var g=this.series;h(d,g.chart);y(c,!0);this.sliced=this.options.sliced=E(e)?e:!this.sliced;g.options.data[g.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(e){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,
c.y,c.r+e,c.r+e,{innerR:c.r-1,start:c.start,end:c.end})},connectorShapes:{fixedOffset:function(e,c,d){var g=c.breakAt;c=c.touchingSliceAt;return["M",e.x,e.y].concat(d.softConnector?["C",e.x+("left"===e.alignment?-5:5),e.y,2*g.x-c.x,2*g.y-c.y,g.x,g.y]:["L",g.x,g.y]).concat(["L",c.x,c.y])},straight:function(e,c){c=c.touchingSliceAt;return["M",e.x,e.y,"L",c.x,c.y]},crookedLine:function(e,c,d){c=c.touchingSliceAt;var g=this.series,f=g.center[0],a=g.chart.plotWidth,k=g.chart.plotLeft;g=e.alignment;var h=
this.shapeArgs.r;d=t(d.crookDistance,1);d="left"===g?f+h+(a+k-f-h)*(1-d):k+(f-h)*d;f=["L",d,e.y];if("left"===g?d>e.x||d<c.x:d<e.x||d>c.x)f=[];return["M",e.x,e.y].concat(f).concat(["L",c.x,c.y])}},getConnectorPath:function(){var e=this.labelPosition,c=this.series.options.dataLabels,d=c.connectorShape,g=this.connectorShapes;g[d]&&(d=g[d]);return d.call(this,{x:e.final.x,y:e.final.y,alignment:e.alignment},e.connectorPosition,c)}});""});S(r,"parts/DataLabels.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],
function(d,g){var r=g.animObject,u=g.arrayMax,I=g.clamp,M=g.defined,E=g.extend,A=g.format,G=g.isArray,J=g.merge,y=g.objectEach,t=g.pick,D=g.relativeLength,h=g.splat,N=g.stableSort;g=d.noop;var q=d.Series,P=d.seriesTypes;d.distribute=function(e,c,g){function h(a,c){return a.target-c.target}var f,a=!0,k=e,v=[];var q=0;var w=k.reducedLen||c;for(f=e.length;f--;)q+=e[f].size;if(q>w){N(e,function(a,c){return(c.rank||0)-(a.rank||0)});for(q=f=0;q<=w;)q+=e[f].size,f++;v=e.splice(f-1,e.length)}N(e,h);for(e=
e.map(function(a){return{size:a.size,targets:[a.target],align:t(a.align,.5)}});a;){for(f=e.length;f--;)a=e[f],q=(Math.min.apply(0,a.targets)+Math.max.apply(0,a.targets))/2,a.pos=I(q-a.size*a.align,0,c-a.size);f=e.length;for(a=!1;f--;)0<f&&e[f-1].pos+e[f-1].size>e[f].pos&&(e[f-1].size+=e[f].size,e[f-1].targets=e[f-1].targets.concat(e[f].targets),e[f-1].align=.5,e[f-1].pos+e[f-1].size>c&&(e[f-1].pos=c-e[f-1].size),e.splice(f,1),a=!0)}k.push.apply(k,v);f=0;e.some(function(a){var e=0;if(a.targets.some(function(){k[f].pos=
a.pos+e;if("undefined"!==typeof g&&Math.abs(k[f].pos-k[f].target)>g)return k.slice(0,f+1).forEach(function(a){delete a.pos}),k.reducedLen=(k.reducedLen||c)-.1*c,k.reducedLen>.1*c&&d.distribute(k,c,g),!0;e+=k[f].size;f++}))return!0});N(k,h)};q.prototype.drawDataLabels=function(){function e(a,c){var b=c.filter;return b?(c=b.operator,a=a[b.property],b=b.value,">"===c&&a>b||"<"===c&&a<b||">="===c&&a>=b||"<="===c&&a<=b||"=="===c&&a==b||"==="===c&&a===b?!0:!1):!0}function c(a,c){var b=[],e;if(G(a)&&!G(c))b=
a.map(function(a){return J(a,c)});else if(G(c)&&!G(a))b=c.map(function(b){return J(a,b)});else if(G(a)||G(c))for(e=Math.max(a.length,c.length);e--;)b[e]=J(a[e],c[e]);else b=J(a,c);return b}var g=this,n=g.chart,f=g.options,a=f.dataLabels,l=g.points,v,q=g.hasRendered||0,w=r(f.animation).duration,u=Math.min(w,200),L=!n.renderer.forExport&&t(a.defer,0<u),D=n.renderer;a=c(c(n.options.plotOptions&&n.options.plotOptions.series&&n.options.plotOptions.series.dataLabels,n.options.plotOptions&&n.options.plotOptions[g.type]&&
n.options.plotOptions[g.type].dataLabels),a);d.fireEvent(this,"drawDataLabels");if(G(a)||a.enabled||g._hasPointLabels){var H=g.plotGroup("dataLabelsGroup","data-labels",L&&!q?"hidden":"inherit",a.zIndex||6);L&&(H.attr({opacity:+q}),q||setTimeout(function(){var a=g.dataLabelsGroup;a&&(g.visible&&H.show(!0),a[f.animation?"animate":"attr"]({opacity:1},{duration:u}))},w-u));l.forEach(function(d){v=h(c(a,d.dlOptions||d.options&&d.options.dataLabels));v.forEach(function(a,b){var c=a.enabled&&(!d.isNull||
d.dataLabelOnNull)&&e(d,a),h=d.dataLabels?d.dataLabels[b]:d.dataLabel,k=d.connectors?d.connectors[b]:d.connector,l=t(a.distance,d.labelDistance),p=!h;if(c){var v=d.getLabelConfig();var m=t(a[d.formatPrefix+"Format"],a.format);v=M(m)?A(m,v,n):(a[d.formatPrefix+"Formatter"]||a.formatter).call(v,a);m=a.style;var q=a.rotation;n.styledMode||(m.color=t(a.color,m.color,g.color,"#000000"),"contrast"===m.color?(d.contrastColor=D.getContrast(d.color||g.color),m.color=!M(l)&&a.inside||0>l||f.stacking?d.contrastColor:
"#000000"):delete d.contrastColor,f.cursor&&(m.cursor=f.cursor));var w={r:a.borderRadius||0,rotation:q,padding:a.padding,zIndex:1};n.styledMode||(w.fill=a.backgroundColor,w.stroke=a.borderColor,w["stroke-width"]=a.borderWidth);y(w,function(a,b){"undefined"===typeof a&&delete w[b]})}!h||c&&M(v)?c&&M(v)&&(h?w.text=v:(d.dataLabels=d.dataLabels||[],h=d.dataLabels[b]=q?D.text(v,0,-9999,a.useHTML).addClass("highcharts-data-label"):D.label(v,0,-9999,a.shape,null,null,a.useHTML,null,"data-label"),b||(d.dataLabel=
h),h.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(a.className||"")+(a.useHTML?" highcharts-tracker":""))),h.options=a,h.attr(w),n.styledMode||h.css(m).shadow(a.shadow),h.added||h.add(H),a.textPath&&!a.useHTML&&(h.setTextPath(d.getDataLabelPath&&d.getDataLabelPath(h)||d.graphic,a.textPath),d.dataLabelPath&&!a.textPath.enabled&&(d.dataLabelPath=d.dataLabelPath.destroy())),g.alignDataLabel(d,h,a,null,p)):(d.dataLabel=d.dataLabel&&d.dataLabel.destroy(),d.dataLabels&&(1===d.dataLabels.length?
delete d.dataLabels:delete d.dataLabels[b]),b||delete d.dataLabel,k&&(d.connector=d.connector.destroy(),d.connectors&&(1===d.connectors.length?delete d.connectors:delete d.connectors[b])))})})}d.fireEvent(this,"afterDrawDataLabels")};q.prototype.alignDataLabel=function(d,c,g,h,f){var a=this,e=this.chart,k=this.isCartesian&&e.inverted,n=this.enabledDataSorting,q=t(d.dlBox&&d.dlBox.centerX,d.plotX,-9999),r=t(d.plotY,-9999),u=c.getBBox(),y=g.rotation,A=g.align,K=e.isInsidePlot(q,Math.round(r),k),p="justify"===
t(g.overflow,n?"none":"justify"),b=this.visible&&!1!==d.visible&&(d.series.forceDL||n&&!p||K||g.inside&&h&&e.isInsidePlot(q,k?h.x+1:h.y+h.height-1,k));var C=function(b){n&&a.xAxis&&!p&&a.setDataLabelStartPos(d,c,f,K,b)};if(b){var x=e.renderer.fontMetrics(e.styledMode?void 0:g.style.fontSize,c).b;h=E({x:k?this.yAxis.len-r:q,y:Math.round(k?this.xAxis.len-q:r),width:0,height:0},h);E(g,{width:u.width,height:u.height});y?(p=!1,q=e.renderer.rotCorr(x,y),q={x:h.x+g.x+h.width/2+q.x,y:h.y+g.y+{top:0,middle:.5,
bottom:1}[g.verticalAlign]*h.height},C(q),c[f?"attr":"animate"](q).attr({align:A}),C=(y+720)%360,C=180<C&&360>C,"left"===A?q.y-=C?u.height:0:"center"===A?(q.x-=u.width/2,q.y-=u.height/2):"right"===A&&(q.x-=u.width,q.y-=C?0:u.height),c.placed=!0,c.alignAttr=q):(C(h),c.align(g,null,h),q=c.alignAttr);p&&0<=h.height?this.justifyDataLabel(c,g,q,u,h,f):t(g.crop,!0)&&(b=e.isInsidePlot(q.x,q.y)&&e.isInsidePlot(q.x+u.width,q.y+u.height));if(g.shape&&!y)c[f?"attr":"animate"]({anchorX:k?e.plotWidth-d.plotY:
d.plotX,anchorY:k?e.plotHeight-d.plotX:d.plotY})}f&&n&&(c.placed=!1);b||n&&!p||(c.hide(!0),c.placed=!1)};q.prototype.setDataLabelStartPos=function(d,c,g,h,f){var a=this.chart,e=a.inverted,k=this.xAxis,n=k.reversed,q=e?c.height/2:c.width/2;d=(d=d.pointWidth)?d/2:0;k=e?f.x:n?-q-d:k.width-q+d;f=e?n?this.yAxis.height-q+d:-q-d:f.y;c.startXPos=k;c.startYPos=f;h?"hidden"===c.visibility&&(c.show(),c.attr({opacity:0}).animate({opacity:1})):c.attr({opacity:1}).animate({opacity:0},void 0,c.hide);a.hasRendered&&
(g&&c.attr({x:c.startXPos,y:c.startYPos}),c.placed=!0)};q.prototype.justifyDataLabel=function(d,c,g,h,f,a){var e=this.chart,k=c.align,n=c.verticalAlign,q=d.box?0:d.padding||0;var r=g.x+q;if(0>r){"right"===k?(c.align="left",c.inside=!0):c.x=-r;var t=!0}r=g.x+h.width-q;r>e.plotWidth&&("left"===k?(c.align="right",c.inside=!0):c.x=e.plotWidth-r,t=!0);r=g.y+q;0>r&&("bottom"===n?(c.verticalAlign="top",c.inside=!0):c.y=-r,t=!0);r=g.y+h.height-q;r>e.plotHeight&&("top"===n?(c.verticalAlign="bottom",c.inside=
!0):c.y=e.plotHeight-r,t=!0);t&&(d.placed=!a,d.align(c,null,f));return t};P.pie&&(P.pie.prototype.dataLabelPositioners={radialDistributionY:function(d){return d.top+d.distributeBox.pos},radialDistributionX:function(d,c,g,h){return d.getX(g<c.top+2||g>c.bottom-2?h:g,c.half,c)},justify:function(d,c,g){return g[0]+(d.half?-1:1)*(c+d.labelDistance)},alignToPlotEdges:function(d,c,g,h){d=d.getBBox().width;return c?d+h:g-d-h},alignToConnectors:function(d,c,g,h){var e=0,a;d.forEach(function(c){a=c.dataLabel.getBBox().width;
a>e&&(e=a)});return c?e+h:g-e-h}},P.pie.prototype.drawDataLabels=function(){var e=this,c=e.data,g,h=e.chart,f=e.options.dataLabels||{},a=f.connectorPadding,l,v=h.plotWidth,r=h.plotHeight,w=h.plotLeft,y=Math.round(h.chartWidth/3),A,D=e.center,H=D[2]/2,K=D[1],p,b,C,x,G=[[],[]],E,N,I,m,P=[0,0,0,0],S=e.dataLabelPositioners,W;e.visible&&(f.enabled||e._hasPointLabels)&&(c.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),
a.dataLabel.shortened=!1)}),q.prototype.drawDataLabels.apply(e),c.forEach(function(a){a.dataLabel&&(a.visible?(G[a.half].push(a),a.dataLabel._pos=null,!M(f.style.width)&&!M(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>y&&(a.dataLabel.css({width:.7*y}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),G.forEach(function(c,k){var l=c.length,n=[],q;if(l){e.sortByAngle(c,
k-.5);if(0<e.maxLabelDistance){var u=Math.max(0,K-H-e.maxLabelDistance);var z=Math.min(K+H+e.maxLabelDistance,h.plotHeight);c.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,K-H-a.labelDistance),a.bottom=Math.min(K+H+a.labelDistance,h.plotHeight),q=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+q/2,size:q,rank:a.y},n.push(a.distributeBox))});u=z+q-u;d.distribute(n,u,u/5)}for(m=0;m<l;m++){g=c[m];C=g.labelPosition;p=g.dataLabel;I=!1===
g.visible?"hidden":"inherit";N=u=C.natural.y;n&&M(g.distributeBox)&&("undefined"===typeof g.distributeBox.pos?I="hidden":(x=g.distributeBox.size,N=S.radialDistributionY(g)));delete g.positionIndex;if(f.justify)E=S.justify(g,H,D);else switch(f.alignTo){case "connectors":E=S.alignToConnectors(c,k,v,w);break;case "plotEdges":E=S.alignToPlotEdges(p,k,v,w);break;default:E=S.radialDistributionX(e,g,N,u)}p._attr={visibility:I,align:C.alignment};W=g.options.dataLabels||{};p._pos={x:E+t(W.x,f.x)+({left:a,
right:-a}[C.alignment]||0),y:N+t(W.y,f.y)-10};C.final.x=E;C.final.y=N;t(f.crop,!0)&&(b=p.getBBox().width,u=null,E-b<a&&1===k?(u=Math.round(b-E+a),P[3]=Math.max(u,P[3])):E+b>v-a&&0===k&&(u=Math.round(E+b-v+a),P[1]=Math.max(u,P[1])),0>N-x/2?P[0]=Math.max(Math.round(-N+x/2),P[0]):N+x/2>r&&(P[2]=Math.max(Math.round(N+x/2-r),P[2])),p.sideOverflow=u)}}}),0===u(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),this.points.forEach(function(a){W=J(f,a.options.dataLabels);if(l=t(W.connectorWidth,
1)){var b;A=a.connector;if((p=a.dataLabel)&&p._pos&&a.visible&&0<a.labelDistance){I=p._attr.visibility;if(b=!A)a.connector=A=h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(e.dataLabelsGroup),h.styledMode||A.attr({"stroke-width":l,stroke:W.connectorColor||a.color||"#666666"});A[b?"attr":"animate"]({d:a.getConnectorPath()});A.attr("visibility",I)}else A&&(a.connector=A.destroy())}}))},P.pie.prototype.placeDataLabels=
function(){this.points.forEach(function(d){var c=d.dataLabel,e;c&&d.visible&&((e=c._pos)?(c.sideOverflow&&(c._attr.width=Math.max(c.getBBox().width-c.sideOverflow,0),c.css({width:c._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](e),c.moved=!0):c&&c.attr({y:-9999}));delete d.distributeBox},this)},P.pie.prototype.alignDataLabel=g,P.pie.prototype.verifyDataLabelOverflow=function(d){var c=this.center,
e=this.options,g=e.center,f=e.minSize||80,a=null!==e.size;if(!a){if(null!==g[0])var h=Math.max(c[2]-Math.max(d[1],d[3]),f);else h=Math.max(c[2]-d[1]-d[3],f),c[0]+=(d[3]-d[1])/2;null!==g[1]?h=I(h,f,c[2]-Math.max(d[0],d[2])):(h=I(h,f,c[2]-d[0]-d[2]),c[1]+=(d[0]-d[2])/2);h<c[2]?(c[2]=h,c[3]=Math.min(D(e.innerSize||0,h),h),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):a=!0}return a});P.column&&(P.column.prototype.alignDataLabel=function(d,c,g,h,f){var a=this.chart.inverted,e=d.series,
k=d.dlBox||d.shapeArgs,n=t(d.below,d.plotY>t(this.translatedThreshold,e.yAxis.len)),r=t(g.inside,!!this.options.stacking);k&&(h=J(k),0>h.y&&(h.height+=h.y,h.y=0),k=h.y+h.height-e.yAxis.len,0<k&&k<h.height&&(h.height-=k),a&&(h={x:e.yAxis.len-h.y-h.height,y:e.xAxis.len-h.x-h.width,width:h.height,height:h.width}),r||(a?(h.x+=n?0:h.width,h.width=0):(h.y+=n?h.height:0,h.height=0)));g.align=t(g.align,!a||r?"center":n?"right":"left");g.verticalAlign=t(g.verticalAlign,a||r?"middle":n?"top":"bottom");q.prototype.alignDataLabel.call(this,
d,c,g,h,f);g.inside&&d.contrastColor&&c.css({color:d.contrastColor})})});S(r,"modules/overlapping-datalabels.src.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent,u=g.fireEvent,I=g.isArray,M=g.objectEach,E=g.pick;d=d.Chart;r(d,"render",function(){var d=[];(this.labelCollectors||[]).forEach(function(g){d=d.concat(g())});(this.yAxis||[]).forEach(function(g){g.options.stackLabels&&!g.options.stackLabels.allowOverlap&&M(g.stacks,function(g){M(g,function(g){d.push(g.label)})})});
(this.series||[]).forEach(function(g){var r=g.options.dataLabels;g.visible&&(!1!==r.enabled||g._hasPointLabels)&&(g.nodes||g.points).forEach(function(g){g.visible&&(I(g.dataLabels)?g.dataLabels:g.dataLabel?[g.dataLabel]:[]).forEach(function(r){var t=r.options;r.labelrank=E(t.labelrank,g.labelrank,g.shapeArgs&&g.shapeArgs.height);t.allowOverlap||d.push(r)})})});this.hideOverlappingLabels(d)});d.prototype.hideOverlappingLabels=function(d){var g=this,r=d.length,y=g.renderer,t,A,h,E=!1;var q=function(c){var d=
c.box?0:c.padding||0;var e=0;if(c&&(!c.alignAttr||c.placed)){var f=c.alignAttr||{x:c.attr("x"),y:c.attr("y")};var a=c.parentGroup;c.width||(e=c.getBBox(),c.width=e.width,c.height=e.height,e=y.fontMetrics(null,c.element).h);return{x:f.x+(a.translateX||0)+d,y:f.y+(a.translateY||0)+d-e,width:c.width-2*d,height:c.height-2*d}}};for(A=0;A<r;A++)if(t=d[A])t.oldOpacity=t.opacity,t.newOpacity=1,t.absoluteBox=q(t);d.sort(function(c,d){return(d.labelrank||0)-(c.labelrank||0)});for(A=0;A<r;A++){var I=(q=d[A])&&
q.absoluteBox;for(t=A+1;t<r;++t){var e=(h=d[t])&&h.absoluteBox;!I||!e||q===h||0===q.newOpacity||0===h.newOpacity||e.x>I.x+I.width||e.x+e.width<I.x||e.y>I.y+I.height||e.y+e.height<I.y||((q.labelrank<h.labelrank?q:h).newOpacity=0)}}d.forEach(function(c){var d;if(c){var e=c.newOpacity;c.oldOpacity!==e&&(c.alignAttr&&c.placed?(e?c.show(!0):d=function(){c.hide(!0);c.placed=!1},E=!0,c.alignAttr.opacity=e,c[c.isOld?"animate":"attr"](c.alignAttr,null,d),u(g,"afterHideOverlappingLabel")):c.attr({opacity:e}));
c.isOld=!0}});E&&u(g,"afterHideAllOverlappingLabels")}});S(r,"parts/Interaction.js",[r["parts/Globals.js"],r["parts/Legend.js"],r["parts/Point.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=u.addEvent,M=u.createElement,E=u.css,A=u.defined,G=u.extend,J=u.fireEvent,y=u.isArray,t=u.isFunction,D=u.isObject,h=u.merge,N=u.objectEach,q=u.pick;u=d.Chart;var P=d.defaultOptions,e=d.defaultPlotOptions,c=d.hasTouch,k=d.Series,n=d.seriesTypes,f=d.svg;d=d.TrackerMixin={drawTrackerPoint:function(){var a=
this,d=a.chart,e=d.pointer,f=function(a){var c=e.getPointFromEvent(a);"undefined"!==typeof c&&(e.isDirectTouch=!0,c.onMouseOver(a))},g;a.points.forEach(function(a){g=y(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);g.forEach(function(c){c.div?c.div.point=a:c.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(g){if(a[g]){a[g].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){e.onTrackerMouseOut(a)});if(c)a[g].on("touchstart",
f);!d.styledMode&&a.options.cursor&&a[g].css(E).css({cursor:a.options.cursor})}}),a._hasTracking=!0);J(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,d=a.options,e=d.trackByArea,g=[].concat(e?a.areaPath:a.graphPath),h=g.length,k=a.chart,n=k.pointer,q=k.renderer,r=k.options.tooltip.snap,t=a.tracker,p,b=function(){if(k.hoverSeries!==a)a.onMouseOver()},u="rgba(192,192,192,"+(f?.0001:.002)+")";if(h&&!e)for(p=h+1;p--;)"M"===g[p]&&g.splice(p+1,0,g[p+1]-r,g[p+2],"L"),(p&&"M"===g[p]||p===
h)&&g.splice(p,0,"L",g[p-2]+r,g[p-1]);t?t.attr({d:g}):a.graph&&(a.tracker=q.path(g).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(e?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),k.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:u,fill:e?u:"none","stroke-width":a.graph.strokeWidth()+(e?0:2*r)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",b).on("mouseout",function(a){n.onTrackerMouseOut(a)});d.cursor&&
!k.styledMode&&a.css({cursor:d.cursor});if(c)a.on("touchstart",b)}));J(this,"afterDrawTracker")}};n.column&&(n.column.prototype.drawTracker=d.drawTrackerPoint);n.pie&&(n.pie.prototype.drawTracker=d.drawTrackerPoint);n.scatter&&(n.scatter.prototype.drawTracker=d.drawTrackerPoint);G(g.prototype,{setItemEvents:function(a,c,d){var e=this,f=e.chart.renderer.boxWrapper,g=a instanceof r,k="highcharts-legend-"+(g?"point":"series")+"-active",l=e.chart.styledMode;(d?[c,a.legendSymbol]:[a.legendGroup]).forEach(function(d){if(d)d.on("mouseover",
function(){a.visible&&e.allItems.forEach(function(c){a!==c&&c.setState("inactive",!g)});a.setState("hover");a.visible&&f.addClass(k);l||c.css(e.options.itemHoverStyle)}).on("mouseout",function(){e.chart.styledMode||c.css(h(a.visible?e.itemStyle:e.itemHiddenStyle));e.allItems.forEach(function(c){a!==c&&c.setState("",!g)});f.removeClass(k);a.setState()}).on("click",function(c){var d=function(){a.setVisible&&a.setVisible();e.allItems.forEach(function(b){a!==b&&b.setState(a.visible?"inactive":"",!g)})};
f.removeClass(k);c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,d):J(a,"legendItemClick",c,d)})})},createCheckboxForItem:function(a){a.checkbox=M("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);I(a.checkbox,"click",function(c){J(a.series||a,"checkboxClick",{checked:c.target.checked,item:a},function(){a.select()})})}});G(u.prototype,{showResetZoom:function(){function a(){c.zoomOut()}
var c=this,d=P.lang,e=c.options.chart.resetZoomButton,f=e.theme,g=f.states,h="chart"===e.relativeTo||"spaceBox"===e.relativeTo?null:"plotBox";J(this,"beforeShowResetZoom",null,function(){c.resetZoomButton=c.renderer.button(d.resetZoom,null,null,a,f,g&&g.hover).attr({align:e.position.align,title:d.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,!1,h)});J(this,"afterShowResetZoom")},zoomOut:function(){J(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var c=
this,d,e=c.pointer,f=!1,g=c.inverted?e.mouseDownX:e.mouseDownY;!a||a.resetSelection?(c.axes.forEach(function(a){d=a.zoom()}),e.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var h=a.axis,k=c.inverted?h.left:h.top,l=c.inverted?k+h.width:k+h.height,b=h.isXAxis,n=!1;if(!b&&g>=k&&g<=l||b||!A(g))n=!0;e[b?"zoomX":"zoomY"]&&n&&(d=h.zoom(a.min,a.max),h.displayBtn&&(f=!0))});var h=c.resetZoomButton;f&&!h?c.showResetZoom():!f&&D(h)&&(c.resetZoomButton=h.destroy());d&&c.redraw(q(c.options.chart.animation,
a&&a.animation,100>c.pointCount))},pan:function(a,c){var d=this,e=d.hoverPoints,f=d.options.chart,g;c="object"===typeof c?c:{enabled:c,type:"x"};f&&f.panning&&(f.panning=c);var h=c.type;J(this,"pan",{originalEvent:a},function(){e&&e.forEach(function(a){a.setState()});var c=[1];"xy"===h?c=[1,0]:"y"===h&&(c=[0]);c.forEach(function(c){var e=d[c?"xAxis":"yAxis"][0],f=e.options,b=e.horiz,h=a[b?"chartX":"chartY"];b=b?"mouseDownX":"mouseDownY";var k=d[b],l=(e.pointRange||0)/2,n=e.reversed&&!d.inverted||
!e.reversed&&d.inverted?-1:1,q=e.getExtremes(),v=e.toValue(k-h,!0)+l*n;n=e.toValue(k+e.len-h,!0)-l*n;var m=n<v;k=m?n:v;v=m?v:n;n=Math.min(q.dataMin,l?q.min:e.toValue(e.toPixels(q.min)-e.minPixelPadding));l=Math.max(q.dataMax,l?q.max:e.toValue(e.toPixels(q.max)+e.minPixelPadding));if(!f.ordinal){c&&(f=n-k,0<f&&(v+=f,k=n),f=v-l,0<f&&(v=l,k-=f));if(e.series.length&&k!==q.min&&v!==q.max&&c||e.panningState&&k>=e.panningState.startMin&&v<=e.panningState.startMax)e.setExtremes(k,v,!1,!1,{trigger:"pan"}),
g=!0;d[b]=h}});g&&d.redraw(!1);E(d.container,{cursor:"move"})})}});G(r.prototype,{select:function(a,c){var d=this,e=d.series,f=e.chart;this.selectedStaging=a=q(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;e.options.data[e.data.indexOf(d)]=d.options;d.setState(a&&"select");c||f.getSelectedPoints().forEach(function(a){var c=a.series;a.selected&&a!==d&&(a.selected=a.options.selected=!1,c.options.data[c.data.indexOf(a)]=a.options,a.setState(f.hoverPoints&&
c.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},onMouseOver:function(a){var c=this.series.chart,d=c.pointer;a=a?d.normalize(a):d.getChartCoordinatesFromPoint(this,c.inverted);d.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=
this,c=h(a.series.options.point,a.options).events;a.events=c;N(c,function(c,d){t(c)&&I(a,d,c)});this.hasImportedEvents=!0}},setState:function(a,c){var d=this.series,f=this.state,g=d.options.states[a||"normal"]||{},h=e[d.type].marker&&d.options.marker,k=h&&!1===h.enabled,l=h&&h.states&&h.states[a||"normal"]||{},n=!1===l.enabled,r=d.stateMarkerGraphic,p=this.marker||{},b=d.chart,t=d.halo,u,y=h&&d.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===g.enabled||a&&(n||k&&!1===
l.enabled)||a&&p.states&&p.states[a]&&!1===p.states[a].enabled)){this.state=a;y&&(u=d.markerAttribs(this,a));if(this.graphic){f&&this.graphic.removeClass("highcharts-point-"+f);a&&this.graphic.addClass("highcharts-point-"+a);if(!b.styledMode){var A=d.pointAttribs(this,a);var D=q(b.options.chart.animation,g.animation);d.options.inactiveOtherPoints&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:A.opacity},D)}),this.connector&&this.connector.animate({opacity:A.opacity},D));this.graphic.animate(A,
D)}u&&this.graphic.animate(u,q(b.options.chart.animation,l.animation,h.animation));r&&r.hide()}else{if(a&&l){f=p.symbol||d.symbol;r&&r.currentSymbol!==f&&(r=r.destroy());if(u)if(r)r[c?"animate":"attr"]({x:u.x,y:u.y});else f&&(d.stateMarkerGraphic=r=b.renderer.symbol(f,u.x,u.y,u.width,u.height).add(d.markerGroup),r.currentSymbol=f);!b.styledMode&&r&&r.attr(d.pointAttribs(this,a))}r&&(r[a&&this.isInside?"show":"hide"](),r.element.point=this)}a=g.halo;g=(r=this.graphic||r)&&r.visibility||"inherit";a&&
a.size&&r&&"hidden"!==g&&!this.isCluster?(t||(d.halo=t=b.renderer.path().add(r.parentGroup)),t.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),t.attr({"class":"highcharts-halo highcharts-color-"+q(this.colorIndex,d.colorIndex)+(this.className?" "+this.className:""),visibility:g,zIndex:-1}),t.point=this,b.styledMode||t.attr(G({fill:this.color||d.color,"fill-opacity":a.opacity},a.attributes))):t&&t.point&&t.point.haloPath&&t.animate({d:t.point.haloPath(0)},null,t.hide);J(this,"afterSetState")}},
haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});G(k.prototype,{onMouseOver:function(){var a=this.chart,c=a.hoverSeries;if(c&&c!==this)c.onMouseOut();this.options.events.mouseOver&&J(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,c=this.chart,d=c.tooltip,e=c.hoverPoint;c.hoverSeries=null;if(e)e.onMouseOut();this&&a.events.mouseOut&&J(this,"mouseOut");!d||this.stickyTracking||
d.shared&&!this.noSharedTooltip||d.hide();c.series.forEach(function(a){a.setState("",!0)})},setState:function(a,c){var d=this,e=d.options,f=d.graph,g=e.inactiveOtherPoints,h=e.states,k=e.lineWidth,l=e.opacity,n=q(h[a||"normal"]&&h[a||"normal"].animation,d.chart.options.chart.animation);e=0;a=a||"";if(d.state!==a&&([d.group,d.markerGroup,d.dataLabelsGroup].forEach(function(c){c&&(d.state&&c.removeClass("highcharts-series-"+d.state),a&&c.addClass("highcharts-series-"+a))}),d.state=a,!d.chart.styledMode)){if(h[a]&&
!1===h[a].enabled)return;a&&(k=h[a].lineWidth||k+(h[a].lineWidthPlus||0),l=q(h[a].opacity,l));if(f&&!f.dashstyle)for(h={"stroke-width":k},f.animate(h,n);d["zone-graph-"+e];)d["zone-graph-"+e].attr(h),e+=1;g||[d.group,d.markerGroup,d.dataLabelsGroup,d.labelBySeries].forEach(function(a){a&&a.animate({opacity:l},n)})}c&&g&&d.points&&d.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(c){c.setState&&c.setState(a)})},setVisible:function(a,c){var d=this,e=d.chart,f=d.legendItem,
g=e.options.chart.ignoreHiddenSeries,h=d.visible;var k=(d.visible=a=d.options.visible=d.userOptions.visible="undefined"===typeof a?!h:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(d[a])d[a][k]()});if(e.hoverSeries===d||(e.hoverPoint&&e.hoverPoint.series)===d)d.onMouseOut();f&&e.legend.colorizeItem(d,a);d.isDirty=!0;d.options.stacking&&e.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});d.linkedSeries.forEach(function(c){c.setVisible(a,
!1)});g&&(e.isDirtyBox=!0);J(d,k);!1!==c&&e.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);J(this,a?"select":"unselect")},drawTracker:d.drawTrackerGraph})});S(r,"parts/Responsive.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.find,u=g.isArray,I=g.isObject,M=g.merge,E=g.objectEach,A=g.pick,G=g.splat,
J=g.uniqueKey;d=d.Chart;d.prototype.setResponsive=function(d,g){var t=this.options.responsive,h=[],u=this.currentResponsive;!g&&t&&t.rules&&t.rules.forEach(function(d){"undefined"===typeof d._id&&(d._id=J());this.matchResponsiveRule(d,h)},this);g=M.apply(0,h.map(function(d){return r(t.rules,function(g){return g._id===d}).chartOptions}));g.isResponsiveOptions=!0;h=h.toString()||void 0;h!==(u&&u.ruleIds)&&(u&&this.update(u.undoOptions,d,!0),h?(u=this.currentOptions(g),u.isResponsiveOptions=!0,this.currentResponsive=
{ruleIds:h,mergedOptions:g,undoOptions:u},this.update(g,d,!0)):this.currentResponsive=void 0)};d.prototype.matchResponsiveRule=function(d,g){var r=d.condition;(r.callback||function(){return this.chartWidth<=A(r.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=A(r.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=A(r.minWidth,0)&&this.chartHeight>=A(r.minHeight,0)}).call(this)&&g.push(d._id)};d.prototype.currentOptions=function(d){function g(d,h,t,e){var c;E(d,function(d,n){if(!e&&-1<r.collectionsWithUpdate.indexOf(n))for(d=
G(d),t[n]=[],c=0;c<d.length;c++)h[n][c]&&(t[n][c]={},g(d[c],h[n][c],t[n][c],e+1));else I(d)?(t[n]=u(d)?[]:{},g(d,h[n]||{},t[n],e+1)):t[n]="undefined"===typeof h[n]?null:h[n]})}var r=this,h={};g(d,this.options,h,0);return h}});S(r,"masters/highcharts.src.js",[r["parts/Globals.js"]],function(d){return d});r["masters/highcharts.src.js"]._modules=r;return r["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(39);


var routes = [{
    path: '/user/',
    component: __webpack_require__(40)
}, {
    path: '/user/create/',
    component: __webpack_require__(43)
}, {
    path: '/user/edit/:id',
    component: __webpack_require__(46)
}, {
    path: '/expense',
    component: __webpack_require__(49)
}, {
    path: '/expense/create/:id',
    component: __webpack_require__(52)
}, {
    path: '/expense/:id/edit/',
    component: __webpack_require__(55)
}, {
    path: '/category/create',
    component: __webpack_require__(58)
}, {
    path: '/category',
    component: __webpack_require__(61)
}, {
    path: '/category/:id/edit',
    component: __webpack_require__(64)
}, {
    path: '/dashboard',
    component: __webpack_require__(67)
}];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]({
    routes: routes,
    linkExactActiveClass: 'active',
    mode: 'history'
}));

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
  * vue-router v3.1.6
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isExtendedError (constructor, err) {
  return (
    err instanceof constructor ||
    // _name is to support IE9 too
    (err && (err.name === constructor.name || err._name === constructor._name))
  )
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cachce
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("RouterLink with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ("development" !== 'production' && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && 'pushState' in window.history
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

var NavigationDuplicated = /*@__PURE__*/(function (Error) {
  function NavigationDuplicated (normalizedLocation) {
    Error.call(this);
    this.name = this._name = 'NavigationDuplicated';
    // passing the message to super() doesn't seem to work in the transpiled version
    this.message = "Navigating to current location (\"" + (normalizedLocation.fullPath) + "\") is not allowed";
    // add a stack property so services like Sentry can correctly display it
    Object.defineProperty(this, 'stack', {
      value: new Error().stack,
      writable: true,
      configurable: true
    });
    // we could also have used
    // Error.captureStackTrace(this, this.constructor)
    // but it only exists on node and chrome
  }

  if ( Error ) NavigationDuplicated.__proto__ = Error;
  NavigationDuplicated.prototype = Object.create( Error && Error.prototype );
  NavigationDuplicated.prototype.constructor = NavigationDuplicated;

  return NavigationDuplicated;
}(Error));

// support IE9
NavigationDuplicated._name = 'NavigationDuplicated';

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        this$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // after merging https://github.com/vuejs/vue-router/pull/2771 we
    // When the user navigates through history through back/forward buttons
    // we do not want to throw the error. We only throw it if directly calling
    // push/replace. That's why it's not included in isError
    if (!isExtendedError(NavigationDuplicated, err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort(new NavigationDuplicated(route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    var this$1 = this;

    History.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(
      supportsPushState ? 'popstate' : 'hashchange',
      function () {
        var current = this$1.current;
        if (!ensureSlash()) {
          return
        }
        this$1.transitionTo(getHash(), function (route) {
          if (supportsScroll) {
            handleScroll(this$1.router, route, current, true);
          }
          if (!supportsPushState) {
            replaceHash(route.fullPath);
          }
        });
      }
    );
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isExtendedError(NavigationDuplicated, err)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.1.6';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(41)
/* template */
var __vue_template__ = __webpack_require__(42)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/user/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a4777f3e", Component.options)
  } else {
    hotAPI.reload("data-v-a4777f3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            users: []
        };
    },
    mounted: function mounted() {
        this.getUsers();
    },

    methods: {
        getUsers: function getUsers() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default()({
                method: 'GET',
                url: '/api/users/list'
            }).then(function (result) {
                _this.users = result.data;
                console.log(result.data);
            }, function (error) {
                console.log(error);
            });
        },
        deleteUser: function deleteUser(id) {
            var _this2 = this;

            if (confirm('Are you sure?')) {
                fetch('/api/user/' + id + '/delete', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }

                }).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    alert('User was successfully deleted');
                    _this2.getUsers();
                }).catch(function (err) {
                    return console.log(err);
                });
            }
        }
    }
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-7" }, [
            _c(
              "div",
              {
                staticClass: "btn-toolbar float-right",
                attrs: {
                  role: "toolbar",
                  "aria-label": "Toolbar with button groups"
                }
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-success ml-1",
                    attrs: {
                      to: "/user/create",
                      "data-toggle": "tooltip",
                      title: "Add New User"
                    }
                  },
                  [_c("span", { staticClass: "glyphicon glyphicon-plus-sign" })]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.users, function(user) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(user.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.formatted_created_at))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success ml-1",
                            attrs: {
                              to: { path: "/user/edit/" + user.id },
                              "data-toggle": "tooltip",
                              title: "Edit User"
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-search"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: {
                              "data-toggle": "tooltip",
                              title: "Delete User"
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteUser(user.id)
                              }
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-trash"
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5" }, [
      _c("h4", { staticClass: "panel-heading" }, [
        _vm._v("\n\t\t\t\t\t\tUser Management\n\t\t\t\t\t\t"),
        _c("small", { staticClass: "text-muted" }, [_vm._v("User List")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("E-mail")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date Created")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a4777f3e", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(44)
/* template */
var __vue_template__ = __webpack_require__(45)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/user/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3278167d", Component.options)
  } else {
    hotAPI.reload("data-v-3278167d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            data: {
                permissionField: [],
                roleField: []
            },
            roles: [],
            permissions: [],
            edit: false
        };
    },
    mounted: function mounted() {
        this.getRoles();
        this.getPermissions();
    },

    methods: {
        getRoles: function getRoles() {
            var _this = this;

            axios({
                method: 'GET',
                url: '/api/roles/list'
            }).then(function (result) {
                console.log(result.data);

                _this.roles = result.data;
            }, function (error) {
                console.log(error);
            });
        },
        getPermissions: function getPermissions() {
            var _this2 = this;

            axios({
                method: 'GET',
                url: '/api/permissions/list'
            }).then(function (result) {
                console.log(result.data);

                _this2.permissions = result.data;
            }, function (error) {
                console.log(error);
            });
        },
        addUser: function addUser() {
            var _this3 = this;

            if (this.edit === false) {
                fetch('/api/user/store', {
                    method: 'POST',
                    body: JSON.stringify(this.data),
                    headers: {
                        'content-type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                }).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    _this3.data.permissionField = [];
                    _this3.data.roleField = [];
                    _this3.data = {};

                    alert(data.name + " was successfully created");
                }).catch(function (err) {
                    return console.log(err);
                });
            } else {}
        }
    }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addUser($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "first_name" }
                      },
                      [_vm._v("First Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.first_name,
                            expression: "data.first_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "First Name",
                          id: "first_name"
                        },
                        domProps: { value: _vm.data.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "first_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "last_name" }
                      },
                      [_vm._v("Last Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.last_name,
                            expression: "data.last_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Last Name",
                          id: "last_name"
                        },
                        domProps: { value: _vm.data.last_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "last_name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "email" }
                      },
                      [_vm._v("E-mail")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.email,
                            expression: "data.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Email",
                          id: "email"
                        },
                        domProps: { value: _vm.data.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "email", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "last_name" }
                      },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.password,
                            expression: "data.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          required: "",
                          placeholder: "Password",
                          id: "password"
                        },
                        domProps: { value: _vm.data.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "password", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "password_confirmation" }
                      },
                      [
                        _vm._v(
                          "Confirm\n\t\t\t\t\t\t                                                                             Password"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.password_confirmation,
                            expression: "data.password_confirmation"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          required: "",
                          placeholder: "Confirm Password",
                          id: "password_confirmation"
                        },
                        domProps: { value: _vm.data.password_confirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "password_confirmation",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-2" }, [
                      _vm._v("Roles and Permissions")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c("table", { staticClass: "table" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("tbody", [
                            _c("tr", [
                              _c(
                                "td",
                                _vm._l(_vm.roles, function(role) {
                                  return _c(
                                    "div",
                                    {
                                      key: role.id,
                                      staticClass:
                                        "custom-control custom-switch"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.data.roleField,
                                            expression: "data.roleField"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: "role" + role.id
                                        },
                                        domProps: {
                                          value: role.name,
                                          checked: Array.isArray(
                                            _vm.data.roleField
                                          )
                                            ? _vm._i(
                                                _vm.data.roleField,
                                                role.name
                                              ) > -1
                                            : _vm.data.roleField
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.data.roleField,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = role.name,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "roleField",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "roleField",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.data,
                                                "roleField",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: { for: "role" + role.id }
                                        },
                                        [_vm._v(_vm._s(role.name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "panel-body" },
                                        _vm._l(role.permissions, function(
                                          role_permission
                                        ) {
                                          return _c("li", {
                                            domProps: {
                                              textContent: _vm._s(
                                                role_permission.name
                                              )
                                            }
                                          })
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                _vm._l(_vm.permissions, function(permission) {
                                  return _c(
                                    "div",
                                    {
                                      key: permission.id,
                                      staticClass:
                                        "custom-control custom-switch"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.data.permissionField,
                                            expression: "data.permissionField"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: "permission" + permission.id
                                        },
                                        domProps: {
                                          value: permission.name,
                                          checked: Array.isArray(
                                            _vm.data.permissionField
                                          )
                                            ? _vm._i(
                                                _vm.data.permissionField,
                                                permission.name
                                              ) > -1
                                            : _vm.data.permissionField
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.data.permissionField,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = permission.name,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "permissionField",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "permissionField",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.data,
                                                "permissionField",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: {
                                            for: "permission" + permission.id
                                          }
                                        },
                                        [_vm._v(_vm._s(permission.name))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-danger ml-1 pull-left",
                      attrs: { to: "/user/" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success pull-right",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Create")]
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "panel-heading" }, [
          _vm._v("\n\t\t\t\t\t\tUser Management\n\t\t\t\t\t\t"),
          _c("small", { staticClass: "text-muted" }, [_vm._v("Create User")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Roles")]),
        _vm._v(" "),
        _c("th", [_vm._v("Permissions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3278167d", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(47)
/* template */
var __vue_template__ = __webpack_require__(48)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/user/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ca45a6a", Component.options)
  } else {
    hotAPI.reload("data-v-6ca45a6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            data: {
                first_name: '',
                last_name: '',
                email: '',
                userPermissions: [],
                userRoles: []
            },
            roles: [],
            permissions: [],
            edit: true
        };
    },
    mounted: function mounted() {
        this.getUserDetails();
        this.getRoles();
        this.getPermissions();
    },

    computed: {
        hasRoles: function hasRoles() {
            var userRoles = this.data.userRoles;
            var roles = this.roles;
            var returnBoolean = {};

            for (var i = 0; i < roles.length; i++) {
                for (var userRoleIndex = 0; userRoleIndex < Object.keys(userRoles).length; userRoleIndex++) {
                    if (userRoles[userRoleIndex] === roles[i].name) {
                        returnBoolean[roles[i].name] = true;
                    }
                }
            }

            return returnBoolean;
        },
        hasPermissions: function hasPermissions() {
            var userPermissions = this.data.userPermissions;
            var permissions = this.permissions;
            var returnBoolean = {};

            for (var i = 0; i < permissions.length; i++) {
                for (var userRoleIndex = 0; userRoleIndex < Object.keys(userPermissions).length; userRoleIndex++) {
                    if (userPermissions[userRoleIndex] === permissions[i].name) {
                        returnBoolean[permissions[i].name] = true;
                    }
                }
            }

            return returnBoolean;
        }
    },
    methods: {
        getRoles: function getRoles() {
            var _this = this;

            axios({
                method: 'GET',
                url: '/api/roles/list'
            }).then(function (result) {

                _this.roles = result.data;
            }, function (error) {
                console.log(error);
            });
        },
        getPermissions: function getPermissions() {
            var _this2 = this;

            axios({
                method: 'GET',
                url: '/api/permissions/list'
            }).then(function (result) {

                _this2.permissions = result.data;
            }, function (error) {
                console.log(error);
            });
        },
        getUserDetails: function getUserDetails() {
            var _this3 = this;

            axios({
                method: 'GET',
                url: '/api/user/' + this.$route.params.id + '/edit'
            }).then(function (result) {
                _this3.data.first_name = result.data.user.first_name;
                _this3.data.last_name = result.data.user.last_name;
                _this3.data.email = result.data.user.email;
                _this3.data.userRoles = result.data.user_roles;
                _this3.data.userPermissions = result.data.user_permissions;
            }, function (error) {
                console.log(error);
            });
        },
        updateUser: function updateUser() {
            fetch('/api/user/' + this.$route.params.id + '/update', {
                method: 'POST',
                body: JSON.stringify(this.data),
                headers: {
                    'content-type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(function (res) {
                return res.json();
            }).then(function (data) {

                alert(data.name + " was successfully updated");
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateUser($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "first_name" }
                      },
                      [_vm._v("First Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.first_name,
                            expression: "data.first_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "First Name",
                          id: "first_name"
                        },
                        domProps: { value: _vm.data.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "first_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "last_name" }
                      },
                      [_vm._v("Last Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.last_name,
                            expression: "data.last_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Last Name",
                          id: "last_name"
                        },
                        domProps: { value: _vm.data.last_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "last_name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "email" }
                      },
                      [_vm._v("E-mail")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.email,
                            expression: "data.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Email",
                          id: "email"
                        },
                        domProps: { value: _vm.data.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "email", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-2" }, [
                      _vm._v("Roles and Permissions")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c("table", { staticClass: "table" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("tbody", [
                            _c("tr", [
                              _c(
                                "td",
                                _vm._l(_vm.roles, function(role) {
                                  return _c(
                                    "div",
                                    {
                                      key: role.id,
                                      staticClass:
                                        "custom-control custom-switch"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.data.userRoles,
                                            expression: "data.userRoles"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: "role" + role.id
                                        },
                                        domProps: {
                                          value: role.name,
                                          checked: Array.isArray(
                                            _vm.data.userRoles
                                          )
                                            ? _vm._i(
                                                _vm.data.userRoles,
                                                role.name
                                              ) > -1
                                            : _vm.data.userRoles
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.data.userRoles,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = role.name,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "userRoles",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "userRoles",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.data,
                                                "userRoles",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: { for: "role" + role.id }
                                        },
                                        [_vm._v(_vm._s(role.name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "panel-body" },
                                        _vm._l(role.permissions, function(
                                          role_permission
                                        ) {
                                          return _c("li", {
                                            domProps: {
                                              textContent: _vm._s(
                                                role_permission.name
                                              )
                                            }
                                          })
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                _vm._l(_vm.permissions, function(permission) {
                                  return _c(
                                    "div",
                                    {
                                      key: permission.id,
                                      staticClass:
                                        "custom-control custom-switch"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.data.userPermissions,
                                            expression: "data.userPermissions"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: "permission" + permission.id
                                        },
                                        domProps: {
                                          value: permission.name,
                                          checked: Array.isArray(
                                            _vm.data.userPermissions
                                          )
                                            ? _vm._i(
                                                _vm.data.userPermissions,
                                                permission.name
                                              ) > -1
                                            : _vm.data.userPermissions
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.data.userPermissions,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = permission.name,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "userPermissions",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    _vm.data,
                                                    "userPermissions",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.data,
                                                "userPermissions",
                                                $$c
                                              )
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: {
                                            for: "permission" + permission.id
                                          }
                                        },
                                        [_vm._v(_vm._s(permission.name))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-danger ml-1 pull-left",
                      attrs: { to: "/user/" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success pull-right",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Update")]
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "panel-heading" }, [
          _vm._v("\n\t\t\t\t\t\tUser Management\n\t\t\t\t\t\t"),
          _c("small", { staticClass: "text-muted" }, [_vm._v("Edit User")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Roles")]),
        _vm._v(" "),
        _c("th", [_vm._v("Permissions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ca45a6a", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(50)
/* template */
var __vue_template__ = __webpack_require__(51)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/expense/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15e3f018", Component.options)
  } else {
    hotAPI.reload("data-v-15e3f018", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            expenses: [],
            user: $('meta[name="uid"]').attr('content')
        };
    },
    mounted: function mounted() {
        this.getExpenses();
        this.getUserId();
    },

    methods: {
        getUserId: function getUserId() {
            // this.user = this.$attrs.user;
        },
        getExpenses: function getExpenses() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default()({
                method: 'GET',
                url: '/api/expenses/list'
            }).then(function (result) {
                _this.expenses = result.data;

                console.log(result);
            }, function (error) {
                console.log(error);
            });
        },
        deleteExpense: function deleteExpense(id) {
            var _this2 = this;

            if (confirm('Are you sure?')) {
                fetch('/expense/' + id + '/delete', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                }).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    alert('Expense was successfully deleted');
                    _this2.getExpenses();
                }).catch(function (err) {
                    return console.log(err);
                });
            }
        }
    }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-7" }, [
            _c(
              "div",
              {
                staticClass: "btn-toolbar float-right",
                attrs: {
                  role: "toolbar",
                  "aria-label": "Toolbar with button groups"
                }
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-success ml-1",
                    attrs: {
                      to: { path: "/expense/create/" + _vm.user },
                      "data-toggle": "tooltip",
                      title: "Add New Expense"
                    }
                  },
                  [_c("span", { staticClass: "glyphicon glyphicon-plus-sign" })]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.expenses, function(expense) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(expense.category.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(expense.formatted_amount))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(expense.formatted_created_at))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success ml-1",
                            attrs: {
                              to: { path: "/expense/" + expense.id + "/edit" },
                              "data-toggle": "tooltip",
                              title: "Edit User"
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-search"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: {
                              "data-toggle": "tooltip",
                              title: "Delete User"
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteExpense(expense.id)
                              }
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-trash"
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5" }, [
      _c("h4", { staticClass: "panel-heading" }, [
        _vm._v("\n\t\t\t\t\t\tExpense Management\n\t\t\t\t\t\t"),
        _c("small", { staticClass: "text-muted" }, [_vm._v("Expense List")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date Created")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15e3f018", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(53)
/* template */
var __vue_template__ = __webpack_require__(54)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/expense/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-636344b4", Component.options)
  } else {
    hotAPI.reload("data-v-636344b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            data: {},
            categories: []
        };
    },
    mounted: function mounted() {
        this.getCategories();
    },

    methods: {
        getCategories: function getCategories() {
            var _this = this;

            axios({
                method: 'GET',
                url: '/category/list'
            }).then(function (result) {
                console.log(result.data);

                _this.categories = result.data;
            }, function (error) {
                console.log(error);
            });
        },
        addExpense: function addExpense() {
            var _this2 = this;

            fetch('/expense/store', {
                method: 'POST',
                body: JSON.stringify(this.data),
                headers: {
                    'content-type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                _this2.data = {};

                alert("Expense of " + data.amount + " was successfully created");
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addExpense($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" }
                      },
                      [_vm._v("Category")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.category,
                              expression: "data.category"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.data,
                                "category",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.categories, function(category) {
                          return _c(
                            "option",
                            { domProps: { value: category.id } },
                            [_vm._v(_vm._s(category.name))]
                          )
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "amount" }
                      },
                      [_vm._v("Expense")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.amount,
                            expression: "data.amount"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Amount",
                          id: "amount"
                        },
                        domProps: { value: _vm.data.amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "amount", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-danger ml-1 pull-left",
                      attrs: { to: "/expense/" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success pull-right",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Create")]
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "panel-heading" }, [
          _vm._v("\n\t\t\t\t\t\tExpense Management\n\t\t\t\t\t\t"),
          _c("small", { staticClass: "text-muted" }, [_vm._v("Create Expense")])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-636344b4", module.exports)
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(57)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/expense/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44e45f98", Component.options)
  } else {
    hotAPI.reload("data-v-44e45f98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            data: {
                amount: '',
                category: ''
            },
            categories: []
        };
    },
    mounted: function mounted() {
        this.getExpenseDetails();
        this.getCategories();
    },

    methods: {
        getExpenseDetails: function getExpenseDetails() {
            var _this = this;

            axios({
                method: 'GET',
                url: '/expense/' + this.$route.params.id + '/details'
            }).then(function (result) {
                _this.data.category = result.data.category.id;
                _this.data.amount = result.data.amount;

                console.log(result);
            }, function (error) {
                console.log(error);
            });
        },
        getCategories: function getCategories() {
            var _this2 = this;

            axios({
                method: 'GET',
                url: '/category/list'
            }).then(function (result) {
                _this2.categories = result.data;
            }, function (error) {
                console.log(error);
            });
        },
        updateExpense: function updateExpense() {
            fetch('/expense/' + this.$route.params.id + '/update', {
                method: 'POST',
                body: JSON.stringify(this.data),
                headers: {
                    'content-type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(function (res) {
                return res.json();
            }).then(function (data) {

                alert("Expense for Category " + data.category.name + " was successfully updated");
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateExpense($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" }
                      },
                      [_vm._v("Category")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-10" },
                      _vm._l(_vm.categories, function(category) {
                        return _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.category,
                                expression: "data.category"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: category.id },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.data,
                                  "category",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { domProps: { value: category.id } }, [
                              _vm._v(_vm._s(category.name))
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "amount" }
                      },
                      [_vm._v("Expense")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.amount,
                            expression: "data.amount"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Amount",
                          id: "amount"
                        },
                        domProps: { value: _vm.data.amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "amount", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-danger ml-1 pull-left",
                      attrs: { to: "/expense/" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success pull-right",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Update")]
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "panel-heading" }, [
          _vm._v("\n\t\t\t\t\t\tExpense Management\n\t\t\t\t\t\t"),
          _c("small", { staticClass: "text-muted" }, [_vm._v("Edit Expense")])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-44e45f98", module.exports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(59)
/* template */
var __vue_template__ = __webpack_require__(60)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/category/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e4c0cea", Component.options)
  } else {
    hotAPI.reload("data-v-2e4c0cea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            data: {
                name: ''
            }
        };
    },

    methods: {
        addCategory: function addCategory() {
            var _this = this;

            fetch('/category/store', {
                method: 'POST',
                body: JSON.stringify(this.data),
                headers: {
                    'content-type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                _this.data = {};

                alert("Category " + data.name + " was successfully created");
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addCategory($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "name" }
                      },
                      [_vm._v("Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.name,
                            expression: "data.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Category Name",
                          id: "name"
                        },
                        domProps: { value: _vm.data.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-danger ml-1 pull-left",
                      attrs: { to: "/category" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success pull-right",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Create")]
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "panel-heading" }, [
          _vm._v("\n\t\t\t\t\t\tCategory Management\n\t\t\t\t\t\t"),
          _c("small", { staticClass: "text-muted" }, [
            _vm._v("Create Category")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e4c0cea", module.exports)
  }
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(62)
/* template */
var __vue_template__ = __webpack_require__(63)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/category/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b914854", Component.options)
  } else {
    hotAPI.reload("data-v-6b914854", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            categories: []
        };
    },
    mounted: function mounted() {
        this.getCategories();
    },

    methods: {
        getCategories: function getCategories() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default()({
                method: 'GET',
                url: '/category/list'
            }).then(function (result) {
                _this.categories = result.data;

                console.log(result);
            }, function (error) {
                console.log(error);
            });
        },
        deleteCategory: function deleteCategory(id) {
            var _this2 = this;

            if (confirm('Are you sure?')) {
                fetch('/category/' + id + '/delete', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                }).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    alert('Category was successfully deleted');
                    _this2.getCategories();
                }).catch(function (err) {
                    return console.log(err);
                });
            }
        }
    }
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-7" }, [
            _c(
              "div",
              {
                staticClass: "btn-toolbar float-right",
                attrs: {
                  role: "toolbar",
                  "aria-label": "Toolbar with button groups"
                }
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-success ml-1",
                    attrs: {
                      to: { path: "/category/create/" },
                      "data-toggle": "tooltip",
                      title: "Add New Expense Category"
                    }
                  },
                  [_c("span", { staticClass: "glyphicon glyphicon-inbox" })]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.categories, function(category) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(category.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(category.formatted_created_at))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success ml-1",
                            attrs: {
                              to: {
                                path: "/category/" + category.id + "/edit"
                              },
                              "data-toggle": "tooltip",
                              title: "Edit Category"
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-search"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: {
                              "data-toggle": "tooltip",
                              title: "Delete Category"
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteCategory(category.id)
                              }
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "glyphicon glyphicon-trash"
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5" }, [
      _c("h4", { staticClass: "panel-heading" }, [
        _vm._v("\n\t\t\t\t\t\tCategory Management\n\t\t\t\t\t\t"),
        _c("small", { staticClass: "text-muted" }, [_vm._v("Category List")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date Created")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b914854", module.exports)
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(65)
/* template */
var __vue_template__ = __webpack_require__(66)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/category/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74f68078", Component.options)
  } else {
    hotAPI.reload("data-v-74f68078", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            data: {
                name: ''
            }
        };
    },
    mounted: function mounted() {
        this.getCategoryDetails();
    },

    methods: {
        getCategoryDetails: function getCategoryDetails() {
            var _this = this;

            axios({
                method: 'GET',
                url: '/category/' + this.$route.params.id + '/detail'
            }).then(function (result) {
                _this.data.name = result.data.name;

                console.log(result);
            }, function (error) {
                console.log(error);
            });
        },
        updateCategory: function updateCategory() {
            fetch('/category/' + this.$route.params.id + '/update', {
                method: 'POST',
                body: JSON.stringify(this.data),
                headers: {
                    'content-type': 'application/json',
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(function (res) {
                return res.json();
            }).then(function (data) {

                alert("Category " + data.category.name + " was successfully updated");
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateCategory($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-2",
                        staticStyle: { "font-size": "13px" },
                        attrs: { for: "name" }
                      },
                      [_vm._v("Category")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.name,
                            expression: "data.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          placeholder: "Name",
                          id: "name"
                        },
                        domProps: { value: _vm.data.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-danger ml-1 pull-left",
                      attrs: { to: "/category/" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success pull-right",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Update")]
                  )
                ],
                1
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "panel-heading" }, [
          _vm._v("\n\t\t\t\t\t\tCategory Management\n\t\t\t\t\t\t"),
          _c("small", { staticClass: "text-muted" }, [_vm._v("Edit Category")])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74f68078", module.exports)
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/dashboard/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a43e4bd8", Component.options)
  } else {
    hotAPI.reload("data-v-a43e4bd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            dataReport: [],
            tmpData: [],
            seriesColor: '#6fcd98',
            colorInputIsSupported: null,
            animationDuration: 1000,
            chartOptions: {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Expense per Category'
                },
                series: [{
                    data: [],
                    color: '#6fcd98'
                }]
            }
        };
    },
    mounted: function mounted() {
        this.getReport();
    },

    methods: {
        getReport: function getReport() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default()({
                method: 'GET',
                url: '/api/report'
            }).then(function (result) {
                for (var i = 0; i < Object.keys(result.data).length; i++) {
                    _this.chartOptions.series[0].data.push({
                        name: result.data[i].name,
                        y: result.data[i].y
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "panel panel-default" }, [
      _c("div", { staticClass: "panel-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12" },
            [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "panel-heading" }, [
          _vm._v("\n\t\t\t\t\t\tDashboard\n\t\t\t\t\t")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a43e4bd8", module.exports)
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);