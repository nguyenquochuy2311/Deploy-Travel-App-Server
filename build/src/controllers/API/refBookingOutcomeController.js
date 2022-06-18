"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var Outcome = require('../../models').RefBookingOutcome;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'outcome_add').then(function (rolePerm) {
    if (!req.body.outcome) {
      res.status(400).send({
        message: "Please pass outcome name"
      });
    } else {
      Outcome.create({
        outcome: req.body.outcome
      }).then(function (outcome) {
        res.status(201).send(outcome);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var findAll = function findAll(req, res) {
  helper.checkPermission(req.user.role_id, 'outcome_get_all').then(function (rolePerm) {
    Outcome.findAll().then(function (outcome) {
      res.status(201).send(outcome);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'outcome_get').then(function (rolePerm) {
    Outcome.findByPk(req.params.id).then(function (outcome) {
      if (!outcome) {
        res.status(404).send({
          message: "Booking Outcome not found"
        });
      } else {
        res.status(200).send(outcome);
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'outcome_update').then(function (rolePerm) {
    Outcome.findByPk(req.params.id).then(function (outcome) {
      if (!outcome) {
        return res.status(404).send({
          message: "Booking Outcome not found"
        });
      }

      Outcome.update({
        outcome: req.body.outcome ? req.body.outcome : outcome.outcome
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (_) {
        res.status(200).send({
          message: "Booking Outcome updated"
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
  helper.checkPermission(req.user.role_id, 'outcome_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Outcome ID.'
      });
    } else {
      Outcome.findByPk(req.params.id).then(function (outcome) {
        if (outcome) {
          Outcome.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Booking Outcome deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Booking Outcome not found'
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