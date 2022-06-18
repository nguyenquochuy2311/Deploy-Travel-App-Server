"use strict";

var _express = _interopRequireDefault(require("express"));

var _paymentController = _interopRequireDefault(require("../controllers/API/paymentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router(); // Create


router.post('/', passport.authenticate('jwt', {
  session: false
}), _paymentController["default"].create); // Get List

router.get('/', passport.authenticate('jwt', {
  session: false
}), _paymentController["default"].findAll); // Get One

router.get('/:id', passport.authenticate('jwt', {
  session: false
}), _paymentController["default"].findOne); // Update

router.put('/:id', passport.authenticate('jwt', {
  session: false
}), _paymentController["default"].update); // Delete

router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), _paymentController["default"].destroy);
module.exports = router;