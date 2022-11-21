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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MedicamentosForm\": function() { return /* binding */ MedicamentosForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction MedicamentosForm() {\n    _s();\n    const [medicamento, setMedicamento] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        cod_medicamento: \"\",\n        formato: \"\",\n        descripcion: \"\",\n        stock: \"\"\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/api/medicamentos\", {\n            medicamento\n        });\n        console.log(res);\n    };\n    const handleChange = (param)=>{\n        let { target: { name , value  }  } = param;\n        console.log(name, value);\n        setMedicamento({\n            ...medicamento,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"registrarMedi\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"col-6\",\n                        name: \"cod_medicamento\",\n                        id: \"cod_medicamento\",\n                        placeholder: \"Ingrese Codigo de Medicamento\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"col-6\",\n                        name: \"formato\",\n                        placeholder: \"Ingrese Formato\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"col-6\",\n                        name: \"descripcion\",\n                        placeholder: \"Ingrese Descripcion\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group formM\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"col-6\",\n                        id: \"stock\",\n                        name: \"stock\",\n                        placeholder: \"Ingrese Stock\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"botonMr\",\n                    children: \"Guardar Medicamento\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\components\\\\MedicamentosForm.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(MedicamentosForm, \"sQv0k+U1oruiQobDBqadwol2ovc=\");\n_c = MedicamentosForm;\nvar _c;\n$RefreshReg$(_c, \"MedicamentosForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lZGljYW1lbnRvc0Zvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ087QUFFMUIsU0FBU0UsbUJBQW1COztJQUcvQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gsK0NBQVFBLENBQUM7UUFDM0NJLGlCQUFpQjtRQUNqQkMsU0FBUztRQUNUQyxhQUFhO1FBQ2JDLE9BQU87SUFDWDtJQUlBLE1BQU1DLGVBQWUsT0FBT0MsSUFBTTtRQUU5QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxNQUFNLE1BQU1aLGtEQUFVLENBQUMscUJBQXFCO1lBQUVHO1FBQVk7UUFDaEVXLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDaEI7SUFFQSxNQUFNSSxlQUFlLFNBQWdDO1lBQS9CLEVBQUVDLFFBQVEsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBRTtRQUM3Q0wsUUFBUUMsR0FBRyxDQUFDRyxNQUFNQztRQUNsQmYsZUFBZTtZQUFFLEdBQUdELFdBQVc7WUFBRSxDQUFDZSxLQUFLLEVBQUVDO1FBQU07SUFDbkQ7SUFJQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFWCw0RUFBQ0M7WUFBS0MsVUFBVWQ7OzhCQUVaLDhEQUFDVztvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0c7d0JBQU1DLE1BQUs7d0JBQU9KLFdBQVU7d0JBQVFILE1BQUs7d0JBQWtCUSxJQUFHO3dCQUFrQkMsYUFBWTt3QkFBZ0NDLFVBQVVaOzs7Ozs7Ozs7Ozs4QkFHM0ksOERBQUNJO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRzt3QkFBTUMsTUFBSzt3QkFBT0osV0FBVTt3QkFBUUgsTUFBSzt3QkFBVVMsYUFBWTt3QkFBa0JDLFVBQVVaOzs7Ozs7Ozs7Ozs4QkFHaEcsOERBQUNJO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDUTt3QkFBU1IsV0FBVTt3QkFBUUgsTUFBSzt3QkFBY1MsYUFBWTt3QkFBc0JDLFVBQVVaOzs7Ozs7Ozs7Ozs4QkFHL0YsOERBQUNJO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRzt3QkFBTUMsTUFBSzt3QkFBT0osV0FBVTt3QkFBUUssSUFBRzt3QkFBUVIsTUFBSzt3QkFBUVMsYUFBWTt3QkFBZ0JDLFVBQVVaOzs7Ozs7Ozs7Ozs4QkFHdkcsOERBQUNjO29CQUFPVCxXQUFVOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU01QyxDQUFDO0dBckRlbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZWRpY2FtZW50b3NGb3JtLmpzPzgxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVkaWNhbWVudG9zRm9ybSgpIHtcclxuXHJcblxyXG4gICAgY29uc3QgW21lZGljYW1lbnRvLCBzZXRNZWRpY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY29kX21lZGljYW1lbnRvOiBcIlwiLFxyXG4gICAgICAgIGZvcm1hdG86IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcGNpb246IFwiXCIsXHJcbiAgICAgICAgc3RvY2s6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHsgXHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL21lZGljYW1lbnRvcycsIHsgbWVkaWNhbWVudG8gfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSB9KSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgc2V0TWVkaWNhbWVudG8oeyAuLi5tZWRpY2FtZW50bywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RyYXJNZWRpXCI+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybU1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb2wtNlwiIG5hbWU9XCJjb2RfbWVkaWNhbWVudG9cIiBpZD1cImNvZF9tZWRpY2FtZW50b1wiIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBDb2RpZ28gZGUgTWVkaWNhbWVudG9cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm1NXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29sLTZcIiBuYW1lPVwiZm9ybWF0b1wiIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBGb3JtYXRvXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJjb2wtNlwiIG5hbWU9XCJkZXNjcmlwY2lvblwiIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBEZXNjcmlwY2lvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybU1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb2wtNlwiIGlkPVwic3RvY2tcIiBuYW1lPVwic3RvY2tcIiBwbGFjZWhvbGRlcj1cIkluZ3Jlc2UgU3RvY2tcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3Rvbk1yXCI+R3VhcmRhciBNZWRpY2FtZW50bzwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwiTWVkaWNhbWVudG9zRm9ybSIsIm1lZGljYW1lbnRvIiwic2V0TWVkaWNhbWVudG8iLCJjb2RfbWVkaWNhbWVudG8iLCJmb3JtYXRvIiwiZGVzY3JpcGNpb24iLCJzdG9jayIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MedicamentosForm.js\n"));

/***/ })

});