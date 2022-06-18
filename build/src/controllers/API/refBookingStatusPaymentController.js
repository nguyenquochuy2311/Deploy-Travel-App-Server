"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var StatusPayment = require('../../models').RefBookingStatusPayment;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'status_payment_add').then(function (rolePerm) {
    if (!req.body.status) {
      res.status(400).send({
        message: "Please pass status payment"
      });
    } else {
      StatusPayment.create({
        status: req.body.status
      }).then(function (status) {
        res.status(201).send(status);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var findAll = function findAll(req, res) {
  helper.checkPermission(req.user.role_id, 'status_payment_get_all').then(function (rolePerm) {
    StatusPayment.findAll().then(function (status) {
      res.status(201).send(status);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'status_payment_get').then(function (rolePerm) {
    StatusPayment.findByPk(req.params.id).then(function (status) {
      if (!status) {
        res.status(404).send({
          message: "Status Payment not found"
        });
      } else {
        res.status(200).send(status);
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'status_payment_update').then(function (rolePerm) {
    StatusPayment.findByPk(req.params.id).then(function (status) {
      if (!status) {
        return res.status(404).send({
          message: "Status Payment not found"
        });
      }

      StatusPayment.update({
        status: req.body.status ? req.body.status : status.status
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (_) {
        res.status(200).send({
          message: "Status Payment updated"
        });
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var destroy = function destroy(req, res) {
  helper.checkPermission(req.user.role_id, 'status_payment_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Status Payment ID.'
      });
    } else {
      StatusPayment.findByPk(req.params.id).then(function (status) {
        if (status) {
          StatusPayment.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Status Payment deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Status Payment not found'
          });
        }
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

module.exports = {
  create: create,
  findAll: findAll,
  findOne: findOne,
  update: update,
  destroy: destroy
};