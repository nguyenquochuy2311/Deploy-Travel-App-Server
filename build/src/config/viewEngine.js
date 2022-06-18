"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var configViewEngine = function configViewEngine(app) {
  app.use(_express["default"]["static"]("./src/public")); // get image/file on server

  app.set("view engine", "ejs"); //ejs = blade (PHP) = jsp (JAVA)

  app.set("views", "./src/views"); //contain html files
};

module.exports = configViewEngine;