"use strict";

var _express = _interopRequireDefault(require("express"));

var _refBookingStatusPaymentController = _interopRequireDefault(require("../controllers/API/refBookingStatusPaymentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router(); // Create


router.post('/', passport.authenticate('jwt', {
  session: false
}), _refBookingStatusPaymentController["default"].create); // Get List

router.get('/', passport.authenticate('jwt', {
  session: false
}), _refBookingStatusPaymentController["default"].findAll); // Get One

router.get('/:id', passport.authenticate('jwt', {
  session: false
}), _refBookingStatusPaymentController["default"].findOne); // Update

router.put('/:id', passport.authenticate('jwt', {
  session: false
}), _refBookingStatusPaymentController["default"].update); // Delete

router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), _refBookingStatusPaymentController["default"].destroy);
module.exports = router;