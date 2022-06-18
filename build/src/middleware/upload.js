"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var util = require("util");

var multer = require("multer");

var maxSize = 2 * 1024 * 1024;
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, _path["default"].join(process.cwd(), 'src/public/uploads/image/'));
  },
  filename: function filename(req, file, cb) {
    // console.log(file.originalname);
    cb(null, "image-".concat(Date.now(), "-").concat(file.originalname)); // cb(null, file.originalname);
  }
}); // const multerFilter = (req, file, cb) => {
//     if (!file.originalname.match(/\.(png|jpg)$/)) {
//         // upload only png and jpg format
//         return cb(new Error('Please upload a Image type'));
//     }
//     cb(null, true);
// };

var uploadFile = multer({
  storage: storage,
  // fileFilter: multerFilter,
  limits: {
    fileSize: maxSize
  }
}).single("file");
var uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;