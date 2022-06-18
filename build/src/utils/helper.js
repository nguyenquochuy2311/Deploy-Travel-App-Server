"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var RolePermission = require('../models').RolePermission;

var Permission = require('../models').Permission;

var Helper = /*#__PURE__*/function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, [{
    key: "checkPermission",
    value: function checkPermission(roleId, permName) {
      return new Promise(function (resolve, reject) {
        Permission.findOne({
          where: {
            perm_name: permName
          }
        }).then(function (perm) {
          RolePermission.findOne({
            where: {
              role_id: roleId,
              perm_id: perm.id
            }
          }).then(function (rolePermission) {
            if (rolePermission) {
              resolve(rolePermission);
            } else {
              reject({
                message: 'Forbidden'
              });
            }
          })["catch"](function (error) {
            reject(error);
          });
        })["catch"](function () {
          reject({
            message: 'Forbidden'
          });
        });
      });
    }
  }]);

  return Helper;
}();

module.exports = Helper;