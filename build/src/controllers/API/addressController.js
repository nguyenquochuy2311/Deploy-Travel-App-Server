"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var Country = require('../../models').Country;

var Address = require('../../models').Address;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'address_add').then(function (rolePerm) {
    if (!req.body.address_detail) {
      res.status(400).send({
        message: 'Please pass address detail.'
      });
    } else {
      Address.create({
        address_details: req.body.address_detail
      }).then(function (addresses) {
        return res.status(201).send(addresses);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Retrieve all "Table" from the database.


var findAll = function findAll(req, res) {
  helper.checkPermission(req.user.role_id, 'address_get_all').then(function (rolePerm) {
    Address.findAll({
      include: [{
        model: Country,
        as: 'country'
      }]
    }).then(function (addresses) {
      return res.status(200).send(addresses);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Find a single "Table" with an id


var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'address_get').then(function (rolePerm) {
    Address.findByPk(req.params.id).then(function (address) {
      if (!address) {
        res.status(404).send({
          message: "Address not found"
        });
      } else {
        res.status(200).send(address);
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Update a "Table" by the id in the request


var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'address_update').then(function (rolePerm) {
    Address.findByPk(req.params.id).then(function (address) {
      if (address) {
        Address.update({
          address_details: req.body.address_details ? req.body.address_details : address.address_details
        }, {
          where: {
            id: req.params.id
          }
        }).then(function (_) {
          res.status(200).send({
            message: 'Address updated'
          });
        })["catch"](function (err) {
          return res.status(400).send(err);
        });
      } else {
        res.status(400).send("Address not found");
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    }); // }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Delete a "Table" with the specified id in the request


var destroy = function destroy(req, res) {
  helper.checkPermission(req.user.role_id, 'address_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Address ID.'
      });
    } else {
      Address.findByPk(req.params.id).then(function (address) {
        if (address) {
          Address.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Address deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Address not found'
          });
        }
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Search by record of "Table" from the database.


module.exports = {
  create: create,
  findAll: findAll,
  findOne: findOne,
  update: update,
  destroy: destroy
};