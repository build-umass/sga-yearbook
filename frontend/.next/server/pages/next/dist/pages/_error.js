"use strict";
(() => {
var exports = {};
exports.id = "pages/next/dist/pages/_error";
exports.ids = ["pages/next/dist/pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}

class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
  }

}

Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
exports["default"] = Error;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLDRCQUZiO0FBR0FDLElBQUFBLE1BQU0sRUFBRSxDQUhSO0FBSUFDLElBQUFBLFdBQVcsRUFBRSxNQUpiO0FBS0FDLElBQUFBLE9BQU8sRUFBRSxrQkFMVDtBQU1BQyxJQUFBQSxRQUFRLEVBQUUsTUFOVjtBQU9BQyxJQUFBQSxVQUFVLEVBQUUsR0FQWjtBQVFBTixJQUFBQSxhQUFhLEVBQUU7QUFSZixHQW5CTztBQTZCWGYsRUFBQUEsRUFBRSxFQUFFO0FBQ0FvQixJQUFBQSxRQUFRLEVBQUUsTUFEVjtBQUVBQyxJQUFBQSxVQUFVLEVBQUUsUUFGWjtBQUdBUCxJQUFBQSxVQUFVLEVBQUUsU0FIWjtBQUlBRyxJQUFBQSxNQUFNLEVBQUUsQ0FKUjtBQUtBRSxJQUFBQSxPQUFPLEVBQUU7QUFMVDtBQTdCTyxDQUFmOzs7Ozs7Ozs7O0FDL0NBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZ2EteWVhcmJvb2std2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovL3NnYS15ZWFyYm9vay13ZWJzaXRlL2V4dGVybmFsIGNvbW1vbmpzIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3NnYS15ZWFyYm9vay13ZWJzaXRlL2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZGVzY1xuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpKTtcbiAgICB9XG59XG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3I7XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZXJyb3I6IHtcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwib2JqIiwiX19lc01vZHVsZSIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJFcnJvciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9