"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/medicamentos/[cod_medicamento]",{

/***/ "./pages/medicamentos/[cod_medicamento].js":
/*!*************************************************!*\
  !*** ./pages/medicamentos/[cod_medicamento].js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction VistaMedicamento(param) {\n    let { medicamento  } = param;\n    const router = next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter;\n    const handleDelete = async (cod_medicamento)=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"/api/medicamentos/\" + cod_medicamento);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/medicamentos/homeMedicamentos\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cuadradoGeneral\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"imagenMedi\",\n                        src: \"https://img.freepik.com/vector-premium/caja-blanca-blister-pastillas_124507-5113.jpg?w=2000\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"vistaMedCod\",\n                        children: [\n                            \"Cod: \",\n                            medicamento.cod_medicamento\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"vistaMedFor\",\n                        children: [\n                            \"Formato:\",\n                            medicamento.formato\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cuadradoDescripcion\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Desc:\",\n                                medicamento.descripcion\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"vistaMedSto\",\n                        children: [\n                            \"Stock:\",\n                            medicamento.stock\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"elimMed\",\n                        onClick: ()=>handleDelete(medicamento.cod_medicamento),\n                        children: \"ELIMINAR\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"editMed\",\n                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/medicamentos/editar/\" + medicamento.cod_medicamento),\n                        children: \"EDITAR\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\[cod_medicamento].js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_c = VistaMedicamento;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VistaMedicamento);\nvar _c;\n$RefreshReg$(_c, \"VistaMedicamento\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZWRpY2FtZW50b3MvW2NvZF9tZWRpY2FtZW50b10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTZDO0FBQ25CO0FBQ2M7QUFDUDtBQUdqQyxTQUFTSSxpQkFBaUIsS0FBZSxFQUFFO1FBQWpCLEVBQUVDLFlBQVcsRUFBRSxHQUFmO0lBRXRCLE1BQU1DLFNBQVNKLGtEQUFTQTtJQUV4QixNQUFNSyxlQUFlLE9BQU9DLGtCQUFvQjtRQUM1QyxNQUFNQyxNQUFNLE1BQU1SLHVEQUFZLENBQUMsdUJBQXVCTztRQUN0REwsdURBQVcsQ0FBQztJQUNoQjtJQUdBLHFCQUNJLDhEQUFDUzs7MEJBQ0csOERBQUNaLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNZO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7d0JBQWFFLEtBQUk7Ozs7OztrQ0FDaEMsOERBQUNDO3dCQUFHSCxXQUFVOzs0QkFBYzs0QkFBTVIsWUFBWUcsZUFBZTs7Ozs7OztrQ0FDN0QsOERBQUNTO3dCQUFHSixXQUFVOzs0QkFBYzs0QkFBU1IsWUFBWWEsT0FBTzs7Ozs7OztrQ0FDeEQsOERBQUNOO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDTTs7Z0NBQUU7Z0NBQU1kLFlBQVllLFdBQVc7Ozs7Ozs7Ozs7OztrQ0FFcEMsOERBQUNIO3dCQUFHSixXQUFVOzs0QkFBYzs0QkFBT1IsWUFBWWdCLEtBQUs7Ozs7Ozs7a0NBRXBELDhEQUFDQzt3QkFBT1QsV0FBVTt3QkFBVVUsU0FBUyxJQUFNaEIsYUFBYUYsWUFBWUcsZUFBZTtrQ0FBRzs7Ozs7O2tDQUN0Riw4REFBQ2M7d0JBQU9ULFdBQVU7d0JBQVVVLFNBQVMsSUFBTXBCLHVEQUFXLENBQUMsMEJBQTBCRSxZQUFZRyxlQUFlO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0g7S0E1QlNKOztBQTRDVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21lZGljYW1lbnRvcy9bY29kX21lZGljYW1lbnRvXS5qcz9jM2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFZpc3RhTWVkaWNhbWVudG8oeyBtZWRpY2FtZW50byB9KSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChjb2RfbWVkaWNhbWVudG8pID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoJy9hcGkvbWVkaWNhbWVudG9zLycgKyBjb2RfbWVkaWNhbWVudG8pXHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbWVkaWNhbWVudG9zL2hvbWVNZWRpY2FtZW50b3NcIilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGF5b3V0IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VhZHJhZG9HZW5lcmFsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlbk1lZGlcIiBzcmM9XCJodHRwczovL2ltZy5mcmVlcGlrLmNvbS92ZWN0b3ItcHJlbWl1bS9jYWphLWJsYW5jYS1ibGlzdGVyLXBhc3RpbGxhc18xMjQ1MDctNTExMy5qcGc/dz0yMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN0YU1lZENvZFwiPkNvZDoge21lZGljYW1lbnRvLmNvZF9tZWRpY2FtZW50b308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZpc3RhTWVkRm9yXCI+Rm9ybWF0bzp7bWVkaWNhbWVudG8uZm9ybWF0b308L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWFkcmFkb0Rlc2NyaXBjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RGVzYzp7bWVkaWNhbWVudG8uZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmlzdGFNZWRTdG9cIj5TdG9jazp7bWVkaWNhbWVudG8uc3RvY2t9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVsaW1NZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUobWVkaWNhbWVudG8uY29kX21lZGljYW1lbnRvKX0+RUxJTUlOQVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZWRpdE1lZFwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL21lZGljYW1lbnRvcy9lZGl0YXIvXCIgKyBtZWRpY2FtZW50by5jb2RfbWVkaWNhbWVudG8pfT5FRElUQVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IG1lZGljYW1lbnRvIH0gPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21lZGljYW1lbnRvcy9cIiArIGNvbnRleHQucXVlcnkuY29kX21lZGljYW1lbnRvKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVkaWNhbWVudG8sXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlzdGFNZWRpY2FtZW50bzsiXSwibmFtZXMiOlsiTGF5b3V0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSb3V0ZXIiLCJWaXN0YU1lZGljYW1lbnRvIiwibWVkaWNhbWVudG8iLCJyb3V0ZXIiLCJoYW5kbGVEZWxldGUiLCJjb2RfbWVkaWNhbWVudG8iLCJyZXMiLCJkZWxldGUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDEiLCJoNCIsImZvcm1hdG8iLCJwIiwiZGVzY3JpcGNpb24iLCJzdG9jayIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/medicamentos/[cod_medicamento].js\n"));

/***/ })

});