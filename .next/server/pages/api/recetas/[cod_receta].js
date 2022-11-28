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
exports.id = "pages/api/recetas/[cod_receta]";
exports.ids = ["pages/api/recetas/[cod_receta]"];
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

/***/ "(api)/./pages/api/recetas/[cod_receta].js":
/*!*******************************************!*\
  !*** ./pages/api/recetas/[cod_receta].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/db */ \"(api)/./config/db.js\");\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            return await obtenerReceta(req, res);\n        case \"DELETE\":\n            return await eliminarReceta(req, res);\n        case \"PUT\":\n            return await actualizarReceta(req, res);\n    }\n}\nconst obtenerReceta = async (req, res)=>{\n    const { cod_receta  } = req.query;\n    const [result] = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT * FROM receta where cod_receta = ?\", [\n        cod_receta\n    ]);\n    return res.status(200).json(result[0]);\n};\nconst eliminarReceta = async (req, res)=>{\n    const { cod_receta  } = req.query;\n    const result = await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"DELETE FROM receta where cod_receta = ?\", [\n        cod_receta\n    ]);\n    return res.status(204).json();\n};\nconst actualizarReceta = async (req, res)=>{\n    const { cod_receta  } = req.query;\n    await _config_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"UPDATE receta SET ? WHERE cod_receta = ?\", [\n        req.body,\n        cod_receta\n    ]);\n    return res.status(204).json();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjZXRhcy9bY29kX3JlY2V0YV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFM0IsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFHNUMsT0FBUUQsSUFBSUUsTUFBTTtRQUVkLEtBQUs7WUFDRCxPQUFPLE1BQU1DLGNBQWNILEtBQUtDO1FBRXBDLEtBQUs7WUFDRCxPQUFPLE1BQU1HLGVBQWVKLEtBQUtDO1FBRXJDLEtBQUs7WUFDRCxPQUFPLE1BQU1JLGlCQUFpQkwsS0FBSUM7SUFDMUM7QUFFSixDQUFDO0FBRUQsTUFBTUUsZ0JBQWdCLE9BQU9ILEtBQUtDLE1BQVE7SUFDdEMsTUFBTSxFQUFFSyxXQUFVLEVBQUUsR0FBR04sSUFBSU8sS0FBSztJQUVoQyxNQUFNLENBQUNDLE9BQU8sR0FBRyxNQUFNVixrREFBVSxDQUFDLDZDQUE2QztRQUFDUTtLQUFXO0lBRTNGLE9BQU9MLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNGLE1BQU0sQ0FBQyxFQUFFO0FBQ3pDO0FBRUEsTUFBTUosaUJBQWlCLE9BQU9KLEtBQUtDLE1BQVE7SUFFdkMsTUFBTSxFQUFFSyxXQUFVLEVBQUMsR0FBR04sSUFBSU8sS0FBSztJQUUvQixNQUFNQyxTQUFTLE1BQU1WLGtEQUFVLENBQUMsMkNBQTJDO1FBQUNRO0tBQVc7SUFFdkYsT0FBT0wsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUk7QUFDL0I7QUFFQSxNQUFNTCxtQkFBbUIsT0FBT0wsS0FBS0MsTUFBUTtJQUN6QyxNQUFNLEVBQUNLLFdBQVUsRUFBQyxHQUFHTixJQUFJTyxLQUFLO0lBRTlCLE1BQU1ULGtEQUFVLENBQUMsNENBQTRDO1FBQUNFLElBQUlXLElBQUk7UUFBRUw7S0FBVztJQUVuRixPQUFPTCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSTtBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvLWNsaW5pY2EvLi9wYWdlcy9hcGkvcmVjZXRhcy9bY29kX3JlY2V0YV0uanM/NWFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuXHJcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpXHJcbiAgICB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG9idGVuZXJSZWNldGEocmVxLCByZXMpXHJcblxyXG4gICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBlbGltaW5hclJlY2V0YShyZXEsIHJlcylcclxuXHJcbiAgICAgICAgY2FzZSAnUFVUJzpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGFjdHVhbGl6YXJSZWNldGEocmVxLHJlcylcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IG9idGVuZXJSZWNldGEgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgY29kX3JlY2V0YSB9ID0gcmVxLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSByZWNldGEgd2hlcmUgY29kX3JlY2V0YSA9ID9cIiwgW2NvZF9yZWNldGFdKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRbMF0pXHJcbn1cclxuXHJcbmNvbnN0IGVsaW1pbmFyUmVjZXRhID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBjb2RfcmVjZXRhfSA9IHJlcS5xdWVyeVxyXG4gICAgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KFwiREVMRVRFIEZST00gcmVjZXRhIHdoZXJlIGNvZF9yZWNldGEgPSA/XCIsIFtjb2RfcmVjZXRhXSlcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLmpzb24oKVxyXG59XHJcblxyXG5jb25zdCBhY3R1YWxpemFyUmVjZXRhID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7Y29kX3JlY2V0YX0gPSByZXEucXVlcnlcclxuXHJcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFwiVVBEQVRFIHJlY2V0YSBTRVQgPyBXSEVSRSBjb2RfcmVjZXRhID0gP1wiLCBbcmVxLmJvZHksIGNvZF9yZWNldGFdKVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbigpXHJcbn0iXSwibmFtZXMiOlsicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJvYnRlbmVyUmVjZXRhIiwiZWxpbWluYXJSZWNldGEiLCJhY3R1YWxpemFyUmVjZXRhIiwiY29kX3JlY2V0YSIsInF1ZXJ5IiwicmVzdWx0Iiwic3RhdHVzIiwianNvbiIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/recetas/[cod_receta].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/recetas/[cod_receta].js"));
module.exports = __webpack_exports__;

})();