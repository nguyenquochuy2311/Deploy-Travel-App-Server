"use strict";

var _express = _interopRequireDefault(require("express"));

var _refBookingOutcomeController = _interopRequireDefault(require("../controllers/API/refBookingOutcomeController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router(); // Create


router.post('/', passport.authenticate('jwt', {
  session: false
}), _refBookingOutcomeController["default"].create); // Get List

router.get('/', passport.authenticate('jwt', {
  session: false
}), _refBookingOutcomeController["default"].findAll); // Get One

router.get('/:id', passport.authenticate('jwt', {
  session: false
}), _refBookingOutcomeController["default"].findOne); // Update

router.put('/:id', passport.authenticate('jwt', {
  session: false
}), _refBookingOutcomeController["default"].update); // Delete

router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), _refBookingOutcomeController["default"].destroy);
module.exports = router;