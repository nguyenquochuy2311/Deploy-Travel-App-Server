"use strict";

var _express = _interopRequireDefault(require("express"));

var _serviceController = _interopRequireDefault(require("../controllers/API/serviceController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var passport = require('passport');

require('../middleware/passport')(passport);

var router = _express["default"].Router();

router.post('/', passport.authenticate('jwt', {
  session: false
}), _serviceController["default"].create);
router.get('/', _serviceController["default"].findAll);
router.get('/:id', _serviceController["default"].findOne);
router.put('/:id', passport.authenticate('jwt', {
  session: false
}), _serviceController["default"].update);
router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), _serviceController["default"].destroy);
router.get('/search/:text', _serviceController["default"].search);
module.exports = router;