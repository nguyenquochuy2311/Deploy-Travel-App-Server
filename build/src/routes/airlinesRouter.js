"use strict";

var _express = _interopRequireDefault(require("express"));

var _airlineController = _interopRequireDefault(require("../controllers/API/airlineController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router(); // Create


router.post('/', passport.authenticate('jwt', {
  session: false
}), _airlineController["default"].create); // Get List

router.get('/', passport.authenticate('jwt', {
  session: false
}), _airlineController["default"].findAll); // Get One

router.get('/:id', passport.authenticate('jwt', {
  session: false
}), _airlineController["default"].findOne); // Update

router.put('/:id', passport.authenticate('jwt', {
  session: false
}), _airlineController["default"].update); // Delete

router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), _airlineController["default"].destroy);
module.exports = router;