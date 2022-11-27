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
exports.id = "pages/api/recetas";
exports.ids = ["pages/api/recetas"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool)({\n    host: \"localhost\",\n    user: \"root\",\n    port: 3306,\n    database: \"bdclinica\"\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLE9BQVFELDBEQUFVQSxDQUFDO0lBQ3JCRSxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0FBQ2Q7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0by1jbGluaWNhLy4vY29uZmlnL2RiLmpzP2I0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUG9vbCB9IGZyb20gXCJteXNxbDIvcHJvbWlzZVwiO1xyXG5cclxuY29uc3QgcG9vbCAgPSBjcmVhdGVQb29sKHtcclxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXHJcbiAgICB1c2VyOiBcInJvb3RcIixcclxuICAgIHBvcnQ6IDMzMDYsXHJcbiAgICBkYXRhYmFzZTogXCJiZGNsaW5pY2FcIlxyXG59KTtcclxuXHJcbmV4cG9ydCB7IHBvb2wgfTsiXSwibmFtZXMiOlsiY3JlYXRlUG9vbCIsInBvb2wiLCJob3N0IiwidXNlciIsInBvcnQiLCJkYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/recetas/index.js":
/*!************************************!*\
  !*** ./pages/api/recetas/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await obtenerReceta(req, res);\n        case \"POST\":\n            return await guardarReceta(req, res);\n    }\n}\nconst obtenerReceta = async (req, res)=>{\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM receta\");\n    return res.status(200).json(result);\n};\nconst guardarReceta = async (req, res)=>{\n    const { cod_receta , cantidad , rut_paciente , cod_medi , fecha  } = req.body;\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"INSERT INTO receta SET ? \", {\n        cod_receta,\n        cantidad,\n        rut_paciente,\n        cod_medi,\n        fecha\n    });\n    console.log(result);\n    return res.status(200).json({\n        cod_receta,\n        cantidad,\n        rut_paciente,\n        cod_medi,\n        fecha\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjZXRhcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUUxQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU1QyxPQUFRRCxJQUFJRSxNQUFNO1FBQ2QsS0FBSztZQUNELE9BQU8sTUFBTUMsY0FBY0gsS0FBS0M7UUFDcEMsS0FBSztZQUNELE9BQU8sTUFBTUcsY0FBY0osS0FBS0M7SUFDeEM7QUFFSixDQUFDO0FBR0QsTUFBTUUsZ0JBQWdCLE9BQU9ILEtBQUtDLE1BQVE7SUFDdEMsTUFBTSxDQUFDSSxPQUFPLEdBQUcsTUFBTVAsa0RBQVUsQ0FBQztJQUNsQyxPQUFPRyxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUNoQztBQUVBLE1BQU1ELGdCQUFnQixPQUFPSixLQUFLQyxNQUFRO0lBQ3RDLE1BQU0sRUFBRVEsV0FBVSxFQUFFQyxTQUFRLEVBQUVDLGFBQVksRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUUsR0FBR2IsSUFBSWMsSUFBSTtJQUV4RSxNQUFNLENBQUNULE9BQU8sR0FBRyxNQUFNUCxrREFBVSxDQUFDLDZCQUE2QjtRQUMzRFc7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7SUFDSjtJQUdBRSxRQUFRQyxHQUFHLENBQUNYO0lBQ1osT0FBT0osSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQztRQUFZQztRQUFVQztRQUFjQztRQUFVQztJQUFLO0FBQ3JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tY2xpbmljYS8uL3BhZ2VzL2FwaS9yZWNldGFzL2luZGV4LmpzP2I4OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvZGJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG9idGVuZXJSZWNldGEocmVxLCByZXMpXHJcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGd1YXJkYXJSZWNldGEocmVxLCByZXMpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY29uc3Qgb2J0ZW5lclJlY2V0YSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSByZWNldGFcIilcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpXHJcbn1cclxuXHJcbmNvbnN0IGd1YXJkYXJSZWNldGEgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgY29kX3JlY2V0YSwgY2FudGlkYWQsIHJ1dF9wYWNpZW50ZSwgY29kX21lZGksIGZlY2hhIH0gPSByZXEuYm9keVxyXG5cclxuICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgcG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHJlY2V0YSBTRVQgPyBcIiwge1xyXG4gICAgICAgIGNvZF9yZWNldGEsXHJcbiAgICAgICAgY2FudGlkYWQsXHJcbiAgICAgICAgcnV0X3BhY2llbnRlLFxyXG4gICAgICAgIGNvZF9tZWRpLFxyXG4gICAgICAgIGZlY2hhXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29kX3JlY2V0YSwgY2FudGlkYWQsIHJ1dF9wYWNpZW50ZSwgY29kX21lZGksIGZlY2hhfSk7XHJcbn0iXSwibmFtZXMiOlsicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJvYnRlbmVyUmVjZXRhIiwiZ3VhcmRhclJlY2V0YSIsInJlc3VsdCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImNvZF9yZWNldGEiLCJjYW50aWRhZCIsInJ1dF9wYWNpZW50ZSIsImNvZF9tZWRpIiwiZmVjaGEiLCJib2R5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/recetas/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/recetas/index.js"));
module.exports = __webpack_exports__;

})();