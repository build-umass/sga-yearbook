"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Source+Sans+Pro:300,400,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".app {\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 100px auto;\\n  -webkit-box-shadow: 0 0 5px #ccc;\\n          box-shadow: 0 0 5px #ccc;\\n}\\n\\n.navbar {\\n  padding: 20px;\\n}\\n\\n.navbar-brand,\\n.nav-link {\\n  font-family: \\\"Minion Pro\\\", sans-serif;\\n  color: white !important;\\n}\\n\\n.navbar-brand {\\n  font-weight: 700;\\n}\\n\\n.nav-link {\\n  margin-left: 8px;\\n  margin-right: 8px;\\n  font-weight: 700;\\n}\\n.nav-link:hover {\\n  text-decoration: underline;\\n}\\n\\n.details {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: space-evenly;\\n     -moz-box-pack: space-evenly;\\n          justify-content: space-evenly;\\n  -webkit-flex-wrap: wrap;\\n          flex-wrap: wrap;\\n  padding: 30px 0;\\n  position: relative;\\n}\\n\\n.details .big-img {\\n  margin-top: 40px;\\n  margin-bottom: 50px;\\n  max-width: 600px;\\n  min-width: 290px;\\n  max-height: 550px;\\n  overflow: hidden;\\n  -webkit-filter: drop-shadow(8px 8px 10px #353535);\\n          filter: drop-shadow(8px 8px 10px #353535);\\n}\\n\\n.big-img img {\\n  width: 100%;\\n  height: 100%;\\n  max-height: 550px;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  object-fit: cover;\\n}\\n\\n.details .box {\\n  max-width: 500px;\\n  min-width: 290px;\\n  height: 66.5vh;\\n  margin: 25px;\\n}\\n\\n.box .row {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n     -moz-box-pack: justify;\\n          justify-content: space-between;\\n  margin-bottom: 15px;\\n}\\n\\n.box .row h2 {\\n  text-transform: uppercase;\\n  letter-spacing: 2px;\\n}\\n\\n.box .row span {\\n  color: crimson;\\n}\\n\\n.box .colors button {\\n  width: 30px;\\n  height: 30px;\\n  border: 1px solid #333;\\n  outline: none;\\n  margin-right: 5px;\\n  cursor: pointer;\\n}\\n\\n.box p {\\n  line-height: 1.5;\\n}\\n\\n.thumb {\\n  width: 100%;\\n  height: 100px;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  cursor: pointer;\\n}\\n\\n.thumb img {\\n  width: 90px;\\n  height: 100%;\\n  display: block;\\n  object-fit: cover;\\n  border: 1px solid #ddd;\\n  margin-right: 5px;\\n  opacity: 0.7;\\n  border-radius: 5px;\\n}\\n\\n.thumb img.active {\\n  opacity: 1;\\n  border: 1px solid lightseagreen;\\n}\\n\\n.box .cart {\\n  background: #333;\\n  color: white;\\n  outline: none;\\n  border: none;\\n  cursor: pointer;\\n  padding: 10px 25px;\\n}\\n\\n.about-bg {\\n  background-size: cover;\\n  background-position: 50% 70%;\\n}\\n\\n.bg-gradient {\\n  background: -webkit-gradient(linear, left top, right top, from(#a30000), to(#f44708));\\n  background: -webkit-linear-gradient(left, #a30000, #f44708);\\n  background: linear-gradient(to right, #a30000, #f44708);\\n}\\n\\n.bg-gradient-transparent {\\n  background: #881c1c;\\n}\\n\\n.copyright {\\n  font-size: 14px;\\n  font-family: \\\"Minion Pro\\\", sans-serif;\\n  font-weight: 400;\\n  color: rgba(255, 255, 255, 0.7) !important;\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\n.bg-image {\\n  opacity: 0.95;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  -webkit-filter: brightness(50%) sepia(40%) grayscale(30%) saturate(150%);\\n          filter: brightness(50%) sepia(40%) grayscale(30%) saturate(150%);\\n}\\n\\n.content {\\n  position: relative;\\n  z-index: 1;\\n}\\n\\n.about .outer img {\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  right: 0;\\n  bottom: 0;\\n  object-fit: cover;\\n  object-position: center;\\n}\\n\\n.main-text {\\n  color: #ccc;\\n}\\n\\n.footer-wrapper {\\n  position: relative;\\n  bottom: 0;\\n  display: block;\\n  width: 100%;\\n  z-index: -100;\\n}\\n\\n.content-wrap {\\n  padding-bottom: 10em;\\n}\\n\\n.footer {\\n  background-color: #881c1c;\\n  color: white;\\n  position: relative;\\n}\\n.footer .nav-link {\\n  font-size: 14px;\\n  font-family: \\\"Minion Pro\\\", sans-serif;\\n  font-weight: 400;\\n  color: rgba(255, 255, 255, 0.7) !important;\\n  margin: 0px;\\n  padding: 0px;\\n  text-decoration: none !important;\\n}\\n.footer .nav-link .footer-heading {\\n  color: white !important;\\n  font-size: 16px;\\n  font-weight: 700;\\n}\\n\\n.history-box {\\n  position: relative;\\n  top: 50px;\\n  left: 50px;\\n}\\n\\n@media only screen and (min-width: 640px) {\\n  .footer-col {\\n    display: -webkit-flex;\\n    display: -moz-box;\\n    display: flex;\\n    -webkit-align-items: center;\\n       -moz-box-align: center;\\n            align-items: center;\\n    -webkit-justify-content: center;\\n       -moz-box-pack: center;\\n            justify-content: center;\\n    text-align: center;\\n    margin-bottom: 10px;\\n  }\\n}\\n@media only screen and (min-width: 1024px) {\\n  .thumb {\\n    height: 50px;\\n  }\\n\\n  .thumb img {\\n    width: 50px;\\n  }\\n}\\n.icon {\\n  color: white;\\n  margin: 10px;\\n}\\n\\n.padding3 {\\n  padding-top: 2.5em;\\n  padding-bottom: 2em;\\n}\\n\\n.pg-heading {\\n  color: white;\\n}\\n\\n.margin-bottom2 {\\n  margin-bottom: 5px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.scss\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Source+Sans+Pro:300,400,700&display=swap\\\");\\n\\n$primary-font: \\\"Minion Pro\\\", sans-serif;\\n$secondary-font: \\\"Sans Serif\\\", sans-serif;\\n$primary-color:  #881c1c;\\n$primary-color-darker: #a30000;\\n$base-color: #000000;\\n$red-gradient: linear-gradient(to right, #a30000, #f44708);\\n$red-gradient-transparent: #881c1c;\\n\\n.app{\\n    max-width: 1200px;\\n    width: 100%;\\n    margin: 100px auto;\\n    box-shadow: 0 0 5px #ccc;\\n}\\n\\n.navbar {\\n    padding: 20px;\\n}\\n\\n.navbar-brand,\\n.nav-link {\\n    font-family: $primary-font;\\n    color: white !important;\\n}\\n\\n.navbar-brand {\\n    font-weight: 700;\\n}\\n\\n.nav-link {\\n    margin-left: 8px;\\n    margin-right: 8px;\\n    font-weight: 700;\\n    &:hover {\\n         text-decoration: underline;\\n    }\\n}\\n\\n\\n.details{\\n    display: flex;\\n    justify-content: space-evenly;\\n    flex-wrap: wrap;\\n    padding: 30px 0;\\n    position: relative;\\n}\\n\\n.details .big-img{\\n    margin-top: 40px;\\n    margin-bottom: 50px;\\n    max-width: 600px;\\n    min-width: 290px;\\n    max-height: 550px;\\n    overflow: hidden;\\n    filter: drop-shadow(8px 8px 10px rgb(53, 53, 53));\\n}\\n\\n\\n.big-img img{\\n    width: 100%;\\n    height: 100%;\\n    max-height: 550px;\\n    display: flex;\\n    object-fit: cover;\\n}\\n\\n.details .box{\\n    max-width: 500px;\\n    min-width: 290px;\\n    height: 66.5vh;\\n    margin: 25px; //25px\\n}\\n.box .row{\\n    display: flex;\\n    justify-content: space-between;\\n    margin-bottom: 15px;\\n}\\n.box .row h2{\\n    text-transform: uppercase;\\n    letter-spacing: 2px;\\n}\\n.box .row span{\\n    color: crimson;\\n}\\n\\n.box .colors button{\\n    width: 30px;\\n    height: 30px;\\n    border: 1px solid #333;\\n    outline: none;\\n    margin-right: 5px;\\n    cursor: pointer;\\n}\\n\\n.box p{\\n    line-height: 1.5;\\n    // margin: 15px 0;\\n}\\n.thumb{\\n    width: 100%;\\n    height: 100px;\\n    display: flex;\\n    cursor: pointer;\\n    // margin: 10px 0;\\n}\\n.thumb img{\\n    width: 90px;\\n    height: 100%;\\n    display: block;\\n    object-fit: cover;\\n    border: 1px solid #ddd;\\n    margin-right: 5px;\\n    opacity: 0.7;\\n    border-radius: 5px;\\n}\\n\\n.thumb img.active{\\n    opacity: 1;\\n    border: 1px solid lightseagreen;\\n}\\n.box .cart{\\n    background: #333;\\n    color: white;\\n    outline: none;\\n    border: none;\\n    cursor: pointer;\\n    padding: 10px 25px;\\n    // margin-top: 15px;\\n}\\n\\n.about-bg {\\n    background-size: cover;\\n    background-position: 50% 70%;\\n}\\n\\n.bg-gradient {\\n    background: $red-gradient;\\n}\\n\\n.bg-gradient-transparent {\\n    background: $red-gradient-transparent;\\n}\\n\\n.copyright {\\n\\tfont-size: 14px;\\n\\tfont-family: $primary-font;\\n\\tfont-weight: 400;\\n\\tcolor: rgba($color: white, $alpha: 0.7) !important;\\n\\tmargin: 0px;\\n\\tpadding: 0px;\\n}\\n\\n.bg-image {\\n    // background-color: rgb(68, 46, 46);\\n    opacity: 0.95;\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: cover;\\n    width: 100%;\\n    height: 100%;\\n    position: fixed;\\n    filter: brightness(50%) sepia(40%) grayscale(30%) saturate(150%)\\n}\\n\\n.content {\\n  position: relative;\\n  z-index: 1;\\n}\\n\\n.about\\n\\n.outer img {\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  right: 0;\\n  bottom: 0;\\n  object-fit: cover;\\n  object-position: center;\\n}\\n\\n.main-text {\\n    color: #ccc\\n}\\n\\n // might be useless\\n.footer-wrapper {\\n    position:relative;\\n    bottom:0;\\n    display:block;\\n    width:100%;\\n    z-index: -100;\\n}\\n\\n.content-wrap {\\n    padding-bottom: 10em;\\n}\\n\\n.footer {\\n\\tbackground-color: $primary-color;\\n\\tcolor: white;\\n    position: relative;\\n\\n\\t.nav-link {\\n\\t\\tfont-size: 14px;\\n\\t\\tfont-family: $primary-font;\\n\\t\\tfont-weight: 400;\\n\\t\\tcolor: rgba($color: white, $alpha: 0.7) !important;\\n\\t\\tmargin: 0px;\\n\\t\\tpadding: 0px;\\n\\t\\ttext-decoration: none !important;\\n\\n        .footer-heading {\\n            color: rgba($color: white, $alpha: 1) !important;\\n            font-size: 16px;\\n            font-weight: 700;\\n            // margin-bottom: 8px;\\n        }\\n    }\\n}\\n\\n.history-box {\\n    position: relative;\\n    top: 50px;\\n    left: 50px;\\n\\n}\\n\\n\\n\\n@media only screen and (min-width: 640px) {\\n\\t.footer-col {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      text-align: center;\\n\\n      margin-bottom: 10px;\\n    }\\n}\\n\\n@media only screen and (min-width: 1024px){\\n    .thumb{\\n        height: 50px;\\n    }\\n    .thumb img{\\n        width: 50px;\\n    }\\n}\\n\\n.icon {\\n    color: white;\\n\\tmargin: 10px;\\n    \\n}\\n\\n.padding3 {\\n\\tpadding-top: 2.5em;\\n\\tpadding-bottom: 2em;\\n}\\n\\n.pg-heading {\\n\\tcolor: white;\\n}\\n\\n.margin-bottom2 {\\n\\tmargin-bottom: 5px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL3N0eWxlcy9zdHlsZXMuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pELCtKQUErSjtBQUMvSjtBQUNBLGdEQUFnRCxzQkFBc0IsZ0JBQWdCLHVCQUF1QixxQ0FBcUMscUNBQXFDLEdBQUcsYUFBYSxrQkFBa0IsR0FBRywrQkFBK0IsNENBQTRDLDRCQUE0QixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxlQUFlLHFCQUFxQixzQkFBc0IscUJBQXFCLEdBQUcsbUJBQW1CLCtCQUErQixHQUFHLGNBQWMsMEJBQTBCLHNCQUFzQixrQkFBa0IsMENBQTBDLG1DQUFtQywwQ0FBMEMsNEJBQTRCLDRCQUE0QixvQkFBb0IsdUJBQXVCLEdBQUcsdUJBQXVCLHFCQUFxQix3QkFBd0IscUJBQXFCLHFCQUFxQixzQkFBc0IscUJBQXFCLHNEQUFzRCxzREFBc0QsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixzQkFBc0IsMEJBQTBCLHNCQUFzQixrQkFBa0Isc0JBQXNCLEdBQUcsbUJBQW1CLHFCQUFxQixxQkFBcUIsbUJBQW1CLGlCQUFpQixHQUFHLGVBQWUs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Q0FBZ0MsMkJBQTJCLDhCQUE4QixPQUFPLEdBQUcsK0NBQStDLGFBQWEsdUJBQXVCLE9BQU8saUJBQWlCLHNCQUFzQixPQUFPLEdBQUcsV0FBVyxtQkFBbUIsaUJBQWlCLFNBQVMsZUFBZSx1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDbm5YO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5zY3NzPzRiNWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNzAwfFNvdXJjZStTYW5zK1BybzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uYXZiYXItYnJhbmQsXFxuLm5hdi1saW5rIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWluaW9uIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5hdmJhci1icmFuZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgLW1vei1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXRhaWxzIC5iaWctaW1nIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIG1pbi13aWR0aDogMjkwcHg7XFxuICBtYXgtaGVpZ2h0OiA1NTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coOHB4IDhweCAxMHB4ICMzNTM1MzUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggMTBweCAjMzUzNTM1KTtcXG59XFxuXFxuLmJpZy1pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNTUwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmRldGFpbHMgLmJveCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiAyOTBweDtcXG4gIGhlaWdodDogNjYuNXZoO1xcbiAgbWFyZ2luOiAyNXB4O1xcbn1cXG5cXG4uYm94IC5yb3cge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uYm94IC5yb3cgaDIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5ib3ggLnJvdyBzcGFuIHtcXG4gIGNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4uYm94IC5jb2xvcnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJveCBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi50aHVtYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aHVtYiBpbWcge1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGh1bWIgaW1nLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLmJveCAuY2FydCB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG59XFxuXFxuLmFib3V0LWJnIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNzAlO1xcbn1cXG5cXG4uYmctZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI2EzMDAwMCksIHRvKCNmNDQ3MDgpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNhMzAwMDAsICNmNDQ3MDgpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTMwMDAwLCAjZjQ0NzA4KTtcXG59XFxuXFxuLmJnLWdyYWRpZW50LXRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQ6ICM4ODFjMWM7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNaW5pb24gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLmJnLWltYWdlIHtcXG4gIG9wYWNpdHk6IDAuOTU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoNTAlKSBzZXBpYSg0MCUpIGdyYXlzY2FsZSgzMCUpIHNhdHVyYXRlKDE1MCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKSBzZXBpYSg0MCUpIGdyYXlzY2FsZSgzMCUpIHNhdHVyYXRlKDE1MCUpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYWJvdXQgLm91dGVyIGltZyB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLXRleHQge1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5mb290ZXItd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTEwMDtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgxYzFjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZm9vdGVyIC5uYXYtbGluayB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIk1pbmlvbiBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5mb290ZXIgLm5hdi1saW5rIC5mb290ZXItaGVhZGluZyB7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5oaXN0b3J5LWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwcHg7XFxuICBsZWZ0OiA1MHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuZm9vdGVyLWNvbCB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIC50aHVtYiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIC50aHVtYiBpbWcge1xcbiAgICB3aWR0aDogNTBweDtcXG4gIH1cXG59XFxuLmljb24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucGFkZGluZzMge1xcbiAgcGFkZGluZy10b3A6IDIuNWVtO1xcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcXG59XFxuXFxuLnBnLWhlYWRpbmcge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFyZ2luLWJvdHRvbTIge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBVUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7QUFSSjs7QUFXQTs7RUFFSSxxQ0FyQlc7RUFzQlgsdUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVNJO0VBQ0ssMEJBQUE7QUFQVDs7QUFZQTtFQUNJLHFCQUFBO0VBQUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0EscUNBQUE7S0FBQSwyQkFBQTtVQUFBLDZCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVEo7O0FBWUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VB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b20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNzAwfFNvdXJjZStTYW5zK1BybzozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4kcHJpbWFyeS1mb250OiBcXFwiTWluaW9uIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuJHNlY29uZGFyeS1mb250OiBcXFwiU2FucyBTZXJpZlxcXCIsIHNhbnMtc2VyaWY7XFxuJHByaW1hcnktY29sb3I6ICAjODgxYzFjO1xcbiRwcmltYXJ5LWNvbG9yLWRhcmtlcjogI2EzMDAwMDtcXG4kYmFzZS1jb2xvcjogIzAwMDAwMDtcXG4kcmVkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhMzAwMDAsICNmNDQ3MDgpO1xcbiRyZWQtZ3JhZGllbnQtdHJhbnNwYXJlbnQ6ICM4ODFjMWM7XFxuXFxuLmFwcHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uYXZiYXItYnJhbmQsXFxuLm5hdi1saW5rIHtcXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2YmFyLWJyYW5kIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxufVxcblxcblxcbi5kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBwYWRkaW5nOiAzMHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRldGFpbHMgLmJpZy1pbWd7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1pbi13aWR0aDogMjkwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDhweCA4cHggMTBweCByZ2IoNTMsIDUzLCA1MykpO1xcbn1cXG5cXG5cXG4uYmlnLWltZyBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmRldGFpbHMgLmJveHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWluLXdpZHRoOiAyOTBweDtcXG4gICAgaGVpZ2h0OiA2Ni41dmg7XFxuICAgIG1hcmdpbjogMjVweDsgLy8yNXB4XFxufVxcbi5ib3ggLnJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uYm94IC5yb3cgaDJ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcbi5ib3ggLnJvdyBzcGFue1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLmJveCAuY29sb3JzIGJ1dHRvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJveCBwe1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAvLyBtYXJnaW46IDE1cHggMDtcXG59XFxuLnRodW1ie1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvLyBtYXJnaW46IDEwcHggMDtcXG59XFxuLnRodW1iIGltZ3tcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50aHVtYiBpbWcuYWN0aXZle1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbn1cXG4uYm94IC5jYXJ0e1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5hYm91dC1iZyB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA3MCU7XFxufVxcblxcbi5iZy1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQ6ICRyZWQtZ3JhZGllbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC10cmFuc3BhcmVudCB7XFxuICAgIGJhY2tncm91bmQ6ICRyZWQtZ3JhZGllbnQtdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGNvbG9yOiByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogMC43KSAhaW1wb3J0YW50O1xcblxcdG1hcmdpbjogMHB4O1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLmJnLWltYWdlIHtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCA0NiwgNDYpO1xcbiAgICBvcGFjaXR5OiAwLjk1O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSkgc2VwaWEoNDAlKSBncmF5c2NhbGUoMzAlKSBzYXR1cmF0ZSgxNTAlKVxcbn1cXG5cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYWJvdXRcXG5cXG4ub3V0ZXIgaW1nIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tdGV4dCB7XFxuICAgIGNvbG9yOiAjY2NjXFxufVxcblxcbiAvLyBtaWdodCBiZSB1c2VsZXNzXFxuLmZvb3Rlci13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGJvdHRvbTowO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OiAtMTAwO1xcbn1cXG5cXG4uY29udGVudC13cmFwIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwZW07XFxufVxcblxcbi5mb290ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdC5uYXYtbGluayB7XFxuXFx0XFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdFxcdGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0Y29sb3I6IHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjcpICFpbXBvcnRhbnQ7XFxuXFx0XFx0bWFyZ2luOiAwcHg7XFxuXFx0XFx0cGFkZGluZzogMHB4O1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcbiAgICAgICAgLmZvb3Rlci1oZWFkaW5nIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDEpICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5oaXN0b3J5LWJveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcblxcbn1cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFx0LmZvb3Rlci1jb2wge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XFxuICAgIC50aHVtYntcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbiAgICAudGh1bWIgaW1ne1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgIH1cXG59XFxuXFxuLmljb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLXRvcDogMi41ZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJlbTtcXG59XFxuXFxuLnBnLWhlYWRpbmcge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hcmdpbi1ib3R0b20yIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./styles/styles.scss\n");

/***/ })

});