"use strict";

var _express = _interopRequireDefault(require("express"));

var _authController = _interopRequireDefault(require("../controllers/API/authController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router();

router.post('/signup', _authController["default"].signup);
router.post('/signin', _authController["default"].signin);
router.post('/refreshToken', _authController["default"].refreshToken);
router["delete"]('/logout', _authController["default"].logout);
module.exports = router;