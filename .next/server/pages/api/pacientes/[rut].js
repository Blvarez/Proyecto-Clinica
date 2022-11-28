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
exports.id = "pages/api/pacientes/[rut]";
exports.ids = ["pages/api/pacientes/[rut]"];
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

/***/ "(api)/./pages/api/pacientes/[rut].js":
/*!**************************************!*\
  !*** ./pages/api/pacientes/[rut].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await obtenerPaciente(req, res);\n        case \"DELETE\":\n            return await eliminarPaciente(req, res);\n        case \"PUT\":\n            return await actualizarPaciente(req, res);\n    }\n}\nconst obtenerPaciente = async (req, res)=>{\n    const { rut  } = req.query;\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM paciente where rut = ?\", [\n        rut\n    ]);\n    return res.status(200).json(result[0]);\n};\nconst eliminarPaciente = async (req, res)=>{\n    const { rut  } = req.query;\n    const result = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"DELETE FROM paciente where rut = ?\", [\n        rut\n    ]);\n    return res.status(204).json();\n};\nconst actualizarPaciente = async (req, res)=>{\n    const { rut  } = req.query;\n    await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"UPDATE paciente SET ? WHERE rut = ?\", [\n        req.body,\n        rut\n    ]);\n    return res.status(204).json();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFjaWVudGVzL1tydXRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTVDLE9BQVFELElBQUlFLE1BQU07UUFFZCxLQUFLO1lBQ0QsT0FBTyxNQUFNQyxnQkFBZ0JILEtBQUtDO1FBRXRDLEtBQUs7WUFDRCxPQUFPLE1BQU1HLGlCQUFpQkosS0FBS0M7UUFFdkMsS0FBSztZQUNELE9BQU8sTUFBTUksbUJBQW1CTCxLQUFJQztJQUU1QztBQUVKLENBQUM7QUFFRCxNQUFNRSxrQkFBa0IsT0FBT0gsS0FBS0MsTUFBUTtJQUV4QyxNQUFNLEVBQUVLLElBQUcsRUFBRSxHQUFHTixJQUFJTyxLQUFLO0lBRXpCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLE1BQU1WLGtEQUFVLENBQUMsd0NBQXdDO1FBQUNRO0tBQUk7SUFFL0UsT0FBT0wsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7QUFDekM7QUFHQSxNQUFNSixtQkFBbUIsT0FBT0osS0FBS0MsTUFBUTtJQUV6QyxNQUFNLEVBQUVLLElBQUcsRUFBQyxHQUFHTixJQUFJTyxLQUFLO0lBRXhCLE1BQU1DLFNBQVMsTUFBTVYsa0RBQVUsQ0FBQyxzQ0FBc0M7UUFBQ1E7S0FBSTtJQUUzRSxPQUFPTCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSTtBQUMvQjtBQUVBLE1BQU1MLHFCQUFxQixPQUFPTCxLQUFLQyxNQUFRO0lBQzNDLE1BQU0sRUFBQ0ssSUFBRyxFQUFDLEdBQUdOLElBQUlPLEtBQUs7SUFFdkIsTUFBTVQsa0RBQVUsQ0FBQyx1Q0FBdUM7UUFBQ0UsSUFBSVcsSUFBSTtRQUFFTDtLQUFJO0lBRXZFLE9BQU9MLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tY2xpbmljYS8uL3BhZ2VzL2FwaS9wYWNpZW50ZXMvW3J1dF0uanM/OTc4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIHN3aXRjaCAocmVxLm1ldGhvZClcclxuICAgIHtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgb2J0ZW5lclBhY2llbnRlKHJlcSwgcmVzKVxyXG5cclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZWxpbWluYXJQYWNpZW50ZShyZXEsIHJlcylcclxuXHJcbiAgICAgICAgY2FzZSAnUFVUJzpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGFjdHVhbGl6YXJQYWNpZW50ZShyZXEscmVzKVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IG9idGVuZXJQYWNpZW50ZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7IHJ1dCB9ID0gcmVxLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBwYWNpZW50ZSB3aGVyZSBydXQgPSA/XCIsIFtydXRdKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRbMF0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBlbGltaW5hclBhY2llbnRlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBydXR9ID0gcmVxLnF1ZXJ5XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoXCJERUxFVEUgRlJPTSBwYWNpZW50ZSB3aGVyZSBydXQgPSA/XCIsIFtydXRdKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbigpXHJcbn1cclxuXHJcbmNvbnN0IGFjdHVhbGl6YXJQYWNpZW50ZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qge3J1dH0gPSByZXEucXVlcnlcclxuXHJcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFwiVVBEQVRFIHBhY2llbnRlIFNFVCA/IFdIRVJFIHJ1dCA9ID9cIiwgW3JlcS5ib2R5LCBydXRdKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbigpXHJcbn0iXSwibmFtZXMiOlsicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJvYnRlbmVyUGFjaWVudGUiLCJlbGltaW5hclBhY2llbnRlIiwiYWN0dWFsaXphclBhY2llbnRlIiwicnV0IiwicXVlcnkiLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pacientes/[rut].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pacientes/[rut].js"));
module.exports = __webpack_exports__;

})();