"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var C_Users_quynh_OneDrive_Desktop_sga_yearbook_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Colors */ "./components/Colors.js");
/* harmony import */ var _components_DetailsThumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DetailsThumb */ "./components/DetailsThumb.js");
/* harmony import */ var _public_firstEdition_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/firstEdition.png */ "./public/firstEdition.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\quynh\\OneDrive\\Desktop\\sga-yearbook\\frontend\\pages\\index.js",
    _s = $RefreshSig$();

// Imports











function Index() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState([{
    "_id": "1",
    "title": "Yearbook",
    "src": ['firstEdition.jpg'],
    "description": "Get your limited yearbooks",
    "content": "The Index is UMass Amherst’s student-published yearbook, and the oldest yearbook in New England, having originally been published in 1870.  It chronicles anything and everything about UMass undergraduate student life, including memories, current events, clubs, agencies, athletics, student works of art, and lots of pictures.  For seniors, the yearbook also includes the graduating class, ordered by academic college, and signature pages.  In the 2021-2022 academic year, the Index is resuming publication after a 16-year hiatus!  \n" + "\n",
    "price": 9.99,
    "colors": [],
    "count": 1
  }]),
      _React$useState2 = (0,C_Users_quynh_OneDrive_Desktop_sga_yearbook_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      products = _React$useState2[0],
      setProducts = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),
      _React$useState4 = (0,C_Users_quynh_OneDrive_Desktop_sga_yearbook_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),
      index = _React$useState4[0],
      setIndex = _React$useState4[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "about-bg",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "bg-gradient-transparent",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), products.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "details",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "big-img",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: item.src[index],
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: ["$", item.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Colors__WEBPACK_IMPORTED_MODULE_3__.default, {
            colors: item.colors
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "https://timothynguyen.github.io/TimothyNguyen/",
            className: "button",
            children: "Add to Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, _this)]
      }, item._id, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

_s(Index, "bs0syTvtqiMku4PPxfXF3Vue7n0=");

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGM2MTY1OGRhMjE1ODI3OGQwMmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTVSxLQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBRTdCLHdCQUFnQ1YscURBQUEsQ0FBZSxDQUFDO0FBQzVDLFdBQU8sR0FEcUM7QUFFNUMsYUFBUyxVQUZtQztBQUc1QyxXQUFPLENBQUMsa0JBQUQsQ0FIcUM7QUFJNUMsbUJBQWUsNEJBSjZCO0FBSzVDLGVBQVcsMGhCQUNQLElBTndDO0FBTzVDLGFBQVMsSUFQbUM7QUFRNUMsY0FBUyxFQVJtQztBQVM1QyxhQUFTO0FBVG1DLEdBQUQsQ0FBZixDQUFoQztBQUFBO0FBQUEsTUFBT1ksUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFZQSx5QkFBMEJiLHFEQUFBLENBQWUsQ0FBZixDQUExQjtBQUFBO0FBQUEsTUFBT2MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsK0JBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFPUUgsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLDBCQUNiO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBRUEsSUFBSSxDQUFDQyxHQUFMLENBQVNKLEtBQVQsQ0FBVjtBQUEyQixlQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0k7QUFBQSx3QkFBS0csSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLDhCQUFRRixJQUFJLENBQUNHLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJLDhEQUFDLHVEQUFEO0FBQVEsa0JBQU0sRUFBRUgsSUFBSSxDQUFDSTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBQSxzQkFBSUosSUFBSSxDQUFDSztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFPSTtBQUFBLHNCQUFJTCxJQUFJLENBQUNNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVFJO0FBQUcsZ0JBQUksRUFBQyxnREFBUjtBQUF5RCxxQkFBUyxFQUFDLFFBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBLFNBQThCTixJQUFJLENBQUNPLEdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWpCLENBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Qkg7O0dBN0N1QmQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZMaW5rJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgQ29sb3JzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3JzJ1xyXG5pbXBvcnQgRGV0YWlsc1RodW1iIGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWlsc1RodW1iJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vcHVibGljL2ZpcnN0RWRpdGlvbi5wbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCAoKSB7XHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSBSZWFjdC51c2VTdGF0ZShbe1xyXG4gICAgICAgIFwiX2lkXCI6IFwiMVwiLFxyXG4gICAgICAgIFwidGl0bGVcIjogXCJZZWFyYm9va1wiLFxyXG4gICAgICAgIFwic3JjXCI6IFsnZmlyc3RFZGl0aW9uLmpwZyddLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHZXQgeW91ciBsaW1pdGVkIHllYXJib29rc1wiLFxyXG4gICAgICAgIFwiY29udGVudFwiOiBcIlRoZSBJbmRleCBpcyBVTWFzcyBBbWhlcnN04oCZcyBzdHVkZW50LXB1Ymxpc2hlZCB5ZWFyYm9vaywgYW5kIHRoZSBvbGRlc3QgeWVhcmJvb2sgaW4gTmV3IEVuZ2xhbmQsIGhhdmluZyBvcmlnaW5hbGx5IGJlZW4gcHVibGlzaGVkIGluIDE4NzAuICBJdCBjaHJvbmljbGVzIGFueXRoaW5nIGFuZCBldmVyeXRoaW5nIGFib3V0IFVNYXNzIHVuZGVyZ3JhZHVhdGUgc3R1ZGVudCBsaWZlLCBpbmNsdWRpbmcgbWVtb3JpZXMsIGN1cnJlbnQgZXZlbnRzLCBjbHVicywgYWdlbmNpZXMsIGF0aGxldGljcywgc3R1ZGVudCB3b3JrcyBvZiBhcnQsIGFuZCBsb3RzIG9mIHBpY3R1cmVzLiAgRm9yIHNlbmlvcnMsIHRoZSB5ZWFyYm9vayBhbHNvIGluY2x1ZGVzIHRoZSBncmFkdWF0aW5nIGNsYXNzLCBvcmRlcmVkIGJ5IGFjYWRlbWljIGNvbGxlZ2UsIGFuZCBzaWduYXR1cmUgcGFnZXMuICBJbiB0aGUgMjAyMS0yMDIyIGFjYWRlbWljIHllYXIsIHRoZSBJbmRleCBpcyByZXN1bWluZyBwdWJsaWNhdGlvbiBhZnRlciBhIDE2LXllYXIgaGlhdHVzISAgXFxuXCIgK1xyXG4gICAgICAgICAgICBcIlxcblwiLFxyXG4gICAgICAgIFwicHJpY2VcIjogOS45OSxcclxuICAgICAgICBcImNvbG9yc1wiOltdLFxyXG4gICAgICAgIFwiY291bnRcIjogMVxyXG4gICAgfV0pXHJcblxyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtYmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcChpdGVtID0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZy1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY1tpbmRleF19IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2l0ZW0ucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JzIGNvbG9ycz17aXRlbS5jb2xvcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RpbW90aHluZ3V5ZW4uZ2l0aHViLmlvL1RpbW90aHlOZ3V5ZW4vXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+QWRkIHRvIENhcnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJMaW5rIiwiQnV0dG9uIiwiTmF2YmFyIiwiQ29sb3JzIiwiRGV0YWlsc1RodW1iIiwibG9nbyIsIkluZGV4IiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaW5kZXgiLCJzZXRJbmRleCIsIm1hcCIsIml0ZW0iLCJzcmMiLCJ0aXRsZSIsInByaWNlIiwiY29sb3JzIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==