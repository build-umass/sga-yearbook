(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function _tryApplyUpdates() {
  _tryApplyUpdates = // This function reads code updates on the fly and hard
  // reloads the page when it has changed.
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch(typeof __webpack_require__.j !== 'undefined' ? "".concat(hotUpdatePath).concat(curHash, ".").concat(__webpack_require__.j, ".hot-update.json") : "".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils).setupPing(assetPrefix, function () {
  return page;
});
(0, _fouc).displayContent();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 128 >> shift && codePoint << shift <= 2047;
    }

    if (octetsCount === 2) {
      return codePoint >= 2048 >> shift && codePoint << shift <= 55295 || codePoint >= 57344 >> shift && codePoint << shift <= 65535;
    }

    if (octetsCount === 3) {
      return codePoint >= 65536 >> shift && codePoint << shift <= 1114111;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 65533;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 65535) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
        string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal // see #120
  ;
  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.displayContent = displayContent;

function displayContent(callback) {
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource).getEventSourceWrapper({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(encodeURIComponent(currentPage)),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data); // don't attempt fetching the page if we're already showing
      // the dev overlay as this can cause the error to be triggered
      // repeatedly

      if (payload.invalid && !self.__NEXT_DATA__.err) {
        // Payload can be invalid even if the page does exist.
        // So, we check if it can be created.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            // Page exists now, reload
            location.reload();
          } else {
            // Page doesn't exist
            if (self.__NEXT_DATA__.page === currentPage && currentPage !== '/_error') {
              // We are still on the page,
              // reload to show 404 error page
              location.reload();
            }
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7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O0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2V2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2V2ZW50U291cmNlUG9seWZpbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbFwiKSk7XG52YXIgX2V2ZW50c291cmNlID0gcmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTtcbnZhciBfb25EZW1hbmRFbnRyaWVzVXRpbHMgPSByZXF1aXJlKFwiLi9vbi1kZW1hbmQtZW50cmllcy11dGlsc1wiKTtcbnZhciBfZm91YyA9IHJlcXVpcmUoXCIuL2ZvdWNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuaWYgKCF3aW5kb3cuRXZlbnRTb3VyY2UpIHtcbiAgICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBfZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O1xufVxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudCk7XG5sZXQgeyBhc3NldFByZWZpeCAsIHBhZ2UgIH0gPSBkYXRhO1xuYXNzZXRQcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJztcbmxldCBtb3N0UmVjZW50SGFzaCA9IG51bGw7XG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi8gbGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fO1xuY29uc3QgaG90VXBkYXRlUGF0aCA9IGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJztcbi8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XG4gICAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfXztcbn1cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICAgIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSc7XG59XG5mdW5jdGlvbiBfdHJ5QXBwbHlVcGRhdGVzKCkge1xuICAgIF90cnlBcHBseVVwZGF0ZXMgPSAvLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4gICAgLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuICAgIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKigpIHtcbiAgICAgICAgaWYgKCFpc1VwZGF0ZUF2YWlsYWJsZSgpIHx8ICFjYW5BcHBseVVwZGF0ZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh0eXBlb2YgX193ZWJwYWNrX3J1bnRpbWVfaWRfXyAhPT0gJ3VuZGVmaW5lZCcgPyBgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uJHtfX3dlYnBhY2tfcnVudGltZV9pZF9ffS5ob3QtdXBkYXRlLmpzb25gIDogYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApO1xuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSB5aWVsZCByZXMuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlO1xuICAgICAgICAgICAgLy8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuICAgICAgICAgICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKSA/IGpzb25EYXRhLmMgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKSkuc29tZSgobW9kKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gKSAhPT0gLTEgfHwgbW9kLmluZGV4T2YoYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWB9YC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKSkgIT09IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocGFnZVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfdHJ5QXBwbHlVcGRhdGVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XG4gICAgcmV0dXJuIF90cnlBcHBseVVwZGF0ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbigwLCBfZXZlbnRzb3VyY2UpLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpPT57XG4gICAgaWYgKGV2ZW50LmRhdGEgPT09ICdcXHVEODNEXFx1REM5MycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2g7XG4gICAgICAgICAgICB0cnlBcHBseVVwZGF0ZXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleCk7XG4gICAgfVxufSk7XG4oMCwgX29uRGVtYW5kRW50cmllc1V0aWxzKS5zZXR1cFBpbmcoYXNzZXRQcmVmaXgsICgpPT5wYWdlXG4pO1xuKDAsIF9mb3VjKS5kaXNwbGF5Q29udGVudCgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAtZGV2LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hZGRNZXNzYWdlTGlzdGVuZXIgPSBhZGRNZXNzYWdlTGlzdGVuZXI7XG5leHBvcnRzLmdldEV2ZW50U291cmNlV3JhcHBlciA9IGdldEV2ZW50U291cmNlV3JhcHBlcjtcbmNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW107XG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICAgIHZhciBzb3VyY2U7XG4gICAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMDtcbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgICAgICAgaGFuZGxlRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMik7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO1xuICAgICAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xuICAgICAgICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3Q7XG4gICAgICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpO1xuICAgICAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudENhbGxiYWNrcy5mb3JFYWNoKChjYik9PntcbiAgICAgICAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuO1xuICAgICAgICAgICAgY2IoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIHNvdXJjZS5jbG9zZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNsb3NlOiAoKT0+e1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICBzb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiBmdW5jdGlvbihmbikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZm4pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYikge1xuICAgIGV2ZW50Q2FsbGJhY2tzLnB1c2goY2IpO1xufVxuZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHNvdXJjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8qIGVzbGludC1kaXNhYmxlICovIC8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZTtcbnZhciBUZXh0RGVjb2RlciA9IHdpbmRvdy5UZXh0RGVjb2RlcjtcbnZhciBUZXh0RW5jb2RlciA9IHdpbmRvdy5UZXh0RW5jb2RlcjtcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyO1xuaWYgKEFib3J0Q29udHJvbGxlciA9PSB1bmRlZmluZWQpIHtcbiAgICBBYm9ydENvbnRyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaWduYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XG4gICAgdGhpcy5iaXRzTmVlZGVkID0gMDtcbiAgICB0aGlzLmNvZGVQb2ludCA9IDA7XG59XG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihvY3RldHMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgICAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMTI4ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAyMDQ3O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAyMDQ4ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSA1NTI5NSB8fCBjb2RlUG9pbnQgPj0gNTczNDQgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDY1NTM1O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSA2NTUzNiA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMTExNDExMTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSB7XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHZhciBSRVBMQUNFUiA9IDY1NTMzO1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZDtcbiAgICB2YXIgY29kZVBvaW50ID0gdGhpcy5jb2RlUG9pbnQ7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXTtcbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChvY3RldCA8IDEyOCB8fCBvY3RldCA+IDE5MSB8fCAhdmFsaWQoY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzLCBiaXRzTmVlZGVkIC0gNiwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSkpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICAgICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMTkyICYmIG9jdGV0IDw9IDIyMykge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMTtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDM7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiaXRzTmVlZGVkICE9PSAwICYmICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpKSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiaXRzTmVlZGVkIC09IDY7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBjb2RlUG9pbnQgPDwgNiB8IG9jdGV0ICYgNjM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gNjU1MzUpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiArIChjb2RlUG9pbnQgLSA2NTUzNSAtIDEgPj4gMTApKTtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NjMyMCArIChjb2RlUG9pbnQgLSA2NTUzNSAtIDEgJiAxMDIzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iaXRzTmVlZGVkID0gYml0c05lZWRlZDtcbiAgICB0aGlzLmNvZGVQb2ludCA9IGNvZGVQb2ludDtcbiAgICByZXR1cm4gc3RyaW5nO1xufTtcbi8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLCB7XG4gICAgICAgICAgICBzdHJlYW06IHRydWVcbiAgICAgICAgfSkgPT09ICd0ZXN0JztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vLyBJRSwgRWRnZVxuaWYgKFRleHREZWNvZGVyID09IHVuZGVmaW5lZCB8fCBUZXh0RW5jb2RlciA9PSB1bmRlZmluZWQgfHwgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKCkpIHtcbiAgICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGw7XG59XG52YXIgayA9IGZ1bmN0aW9uKCkge1xufTtcbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICB0aGlzLnJlc3BvbnNlVHlwZSA9ICcnO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IDA7XG4gICAgdGhpcy5zdGF0dXMgPSAwO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICcnO1xuICAgIHRoaXMucmVzcG9uc2VUZXh0ID0gJyc7XG4gICAgdGhpcy5vbnByb2dyZXNzID0gaztcbiAgICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGs7XG4gICAgdGhpcy5fY29udGVudFR5cGUgPSAnJztcbiAgICB0aGlzLl94aHIgPSB4aHI7XG4gICAgdGhpcy5fc2VuZFRpbWVvdXQgPSAwO1xuICAgIHRoaXMuX2Fib3J0ID0gaztcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAgIHRoaXMuX2Fib3J0KHRydWUpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgeGhyID0gdGhpcy5feGhyO1xuICAgIHZhciBzdGF0ZSA9IDE7XG4gICAgdmFyIHRpbWVvdXQgPSAwO1xuICAgIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24oc2lsZW50KSB7XG4gICAgICAgIGlmICh0aGF0Ll9zZW5kVGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIHN0YXRlID0gNDtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBrO1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBrO1xuICAgICAgICAgICAgeGhyLm9uYWJvcnQgPSBrO1xuICAgICAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGs7XG4gICAgICAgICAgICAvLyBJRSA4IC0gOTogWERvbWFpblJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgICAgICAgLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNDtcbiAgICAgICAgICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9O1xuICAgIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICB2YXIgc3RhdHVzVGV4dCA9ICcnO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9ICdPSyc7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuY29udGVudFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgdGhhdC5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhhdC5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICB0aGF0Ll9jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG9uU3RhcnQoKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IDM7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJyc7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMztcbiAgICAgICAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgdGhhdC5vbnByb2dyZXNzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXG4gICAgICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgICAgIG9uUHJvZ3Jlc3MoKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IDQ7XG4gICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDQ7XG4gICAgICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBPcGVyYSAxMlxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgb25TdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgb25Qcm9ncmVzcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBYRG9tYWluUmVxdWVzdCNhYm9ydCByZW1vdmVzIG9ucHJvZ3Jlc3MsIG9uZXJyb3IsIG9ubG9hZFxuICAgIHhoci5vbmxvYWQgPSBvbkZpbmlzaDtcbiAgICB4aHIub25lcnJvciA9IG9uRmluaXNoO1xuICAgIC8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW9yLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcbiAgICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4gICAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICAgIHhoci5vbmFib3J0ID0gb25GaW5pc2g7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gICAgaWYgKCEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzcztcbiAgICB9XG4gICAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAgIC8vIE9wZXJhIDwgMTJcbiAgICAvLyBGaXJlZm94IDwgMy41XG4gICAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gICAgLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbiAgICAvLyBzZWUgYWxzbyAjNjRcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlO1xuICAgIGlmICgnY29udGVudFR5cGUnIGluIHhocikge1xuICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdwYWRkaW5nPXRydWUnO1xuICAgIH1cbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgaWYgKCdyZWFkeVN0YXRlJyBpbiB4aHIpIHtcbiAgICAgICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgICAgIC8vICM5MVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9hYm9ydChmYWxzZSk7XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO1xufTtcblhIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHZhciB4aHIgPSB0aGlzLl94aHI7XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyAhPSB1bmRlZmluZWQgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgOiAnJztcbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gbG9hZGluZyBpbmRpY2F0b3IgaW4gU2FmYXJpIDwgPyAoNiksIENocm9tZSA8IDE0LCBGaXJlZm94XG4gICAgaWYgKCEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcbiAgICAgICAgICAgIHRoYXQuc2VuZCgpO1xuICAgICAgICB9LCA0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgeGhyID0gdGhpcy5feGhyO1xuICAgIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFscztcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgICAgICB4aHIuc2VuZCh1bmRlZmluZWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgICAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgICAgIHRocm93IGVycm9yMTtcbiAgICB9XG59O1xuZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApICsgMzIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCkge1xuICAgIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGFycmF5ID0gYWxsLnNwbGl0KCdcXHJcXG4nKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICB2YXIgbGluZSA9IGFycmF5W2ldO1xuICAgICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpO1xuICAgICAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XG4gICAgICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fbWFwID0gbWFwO1xufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07XG59O1xuZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge1xufVxuWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oeGhyLCBvblN0YXJ0Q2FsbGJhY2ssIG9uUHJvZ3Jlc3NDYWxsYmFjaywgb25GaW5pc2hDYWxsYmFjaywgdXJsLCB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMpIHtcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGg7XG4gICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7XG4gICAgfTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgICAgICAgICAgb25TdGFydENhbGxiYWNrKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscztcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgIGZvcih2YXIgbmFtZSBpbiBoZWFkZXJzKXtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQoKTtcbn07XG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKTtcbn07XG5mdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpIHtcbn1cbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oeGhyLCBvblN0YXJ0Q2FsbGJhY2ssIG9uUHJvZ3Jlc3NDYWxsYmFjaywgb25GaW5pc2hDYWxsYmFjaywgdXJsLCB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMpIHtcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcbiAgICA7XG4gICAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBzaWduYWw6IHNpZ25hbCxcbiAgICAgICAgY2FjaGU6ICduby1zdG9yZSdcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICBvblN0YXJ0Q2FsbGJhY2socmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0LCByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksIG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICByZWFkZXIuY2FuY2VsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcmVhZE5leHRDaHVuayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkKCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWFkTmV4dENodW5rKCk7XG4gICAgICAgIH0pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHRocm93RXJyb3IoZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgfSwgMCk7XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0ID0gdGhpcztcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXTtcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHR5cGUgPSBTdHJpbmcodHlwZSk7XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcbiAgICBpZiAodHlwZUxpc3RlbmVycyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHlwZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzO1xuICAgIH1cbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG59O1xuRXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHR5cGUgPSBTdHJpbmcodHlwZSk7XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGZpbHRlcmVkID0gW107XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkO1xuICAgICAgICB9XG4gICAgfVxufTtcbmZ1bmN0aW9uIEV2ZW50KHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpO1xuICAgIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZDtcbn1cbk1lc3NhZ2VFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7XG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICAgIEV2ZW50LmNhbGwodGhpcywgdHlwZSk7XG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHQ7XG4gICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xufVxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKTtcbnZhciBXQUlUSU5HID0gLTE7XG52YXIgQ09OTkVDVElORyA9IDA7XG52YXIgT1BFTiA9IDE7XG52YXIgQ0xPU0VEID0gMjtcbnZhciBBRlRFUl9DUiA9IC0xO1xudmFyIEZJRUxEX1NUQVJUID0gMDtcbnZhciBGSUVMRCA9IDE7XG52YXIgVkFMVUVfU1RBUlQgPSAyO1xudmFyIFZBTFVFID0gMztcbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7XG52YXIgTUlOSU1VTV9EVVJBVElPTiA9IDEwMDA7XG52YXIgTUFYSU1VTV9EVVJBVElPTiA9IDE4MDAwMDAwO1xudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSwgZGVmKSB7XG4gICAgdmFyIG4gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIGlmIChuICE9PSBuKSB7XG4gICAgICAgIG4gPSBkZWY7XG4gICAgfVxuICAgIHJldHVybiBjbGFtcER1cmF0aW9uKG4pO1xufTtcbnZhciBjbGFtcER1cmF0aW9uID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTik7XG59O1xudmFyIGZpcmUgPSBmdW5jdGlvbih0aGF0LCBmLCBldmVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZi5jYWxsKHRoYXQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3dFcnJvcihlKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsIG9wdGlvbnMpIHtcbiAgICBFdmVudFRhcmdldC5jYWxsKHRoaXMpO1xuICAgIHRoaXMub25vcGVuID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVybCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY2xvc2UgPSB1bmRlZmluZWQ7XG4gICAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKTtcbn1cbnZhciBpc0ZldGNoU3VwcG9ydGVkID0gZmV0Y2ggIT0gdW5kZWZpbmVkICYmIFJlc3BvbnNlICE9IHVuZGVmaW5lZCAmJiAnYm9keScgaW4gUmVzcG9uc2UucHJvdG90eXBlO1xuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICAgIHVybCA9IFN0cmluZyh1cmwpO1xuICAgIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKTtcbiAgICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKTtcbiAgICB2YXIgaGVhcnRiZWF0VGltZW91dCA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCAhPSB1bmRlZmluZWQgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApIDogY2xhbXBEdXJhdGlvbig0NTAwMCk7XG4gICAgdmFyIGxhc3RFdmVudElkID0gJyc7XG4gICAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xuICAgIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlO1xuICAgIHZhciBoZWFkZXJzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFkZXJzICE9IHVuZGVmaW5lZCA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQgPyBvcHRpb25zLlRyYW5zcG9ydCA6IFhNTEh0dHBSZXF1ZXN0O1xuICAgIHZhciB4aHIgPSBpc0ZldGNoU3VwcG9ydGVkICYmICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKSA/IHVuZGVmaW5lZCA6IG5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpO1xuICAgIHZhciB0cmFuc3BvcnQgPSB4aHIgPT0gdW5kZWZpbmVkID8gbmV3IEZldGNoVHJhbnNwb3J0KCkgOiBuZXcgWEhSVHJhbnNwb3J0KCk7XG4gICAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgIHZhciB0aW1lb3V0ID0gMDtcbiAgICB2YXIgY3VycmVudFN0YXRlID0gV0FJVElORztcbiAgICB2YXIgZGF0YUJ1ZmZlciA9ICcnO1xuICAgIHZhciBsYXN0RXZlbnRJZEJ1ZmZlciA9ICcnO1xuICAgIHZhciBldmVudFR5cGVCdWZmZXIgPSAnJztcbiAgICB2YXIgdGV4dEJ1ZmZlciA9ICcnO1xuICAgIHZhciBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xuICAgIHZhciBmaWVsZFN0YXJ0ID0gMDtcbiAgICB2YXIgdmFsdWVTdGFydCA9IDA7XG4gICAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbihzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBoZWFkZXJzLCBjYW5jZWwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWw7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAgJiYgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTjtcbiAgICAgICAgICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XG4gICAgICAgICAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU47XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm9wZW4sIGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIiArIHN0YXR1cyArICcgJyArIHN0YXR1c1RleHQgKyAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICsgKGNvbnRlbnRUeXBlID09IHVuZGVmaW5lZCA/ICctJyA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgJyAnKSkgKyAnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24odGV4dENodW5rKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgICAgICAgIHZhciBuID0gLTE7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNodW5rID0gKG4gIT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSk7XG4gICAgICAgICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSk7XG4gICAgICAgICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKXtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKHZhbHVlU3RhcnQgKyAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApID8gMSA6IDApLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdoZWFydGJlYXRUaW1lb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhQnVmZmVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJ21lc3NhZ2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQ6IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgPyBBRlRFUl9DUiA6IEZJRUxEX1NUQVJUO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkU3RhcnQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgICAgIH0sIHJldHJ5KTtcbiAgICAgICAgICAgIHJldHJ5ID0gY2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkgKiAxNiwgcmV0cnkgKiAyKSk7XG4gICAgICAgICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElORztcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnZXJyb3InKTtcbiAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gQ0xPU0VEO1xuICAgICAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYW5jZWxGdW5jdGlvbigpO1xuICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRUQ7XG4gICAgfTtcbiAgICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0FjdGl2aXR5ICYmIGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKCdObyBhY3Rpdml0eSB3aXRoaW4gJyArIGhlYXJ0YmVhdFRpbWVvdXQgKyAnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLicpKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxGdW5jdGlvbigpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcbiAgICAgICAgY3VycmVudFN0YXRlID0gQ09OTkVDVElORztcbiAgICAgICAgZGF0YUJ1ZmZlciA9ICcnO1xuICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJztcbiAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZDtcbiAgICAgICAgdGV4dEJ1ZmZlciA9ICcnO1xuICAgICAgICBmaWVsZFN0YXJ0ID0gMDtcbiAgICAgICAgdmFsdWVTdGFydCA9IDA7XG4gICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuICAgICAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG4gICAgICAgIHZhciByZXF1ZXN0VVJMID0gdXJsO1xuICAgICAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSAnZGF0YTonICYmIHVybC5zbGljZSgwLCA1KSAhPT0gJ2Jsb2I6Jykge1xuICAgICAgICAgICAgaWYgKGxhc3RFdmVudElkICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RVUkwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdsYXN0RXZlbnRJZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzWydBY2NlcHQnXSA9ICd0ZXh0L2V2ZW50LXN0cmVhbSc7XG4gICAgICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdHJhbnNwb3J0Lm9wZW4oeGhyLCBvblN0YXJ0LCBvblByb2dyZXNzLCBvbkZpbmlzaCwgcmVxdWVzdFVSTCwgd2l0aENyZWRlbnRpYWxzLCByZXF1ZXN0SGVhZGVycyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGVzLnVybCA9IHVybDtcbiAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElORztcbiAgICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XG4gICAgZXMuX2Nsb3NlID0gY2xvc2U7XG4gICAgb25UaW1lb3V0KCk7XG59XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU47XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRUQ7XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Nsb3NlKCk7XG59O1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HID0gQ09OTkVDVElORztcbkV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU47XG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRDtcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcbnZhciBfZGVmYXVsdCA9IEV2ZW50U291cmNlUG9seWZpbGw7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kaXNwbGF5Q29udGVudCA9IGRpc3BsYXlDb250ZW50O1xuZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0KShmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yKHZhciB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksIGkgPSB4Lmxlbmd0aDsgaS0tOyl7XG4gICAgICAgICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNsb3NlUGluZyA9IGNsb3NlUGluZztcbmV4cG9ydHMuc2V0dXBQaW5nID0gc2V0dXBQaW5nO1xuZXhwb3J0cy5jdXJyZW50UGFnZSA9IHZvaWQgMDtcbnZhciBfZXZlbnRzb3VyY2UgPSByZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO1xubGV0IGV2dFNvdXJjZTtcbmxldCBjdXJyZW50UGFnZTtcbmV4cG9ydHMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZTtcbmZ1bmN0aW9uIGNsb3NlUGluZygpIHtcbiAgICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKTtcbiAgICBldnRTb3VyY2UgPSBudWxsO1xufVxuZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG4gICAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVybjtcbiAgICBleHBvcnRzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgPSBwYXRobmFtZTtcbiAgICAvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbiAgICBjbG9zZVBpbmcoKTtcbiAgICBldnRTb3VyY2UgPSAoMCwgX2V2ZW50c291cmNlKS5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICAgICAgICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2VuY29kZVVSSUNvbXBvbmVudChjdXJyZW50UGFnZSl9YCxcbiAgICAgICAgdGltZW91dDogNTAwMFxuICAgIH0pO1xuICAgIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KT0+e1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICAgIC8vIGRvbid0IGF0dGVtcHQgZmV0Y2hpbmcgdGhlIHBhZ2UgaWYgd2UncmUgYWxyZWFkeSBzaG93aW5nXG4gICAgICAgICAgICAvLyB0aGUgZGV2IG92ZXJsYXkgYXMgdGhpcyBjYW4gY2F1c2UgdGhlIGVycm9yIHRvIGJlIHRyaWdnZXJlZFxuICAgICAgICAgICAgLy8gcmVwZWF0ZWRseVxuICAgICAgICAgICAgaWYgKHBheWxvYWQuaW52YWxpZCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmVycikge1xuICAgICAgICAgICAgICAgIC8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIGV4aXN0LlxuICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBjaGVjayBpZiBpdCBjYW4gYmUgY3JlYXRlZC5cbiAgICAgICAgICAgICAgICBmZXRjaChsb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgICAgICAgICAgfSkudGhlbigocGFnZVJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VSZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhZ2UgZXhpc3RzIG5vdywgcmVsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBhZ2UgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX19ORVhUX0RBVEFfXy5wYWdlID09PSBjdXJyZW50UGFnZSAmJiBjdXJyZW50UGFnZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIHN0aWxsIG9uIHRoZSBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbG9hZCB0byBzaG93IDQwNCBlcnJvciBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJfZXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIndpbmRvdyIsIkV2ZW50U291cmNlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImFzc2V0UHJlZml4IiwicGFnZSIsIm1vc3RSZWNlbnRIYXNoIiwiY3VySGFzaCIsIl9fd2VicGFja19oYXNoX18iLCJob3RVcGRhdGVQYXRoIiwiZW5kc1dpdGgiLCJpc1VwZGF0ZUF2YWlsYWJsZSIsImNhbkFwcGx5VXBkYXRlcyIsIm1vZHVsZSIsImhvdCIsInN0YXR1cyIsIl90cnlBcHBseVVwZGF0ZXMiLCJmZXRjaCIsIl9fd2VicGFja19ydW50aW1lX2lkX18iLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsInRyeUFwcGx5VXBkYXRlcyIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJzZXR1cFBpbmciLCJkaXNwbGF5Q29udGVudCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImdldEV2ZW50U291cmNlV3JhcHBlciIsImV2ZW50Q2FsbGJhY2tzIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwib3B0aW9ucyIsInNvdXJjZSIsImxhc3RBY3Rpdml0eSIsIkRhdGUiLCJsaXN0ZW5lcnMiLCJ0aW1lb3V0IiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0IiwicGF0aCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwicHVzaCIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsImFib3J0IiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsImJpdHNOZWVkZWQiLCJjb2RlUG9pbnQiLCJwcm90b3R5cGUiLCJkZWNvZGUiLCJvY3RldHMiLCJ2YWxpZCIsInNoaWZ0Iiwib2N0ZXRzQ291bnQiLCJFcnJvciIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdXBwb3J0c1N0cmVhbU9wdGlvbiIsImVuY29kZSIsInN0cmVhbSIsImsiLCJYSFJXcmFwcGVyIiwieGhyIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJvbnByb2dyZXNzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiX2NvbnRlbnRUeXBlIiwiX3hociIsIl9zZW5kVGltZW91dCIsIl9hYm9ydCIsIm9wZW4iLCJtZXRob2QiLCJ1cmwiLCJ0aGF0Iiwic3RhdGUiLCJzaWxlbnQiLCJjbGVhclRpbWVvdXQiLCJvbmxvYWQiLCJvbmFib3J0Iiwib25TdGFydCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJvblByb2dyZXNzIiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJYTUxIdHRwUmVxdWVzdCIsIm5hbWUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJyZXNwb25zZSIsInJlYWRlciIsImJvZHkiLCJnZXRSZWFkZXIiLCJjYW5jZWwiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsIkV2ZW50VGFyZ2V0IiwiX2xpc3RlbmVycyIsInRocm93RXJyb3IiLCJlIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJ0eXBlIiwibGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3VuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZCIsIkV2ZW50IiwiTWVzc2FnZUV2ZW50IiwibGFzdEV2ZW50SWQiLCJDb25uZWN0aW9uRXZlbnQiLCJXQUlUSU5HIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TRUQiLCJBRlRFUl9DUiIsIkZJRUxEX1NUQVJUIiwiRklFTEQiLCJWQUxVRV9TVEFSVCIsIlZBTFVFIiwiY29udGVudFR5cGVSZWdFeHAiLCJNSU5JTVVNX0RVUkFUSU9OIiwiTUFYSU1VTV9EVVJBVElPTiIsInBhcnNlRHVyYXRpb24iLCJkZWYiLCJuIiwicGFyc2VJbnQiLCJjbGFtcER1cmF0aW9uIiwiTWF0aCIsIm1pbiIsIm1heCIsImZpcmUiLCJmIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImVzIiwiQm9vbGVhbiIsImluaXRpYWxSZXRyeSIsImhlYXJ0YmVhdFRpbWVvdXQiLCJyZXRyeSIsIndhc0FjdGl2aXR5Iiwic3RyaW5naWZ5IiwiQ3VycmVudFRyYW5zcG9ydCIsIlRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwidGVzdCIsInRleHRDaHVuayIsInBvc2l0aW9uIiwiZmllbGQiLCJyZXF1ZXN0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdEhlYWRlcnMiLCJfZGVmYXVsdCIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbG9zZVBpbmciLCJjdXJyZW50UGFnZSIsImV2dFNvdXJjZSIsInBhdGhuYW1lRm4iLCJwYXRobmFtZSIsInBheWxvYWQiLCJpbnZhbGlkIiwiX19ORVhUX0RBVEFfXyIsImhyZWYiLCJwYWdlUmVzIl0sInNvdXJjZVJvb3QiOiIifQ==