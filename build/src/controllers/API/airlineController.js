"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var Airline = require('../../models').Airline;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'airline_add').then(function (rolePerm) {
    if (!req.body.airline_details || !req.body.airline_price) {
      res.status(400).send({
        message: 'Please pass airline details and airline price.'
      });
    } else {
      Airline.create({
        airline_details: req.body.airline_details,
        airline_price: req.body.airline_price
      }).then(function (airlines) {
        return res.status(201).send(airlines);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Update a "Table" by the id in the request


var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'airline_update').then(function (rolePerm) {
    Airline.findByPk(req.params.id).then(function (airlines) {
      if (airlines) {
        airlines.update({
          airline_details: req.body.airline_details ? req.body.airline_details : airlines.airline_details,
          airline_price: req.body.airline_price ? req.body.airline_price : airlines.airline_price
        }, {
          where: {
            id: req.params.id
          }
        }).then(function (_) {
          res.status(200).send({
            message: 'Airline updated'
          });
        })["catch"](function (err) {
          return res.status(400).send(err);
        });
      } else {
        res.status(400).send("Airline not found");
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    }); // }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Delete a "Table" with the specified id in the request


var destroy = function destroy(req, res) {
  helper.checkPermission(req.user.role_id, 'airline_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Airline ID.'
      });
    } else {
      Airline.findByPk(req.params.id).then(function (airlines) {
        if (airlines) {
          Airline.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Airline deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Airline not found'
          });
        }
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Retrieve all "Table" from the database.


var findAll = function findAll(req, res) {
  helper.checkPermission(req.user.role_id, 'airline_get_all').then(function (rolePerm) {
    Airline.findAll().then(function (airlines) {
      return res.status(200).send(airlines);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Find a single "Table" with an id


var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'airline_get').then(function (rolePerm) {
    Airline.findByPk(req.params.id).then(function (airlines) {
      if (!airlines) {
        res.status(404).send({
          message: "Airline not found"
        });
      } else {
        res.status(200).send(airlines);
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

module.exports = {
  create: create,
  update: update,
  destroy: destroy,
  findAll: findAll,
  findOne: findOne
};