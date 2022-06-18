"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _viewEngine = _interopRequireDefault(require("./config/viewEngine.js"));

var _api = _interopRequireDefault(require("./routes/api.js"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//get param ?id=1 => get 1 
// import initWebRoutes from './routes/index.js';
// import logger from 'morgan';
require('dotenv').config();

var app = (0, _express["default"])();

var router = _express["default"].Router();

var corsOptions = {
  origin: "https://traveloger.herokuapp.com"
}; //config app

app.use((0, _cors["default"])(corsOptions));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public/uploads/image')));

var initWebRoutes = function initWebRoutes(app) {
  router.get("/", function (req, res) {
    res.send("<h1>Server Started</h1>");
  });
  return app.use("/", router);
};

initWebRoutes(app);
(0, _viewEngine["default"])(app);
(0, _api["default"])(app); // catch 404 and forward to error handler
// router.get('/notfound', function (req, res, next) {
//     next(createError(404));
// });
// error handler
// router.get('/error', function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     // res.status(err.status || 500);
//     // res.render('error');
//     res.json({
//         code: err.status || 500,
//         message: res.locals.error,
//         error: res.locals.error
//     })
// });

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server started: http://localhost:".concat(port));
});
module.exports = router;