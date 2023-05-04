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

/***/ "./components/Graph1.js":
/*!******************************!*\
  !*** ./components/Graph1.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import shootingCauses from  '../datas/graph1/shooting-causes.csv';\nconst Graph1 = ()=>{\n    _s();\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // d3.csv(\"../datas/graph1/shooting-causes.csv\", function(data) {\n    //   console.log(data[0]);\n    // });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        csv(\"../datas/graph1/shooting-causes.csv\").then((data)=>{\n            console.log(data);\n        });\n        const width = 1200;\n        const height = 800;\n        const svg = d3__WEBPACK_IMPORTED_MODULE_2__.select(svgRef.current).attr(\"width\", width).attr(\"height\", height);\n    // var line = d3.line()\n    //   .x(function(d) { return x(shootingCauses.Year); })\n    //   .y(function(d) {return y(+shootingCauses.); })\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"School Shooting by Type over Years\"\n            }, void 0, false, {\n                fileName: \"/workspaces/vistualizations-school-shooting/components/Graph1.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                id: \"graph\",\n                ref: svgRef\n            }, void 0, false, {\n                fileName: \"/workspaces/vistualizations-school-shooting/components/Graph1.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Graph1, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n_c = Graph1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph1);\nvar _c;\n$RefreshReg$(_c, \"Graph1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyYXBoMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUN4QjtBQUN6QixxRUFBcUU7QUFFckUsTUFBTUksU0FBUyxJQUFNOztJQUVuQixNQUFNQyxTQUFTSCw2Q0FBTUEsQ0FBQyxJQUFJO0lBRTFCLGlFQUFpRTtJQUNqRSwwQkFBMEI7SUFDMUIsTUFBTTtJQUVORCxnREFBU0EsQ0FBQyxJQUFNO1FBR2RLLElBQUksdUNBQXVDQyxJQUFJLENBQUNDLENBQUFBLE9BQU07WUFDcERDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtRQUVBLE1BQU1HLFFBQVE7UUFDZCxNQUFNQyxTQUFTO1FBRWYsTUFBTUMsTUFBTVYsc0NBQVMsQ0FBQ0UsT0FBT1UsT0FBTyxFQUNqQ0MsSUFBSSxDQUFDLFNBQVNMLE9BQ2RLLElBQUksQ0FBQyxVQUFVSjtJQUlsQix1QkFBdUI7SUFDdkIsdURBQXVEO0lBQ3ZELG1EQUFtRDtJQUVyRCxHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNLOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNKO2dCQUFJSyxJQUFHO2dCQUFRQyxLQUFLZDs7Ozs7Ozs7QUFHM0I7R0FwQ01EO0tBQUFBO0FBc0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JhcGgxLmpzP2JjNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuLy8gaW1wb3J0IHNob290aW5nQ2F1c2VzIGZyb20gICcuLi9kYXRhcy9ncmFwaDEvc2hvb3RpbmctY2F1c2VzLmNzdic7XG5cbmNvbnN0IEdyYXBoMSA9ICgpID0+IHtcblxuICBjb25zdCBzdmdSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gZDMuY3N2KFwiLi4vZGF0YXMvZ3JhcGgxL3Nob290aW5nLWNhdXNlcy5jc3ZcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGFbMF0pO1xuICAvLyB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG5cbiAgICBjc3YoJy4uL2RhdGFzL2dyYXBoMS9zaG9vdGluZy1jYXVzZXMuY3N2JykudGhlbihkYXRhPT57XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pO1xuXG4gICAgY29uc3Qgd2lkdGggPSAxMjAwO1xuICAgIGNvbnN0IGhlaWdodCA9IDgwMDtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChzdmdSZWYuY3VycmVudClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG5cblxuICBcbiAgICAvLyB2YXIgbGluZSA9IGQzLmxpbmUoKVxuICAgIC8vICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4geChzaG9vdGluZ0NhdXNlcy5ZZWFyKTsgfSlcbiAgICAvLyAgIC55KGZ1bmN0aW9uKGQpIHtyZXR1cm4geSgrc2hvb3RpbmdDYXVzZXMuKTsgfSlcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlNjaG9vbCBTaG9vdGluZyBieSBUeXBlIG92ZXIgWWVhcnM8L2gxPlxuICAgICAgPHN2ZyBpZD1cImdyYXBoXCIgcmVmPXtzdmdSZWZ9Pjwvc3ZnPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDE7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJkMyIsIkdyYXBoMSIsInN2Z1JlZiIsImNzdiIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwic2VsZWN0IiwiY3VycmVudCIsImF0dHIiLCJoMSIsImlkIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Graph1.js\n"));

/***/ })

});