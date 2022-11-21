"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/medicamentos/homeMedicamentos";
exports.ids = ["pages/medicamentos/homeMedicamentos"];
exports.modules = {

/***/ "./pages/medicamentos/homeMedicamentos.js":
/*!************************************************!*\
  !*** ./pages/medicamentos/homeMedicamentos.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst homeMedicamentos = ({ medicamentos  })=>{\n    console.log(medicamentos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Medicamentos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\homeMedicamentos.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, undefined),\n            medicamentos.map((medicamentos)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: medicamentos.cod_medicamento\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\homeMedicamentos.js\",\n                            lineNumber: 10,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: medicamentos.descripcion\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\homeMedicamentos.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: medicamentos.formato\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\homeMedicamentos.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: medicamentos.stock\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\homeMedicamentos.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, medicamentos.id, true, {\n                    fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\homeMedicamentos.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Branko Alvarez\\\\Desktop\\\\Todo\\\\Universidad\\\\2022\\\\Segundo Semestre\\\\Desarrollo Web y Movil\\\\Proyecto-Clinica\\\\pages\\\\medicamentos\\\\homeMedicamentos.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    const { data: medicamentos  } = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3000/api/medicamentos\");\n    return {\n        props: {\n            medicamentos\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeMedicamentos);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZWRpY2FtZW50b3MvaG9tZU1lZGljYW1lbnRvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQzFCLE1BQU1DLG1CQUFtQixDQUFDLEVBQUVDLGFBQVksRUFBRSxHQUFLO0lBQzNDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OztZQUVISixhQUFhSyxHQUFHLENBQUNMLENBQUFBLDZCQUNkLDhEQUFDRzs7c0NBQ0csOERBQUNDO3NDQUFJSixhQUFhTSxlQUFlOzs7Ozs7c0NBQ2pDLDhEQUFDQztzQ0FBR1AsYUFBYVEsV0FBVzs7Ozs7O3NDQUM1Qiw4REFBQ0M7c0NBQUlULGFBQWFVLE9BQU87Ozs7OztzQ0FDekIsOERBQUNEO3NDQUFJVCxhQUFhVyxLQUFLOzs7Ozs7O21CQUpqQlgsYUFBYVksRUFBRTs7Ozs7Ozs7Ozs7QUFVekM7QUFFTyxNQUFNQyxxQkFBcUIsT0FBT0MsVUFBWTtJQUNqRCxNQUFNLEVBQUVDLE1BQU1mLGFBQVksRUFBRSxHQUFHLE1BQU1GLGlEQUFTLENBQUM7SUFFL0MsT0FBTztRQUNIbUIsT0FBTztZQUNIakI7UUFDSjtJQUNKO0FBQ0osRUFBQztBQUVELGlFQUFlRCxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0by1jbGluaWNhLy4vcGFnZXMvbWVkaWNhbWVudG9zL2hvbWVNZWRpY2FtZW50b3MuanM/ZDRlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IGhvbWVNZWRpY2FtZW50b3MgPSAoeyBtZWRpY2FtZW50b3MgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWVkaWNhbWVudG9zKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+TWVkaWNhbWVudG9zPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHttZWRpY2FtZW50b3MubWFwKG1lZGljYW1lbnRvcyA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVkaWNhbWVudG9zLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e21lZGljYW1lbnRvcy5jb2RfbWVkaWNhbWVudG99PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWVkaWNhbWVudG9zLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+e21lZGljYW1lbnRvcy5mb3JtYXRvfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PnttZWRpY2FtZW50b3Muc3RvY2t9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBtZWRpY2FtZW50b3MgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbWVkaWNhbWVudG9zXCIpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWRpY2FtZW50b3MsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZU1lZGljYW1lbnRvcztcclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImhvbWVNZWRpY2FtZW50b3MiLCJtZWRpY2FtZW50b3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJtYXAiLCJjb2RfbWVkaWNhbWVudG8iLCJwIiwiZGVzY3JpcGNpb24iLCJoNCIsImZvcm1hdG8iLCJzdG9jayIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImRhdGEiLCJnZXQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/medicamentos/homeMedicamentos.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/medicamentos/homeMedicamentos.js"));
module.exports = __webpack_exports__;

})();