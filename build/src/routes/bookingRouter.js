"use strict";

var _express = _interopRequireDefault(require("express"));

var _bookingController = _interopRequireDefault(require("../controllers/API/bookingController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router(); // Create


router.post('/', passport.authenticate('jwt', {
  session: false
}), _bookingController["default"].create); // Find All

router.get('/', passport.authenticate('jwt', {
  session: false
}), _bookingController["default"].findAll); // Find One

router.get('/:id', passport.authenticate('jwt', {
  session: false
}), _bookingController["default"].findOne); // Update

router.put('/:id', passport.authenticate('jwt', {
  session: false
}), _bookingController["default"].update);
module.exports = router;