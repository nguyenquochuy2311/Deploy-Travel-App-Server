"use strict";

var _express = _interopRequireDefault(require("express"));

var _countryController = _interopRequireDefault(require("../controllers/API/countryController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router(); // Create


router.post('/', passport.authenticate('jwt', {
  session: false
}), _countryController["default"].create); // Get List

router.get('/', _countryController["default"].findAll); // Get One

router.get('/:id', _countryController["default"].findOne); // Update

router.put('/:id', passport.authenticate('jwt', {
  session: false
}), _countryController["default"].update); // Delete

router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), _countryController["default"].destroy);
module.exports = router;