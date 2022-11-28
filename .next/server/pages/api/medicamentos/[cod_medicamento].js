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
exports.id = "pages/api/medicamentos/[cod_medicamento]";
exports.ids = ["pages/api/medicamentos/[cod_medicamento]"];
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

/***/ "(api)/./pages/api/medicamentos/[cod_medicamento].js":
/*!*****************************************************!*\
  !*** ./pages/api/medicamentos/[cod_medicamento].js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await obtenerMedicamento(req, res);\n        case \"DELETE\":\n            return await eliminarMedicamento(req, res);\n        case \"PUT\":\n            return await actualizarMedicamento(req, res);\n    }\n}\nconst obtenerMedicamento = async (req, res)=>{\n    const { cod_medicamento  } = req.query;\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM medicamento where cod_medicamento = ?\", [\n        cod_medicamento\n    ]);\n    return res.status(200).json(result[0]);\n};\nconst eliminarMedicamento = async (req, res)=>{\n    const { cod_medicamento  } = req.query;\n    const result = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"DELETE FROM medicamento where cod_medicamento = ?\", [\n        cod_medicamento\n    ]);\n    return res.status(204).json();\n};\nconst actualizarMedicamento = async (req, res)=>{\n    const { cod_medicamento  } = req.query;\n    await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"UPDATE medicamento SET ? WHERE cod_medicamento = ?\", [\n        req.body,\n        cod_medicamento\n    ]);\n    return res.status(204).json();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVkaWNhbWVudG9zL1tjb2RfbWVkaWNhbWVudG9dLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTVDLE9BQVFELElBQUlFLE1BQU07UUFFZCxLQUFLO1lBQ0QsT0FBTyxNQUFNQyxtQkFBbUJILEtBQUtDO1FBRXpDLEtBQUs7WUFDRCxPQUFPLE1BQU1HLG9CQUFvQkosS0FBS0M7UUFFMUMsS0FBSztZQUNELE9BQU8sTUFBTUksc0JBQXNCTCxLQUFJQztJQUUvQztBQUlKLENBQUM7QUFFRCxNQUFNRSxxQkFBcUIsT0FBT0gsS0FBS0MsTUFBUTtJQUMzQyxNQUFNLEVBQUVLLGdCQUFlLEVBQUUsR0FBR04sSUFBSU8sS0FBSztJQUVyQyxNQUFNLENBQUNDLE9BQU8sR0FBRyxNQUFNVixrREFBVSxDQUFDLHVEQUF1RDtRQUFDUTtLQUFnQjtJQUUxRyxPQUFPTCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRixNQUFNLENBQUMsRUFBRTtBQUN6QztBQUVBLE1BQU1KLHNCQUFzQixPQUFPSixLQUFLQyxNQUFRO0lBRTVDLE1BQU0sRUFBRUssZ0JBQWUsRUFBQyxHQUFHTixJQUFJTyxLQUFLO0lBRXBDLE1BQU1DLFNBQVMsTUFBTVYsa0RBQVUsQ0FBQyxxREFBcUQ7UUFBQ1E7S0FBZ0I7SUFFdEcsT0FBT0wsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUk7QUFDL0I7QUFFQSxNQUFNTCx3QkFBd0IsT0FBT0wsS0FBS0MsTUFBUTtJQUM5QyxNQUFNLEVBQUNLLGdCQUFlLEVBQUMsR0FBR04sSUFBSU8sS0FBSztJQUVuQyxNQUFNVCxrREFBVSxDQUFDLHNEQUFzRDtRQUFDRSxJQUFJVyxJQUFJO1FBQUVMO0tBQWdCO0lBRWxHLE9BQU9MLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tY2xpbmljYS8uL3BhZ2VzL2FwaS9tZWRpY2FtZW50b3MvW2NvZF9tZWRpY2FtZW50b10uanM/NzU4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIHN3aXRjaCAocmVxLm1ldGhvZClcclxuICAgIHtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgb2J0ZW5lck1lZGljYW1lbnRvKHJlcSwgcmVzKVxyXG5cclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZWxpbWluYXJNZWRpY2FtZW50byhyZXEsIHJlcylcclxuXHJcbiAgICAgICAgY2FzZSAnUFVUJzpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGFjdHVhbGl6YXJNZWRpY2FtZW50byhyZXEscmVzKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IG9idGVuZXJNZWRpY2FtZW50byA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBjb2RfbWVkaWNhbWVudG8gfSA9IHJlcS5xdWVyeVxyXG5cclxuICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIEZST00gbWVkaWNhbWVudG8gd2hlcmUgY29kX21lZGljYW1lbnRvID0gP1wiLCBbY29kX21lZGljYW1lbnRvXSlcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0WzBdKVxyXG59XHJcblxyXG5jb25zdCBlbGltaW5hck1lZGljYW1lbnRvID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBjb2RfbWVkaWNhbWVudG99ID0gcmVxLnF1ZXJ5XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoXCJERUxFVEUgRlJPTSBtZWRpY2FtZW50byB3aGVyZSBjb2RfbWVkaWNhbWVudG8gPSA/XCIsIFtjb2RfbWVkaWNhbWVudG9dKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbigpXHJcbn1cclxuXHJcbmNvbnN0IGFjdHVhbGl6YXJNZWRpY2FtZW50byA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2NvZF9tZWRpY2FtZW50b30gPSByZXEucXVlcnlcclxuXHJcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFwiVVBEQVRFIG1lZGljYW1lbnRvIFNFVCA/IFdIRVJFIGNvZF9tZWRpY2FtZW50byA9ID9cIiwgW3JlcS5ib2R5LCBjb2RfbWVkaWNhbWVudG9dKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbigpXHJcbn0iXSwibmFtZXMiOlsicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJvYnRlbmVyTWVkaWNhbWVudG8iLCJlbGltaW5hck1lZGljYW1lbnRvIiwiYWN0dWFsaXphck1lZGljYW1lbnRvIiwiY29kX21lZGljYW1lbnRvIiwicXVlcnkiLCJyZXN1bHQiLCJzdGF0dXMiLCJqc29uIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/medicamentos/[cod_medicamento].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/medicamentos/[cod_medicamento].js"));
module.exports = __webpack_exports__;

})();