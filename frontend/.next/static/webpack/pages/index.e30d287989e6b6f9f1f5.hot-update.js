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
          className: "big-img"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTMwZDI4Nzk4OWU2YjZmOWYxZjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTVSxLQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBRTdCLHdCQUFnQ1YscURBQUEsQ0FBZSxDQUFDO0FBQzVDLFdBQU8sR0FEcUM7QUFFNUMsYUFBUyxVQUZtQztBQUc1QyxXQUFPLENBQUMsa0JBQUQsQ0FIcUM7QUFJNUMsbUJBQWUsNEJBSjZCO0FBSzVDLGVBQVcsMGhCQUNQLElBTndDO0FBTzVDLGFBQVMsSUFQbUM7QUFRNUMsY0FBUyxFQVJtQztBQVM1QyxhQUFTO0FBVG1DLEdBQUQsQ0FBZixDQUFoQztBQUFBO0FBQUEsTUFBT1ksUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFZQSx5QkFBMEJiLHFEQUFBLENBQWUsQ0FBZixDQUExQjtBQUFBO0FBQUEsTUFBT2MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsK0JBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFPUUgsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLDBCQUNiO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEsOEJBQVFELElBQUksQ0FBQ0UsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBS0ksOERBQUMsdURBQUQ7QUFBUSxrQkFBTSxFQUFFRixJQUFJLENBQUNHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFNSTtBQUFBLHNCQUFJSCxJQUFJLENBQUNJO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JO0FBQUEsc0JBQUlKLElBQUksQ0FBQ0s7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBUUk7QUFBRyxnQkFBSSxFQUFDLGdEQUFSO0FBQXlELHFCQUFTLEVBQUMsUUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUEsU0FBOEJMLElBQUksQ0FBQ00sR0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBakIsQ0FQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDs7R0E3Q3VCYjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IExpbmsgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdkxpbmsnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBDb2xvcnMgZnJvbSAnLi4vY29tcG9uZW50cy9Db2xvcnMnXHJcbmltcG9ydCBEZXRhaWxzVGh1bWIgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhaWxzVGh1bWInO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvZmlyc3RFZGl0aW9uLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4ICgpIHtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IFJlYWN0LnVzZVN0YXRlKFt7XHJcbiAgICAgICAgXCJfaWRcIjogXCIxXCIsXHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlllYXJib29rXCIsXHJcbiAgICAgICAgXCJzcmNcIjogWydmaXJzdEVkaXRpb24uanBnJ10sXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdldCB5b3VyIGxpbWl0ZWQgeWVhcmJvb2tzXCIsXHJcbiAgICAgICAgXCJjb250ZW50XCI6IFwiVGhlIEluZGV4IGlzIFVNYXNzIEFtaGVyc3TigJlzIHN0dWRlbnQtcHVibGlzaGVkIHllYXJib29rLCBhbmQgdGhlIG9sZGVzdCB5ZWFyYm9vayBpbiBOZXcgRW5nbGFuZCwgaGF2aW5nIG9yaWdpbmFsbHkgYmVlbiBwdWJsaXNoZWQgaW4gMTg3MC4gIEl0IGNocm9uaWNsZXMgYW55dGhpbmcgYW5kIGV2ZXJ5dGhpbmcgYWJvdXQgVU1hc3MgdW5kZXJncmFkdWF0ZSBzdHVkZW50IGxpZmUsIGluY2x1ZGluZyBtZW1vcmllcywgY3VycmVudCBldmVudHMsIGNsdWJzLCBhZ2VuY2llcywgYXRobGV0aWNzLCBzdHVkZW50IHdvcmtzIG9mIGFydCwgYW5kIGxvdHMgb2YgcGljdHVyZXMuICBGb3Igc2VuaW9ycywgdGhlIHllYXJib29rIGFsc28gaW5jbHVkZXMgdGhlIGdyYWR1YXRpbmcgY2xhc3MsIG9yZGVyZWQgYnkgYWNhZGVtaWMgY29sbGVnZSwgYW5kIHNpZ25hdHVyZSBwYWdlcy4gIEluIHRoZSAyMDIxLTIwMjIgYWNhZGVtaWMgeWVhciwgdGhlIEluZGV4IGlzIHJlc3VtaW5nIHB1YmxpY2F0aW9uIGFmdGVyIGEgMTYteWVhciBoaWF0dXMhICBcXG5cIiArXHJcbiAgICAgICAgICAgIFwiXFxuXCIsXHJcbiAgICAgICAgXCJwcmljZVwiOiA5Ljk5LFxyXG4gICAgICAgIFwiY29sb3JzXCI6W10sXHJcbiAgICAgICAgXCJjb3VudFwiOiAxXHJcbiAgICB9XSlcclxuXHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1iZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKGl0ZW0gPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCIga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnLWltZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2l0ZW0ucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JzIGNvbG9ycz17aXRlbS5jb2xvcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RpbW90aHluZ3V5ZW4uZ2l0aHViLmlvL1RpbW90aHlOZ3V5ZW4vXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+QWRkIHRvIENhcnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJMaW5rIiwiQnV0dG9uIiwiTmF2YmFyIiwiQ29sb3JzIiwiRGV0YWlsc1RodW1iIiwibG9nbyIsIkluZGV4IiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaW5kZXgiLCJzZXRJbmRleCIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsInByaWNlIiwiY29sb3JzIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==