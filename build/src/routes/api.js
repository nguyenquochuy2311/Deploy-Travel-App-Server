"use strict";

var _authRouter = _interopRequireDefault(require("./authRouter.js"));

var _usersRouter = _interopRequireDefault(require("./usersRouter.js"));

var _permissionsRouter = _interopRequireDefault(require("./permissionsRouter.js"));

var _addressesRouter = _interopRequireDefault(require("./addressesRouter.js"));

var _addressesDetailRouter = _interopRequireDefault(require("./addressesDetailRouter.js"));

var _countryRouter = _interopRequireDefault(require("./countryRouter.js"));

var _serviceRouter = _interopRequireDefault(require("./serviceRouter.js"));

var _refBookingOutComeRouter = _interopRequireDefault(require("./refBookingOutComeRouter.js"));

var _refBookingStatusPaymentRouter = _interopRequireDefault(require("./refBookingStatusPaymentRouter.js"));

var _bookingRouter = _interopRequireDefault(require("./bookingRouter.js"));

var _restaurantsRouter = _interopRequireDefault(require("./restaurantsRouter.js"));

var _airlinesRouter = _interopRequireDefault(require("./airlinesRouter.js"));

var _carsRouter = _interopRequireDefault(require("./carsRouter.js"));

var _hotelsRouter = _interopRequireDefault(require("./hotelsRouter.js"));

var _paymentsRouter = _interopRequireDefault(require("./paymentsRouter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = function apiRouter(app) {
  app.use('/api/v1/auth', _authRouter["default"]);
  app.use('/api/v1/users', _usersRouter["default"]);
  app.use('/api/v1/permissions', _permissionsRouter["default"]);
  app.use('/api/v1/addresses', _addressesRouter["default"]);
  app.use('/api/v1/addressesdetail', _addressesDetailRouter["default"]);
  app.use('/api/v1/country', _countryRouter["default"]);
  app.use('/api/v1/restaurants', _restaurantsRouter["default"]);
  app.use('/api/v1/airlines', _airlinesRouter["default"]);
  app.use('/api/v1/hotels', _hotelsRouter["default"]);
  app.use('/api/v1/cars', _carsRouter["default"]);
  app.use('/api/v1/services', _serviceRouter["default"]);
  app.use('/api/v1/outcome', _refBookingOutComeRouter["default"]);
  app.use('/api/v1/statuspayment', _refBookingStatusPaymentRouter["default"]);
  app.use('/api/v1/booking', _bookingRouter["default"]);
  app.use('/api/v1/payments', _paymentsRouter["default"]);
};

module.exports = apiRouter;