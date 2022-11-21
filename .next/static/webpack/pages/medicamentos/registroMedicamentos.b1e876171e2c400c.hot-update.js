"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/medicamentos/registroMedicamentos",{

/***/ "./components/MedicamentosForm.js":
/*!****************************************!*\
  !*** ./components/MedicamentosForm.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MedicamentosForm\": function() { return /* binding */ MedicamentosForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction MedicamentosForm() {\n    _s();\n    const [medicamentos, setMedicamentos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        cod_medicamento: \"\",\n        formato: \"\",\n        descripcion: \"\",\n        stock: 0\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"Creating default\");\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/medicamentos\", {\n            cod_medicamento: \"1234\",\n            formato: \"pastillas\",\n            descripcion: \"es un numero en pastillas\",\n            stock: \"200\"\n        });\n        console.log(res);\n    };\n    const handleChange = (param)=>{\n        let { target: { name , value  }  } = param;\n        console.log(name, value);\n        setMedicamentos({\n            ...medicamentos,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"registrarMedi\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"col-6\",\n                        name: \"cod_medicamento\",\n                        id: \"cod_medicamento\",\n                        placeholder: \"Ingrese Codigo de Medicamento\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"col-6\",\n                        name: \"formato\",\n                        placeholder: \"Ingrese Formato\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"col-6\",\n                        name: \"descripcion\",\n                        placeholder: \"Ingrese Descripcion\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"col-6\",\n                        id: \"stock\",\n                        name: \"stock\",\n                        placeholder: \"Ingrese Stock\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"botonMr\",\n                    children: \"Guardar Medicamento\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(MedicamentosForm, \"KZfyvHweCnVGcvRV1mdkbBlDhYA=\");\n_c = MedicamentosForm;\nvar _c;\n$RefreshReg$(_c, \"MedicamentosForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGljYW1lbnRvc0Zvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ087QUFFMUIsU0FBU0UsbUJBQW1COztJQUcvQixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSCwrQ0FBUUEsQ0FBQztRQUM3Q0ksaUJBQWlCO1FBQ2pCQyxTQUFTO1FBQ1RDLGFBQWE7UUFDYkMsT0FBTztJQUNYO0lBSUEsTUFBTUMsZUFBZSxPQUFPQyxJQUFNO1FBRTlCQSxFQUFFQyxjQUFjO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxNQUFNLE1BQU1kLGtEQUFVLENBQUMscUJBQXFCO1lBQzlDSyxpQkFBaUI7WUFDakJDLFNBQVM7WUFDVEMsYUFBYTtZQUNiQyxPQUFPO1FBQ1g7UUFDQUksUUFBUUMsR0FBRyxDQUFDQztJQUNoQjtJQUVBLE1BQU1FLGVBQWUsU0FBNEI7WUFBM0IsRUFBQ0MsUUFBUyxFQUFDQyxLQUFJLEVBQUNDLE1BQUssRUFBQyxHQUFDO1FBQ3pDUCxRQUFRQyxHQUFHLENBQUNLLE1BQU1DO1FBQ2xCZixnQkFBZ0I7WUFBQyxHQUFHRCxZQUFZO1lBQUUsQ0FBQ2UsS0FBSyxFQUFHQztRQUFLO0lBQ3BEO0lBSUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBRVgsNEVBQUNDO1lBQUtDLFVBQVVkOzs4QkFFWiw4REFBQ1c7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNHO3dCQUFNQyxNQUFLO3dCQUFPSixXQUFVO3dCQUFRSCxNQUFLO3dCQUFrQlEsSUFBRzt3QkFBa0JDLGFBQVk7d0JBQWdDQyxVQUFVWjs7Ozs7Ozs7Ozs7OEJBRzNJLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0c7d0JBQU1DLE1BQUs7d0JBQU9KLFdBQVU7d0JBQVFILE1BQUs7d0JBQVVTLGFBQVk7d0JBQWtCQyxVQUFVWjs7Ozs7Ozs7Ozs7OEJBR2hHLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ1E7d0JBQVNSLFdBQVU7d0JBQVFILE1BQUs7d0JBQWNTLGFBQVk7d0JBQXNCQyxVQUFVWjs7Ozs7Ozs7Ozs7OEJBRy9GLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0c7d0JBQU1DLE1BQUs7d0JBQU9KLFdBQVU7d0JBQVFLLElBQUc7d0JBQVFSLE1BQUs7d0JBQVNTLGFBQVk7d0JBQWdCQyxVQUFVWjs7Ozs7Ozs7Ozs7OEJBR3hHLDhEQUFDYztvQkFBT1QsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUMsQ0FBQztHQTNEZW5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVkaWNhbWVudG9zRm9ybS5qcz84MWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lZGljYW1lbnRvc0Zvcm0oKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IFttZWRpY2FtZW50b3MsIHNldE1lZGljYW1lbnRvc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY29kX21lZGljYW1lbnRvOiBcIlwiLFxyXG4gICAgICAgIGZvcm1hdG86IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246IFwiXCIsXHJcbiAgICAgICAgc3RvY2s6IDBcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBkZWZhdWx0XCIpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbWVkaWNhbWVudG9zJywge1xyXG4gICAgICAgICAgICBjb2RfbWVkaWNhbWVudG86ICcxMjM0JyxcclxuICAgICAgICAgICAgZm9ybWF0bzogJ3Bhc3RpbGxhcycsXHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uOiAnZXMgdW4gbnVtZXJvIGVuIHBhc3RpbGxhcycsXHJcbiAgICAgICAgICAgIHN0b2NrOiAnMjAwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHt0YXJnZXQgOiB7bmFtZSx2YWx1ZX19KT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSlcclxuICAgICAgICBzZXRNZWRpY2FtZW50b3Moey4uLm1lZGljYW1lbnRvcywgW25hbWVdIDogdmFsdWV9KTtcclxuICAgIH1cclxuXHJcblxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0cmFyTWVkaVwiPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm1NXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29sLTZcIiBuYW1lPVwiY29kX21lZGljYW1lbnRvXCIgaWQ9XCJjb2RfbWVkaWNhbWVudG9cIiBwbGFjZWhvbGRlcj1cIkluZ3Jlc2UgQ29kaWdvIGRlIE1lZGljYW1lbnRvXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybU1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb2wtNlwiIG5hbWU9XCJmb3JtYXRvXCIgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIEZvcm1hdG9cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm1NXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImNvbC02XCIgbmFtZT1cImRlc2NyaXBjaW9uXCIgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIERlc2NyaXBjaW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbC02XCIgaWQ9XCJzdG9ja1wiIG5hbWU9XCJzdG9ja1wiICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2UgU3RvY2tcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3Rvbk1yXCI+R3VhcmRhciBNZWRpY2FtZW50bzwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiTWVkaWNhbWVudG9zRm9ybSIsIm1lZGljYW1lbnRvcyIsInNldE1lZGljYW1lbnRvcyIsImNvZF9tZWRpY2FtZW50byIsImZvcm1hdG8iLCJkZXNjcmlwY2lvbiIsInN0b2NrIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcyIsInBvc3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MedicamentosForm.js\n"));

/***/ })

});