"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var Car = require('../../models').Car;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'car_add').then(function (rolePerm) {
    if (!req.body.car_details || !req.body.car_price) {
      res.status(400).send({
        message: 'Please pass car details and car price.'
      });
    } else {
      Car.create({
        car_details: req.body.car_details,
        car_price: req.body.car_price
      }).then(function (cars) {
        return res.status(201).send(cars);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Update a "Table" by the id in the request


var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'car_update').then(function (rolePerm) {
    Car.findByPk(req.params.id).then(function (cars) {
      if (cars) {
        cars.update({
          car_details: req.body.car_details ? req.body.car_details : cars.car_details,
          car_price: req.body.car_price ? req.body.car_price : cars.car_price
        }, {
          where: {
            id: req.params.id
          }
        }).then(function (_) {
          res.status(200).send({
            message: 'Car updated'
          });
        })["catch"](function (err) {
          return res.status(400).send(err);
        });
      } else {
        res.status(400).send("Car not found");
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    }); // }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Delete a "Table" with the specified id in the request


var destroy = function destroy(req, res) {
  helper.checkPermission(req.user.role_id, 'car_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Car ID.'
      });
    } else {
      Car.findByPk(req.params.id).then(function (cars) {
        if (cars) {
          Car.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Car deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Car not found'
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
  helper.checkPermission(req.user.role_id, 'car_get_all').then(function (rolePerm) {
    Car.findAll().then(function (cars) {
      return res.status(200).send(cars);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Find a single "Table" with an id


var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'car_get').then(function (rolePerm) {
    Car.findByPk(req.params.id).then(function (cars) {
      if (!cars) {
        res.status(404).send({
          message: "Car not found"
        });
      } else {
        res.status(200).send(cars);
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