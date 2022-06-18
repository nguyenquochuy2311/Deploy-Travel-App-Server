"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var Restaurant = require('../../models').Restaurant;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'restaurant_add').then(function (rolePerm) {
    if (!req.body.restaurant_details) {
      res.status(400).send({
        message: 'Please pass Restaurant details.'
      });
    } else {
      Restaurant.create({
        restaurant_details: req.body.restaurant_details
      }).then(function (restaurants) {
        return res.status(201).send(restaurants);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Update a "Table" by the id in the request


var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'restaurant_update').then(function (rolePerm) {
    Restaurant.findByPk(req.params.id).then(function (restaurants) {
      if (restaurants) {
        restaurants.update({
          restaurant_details: req.body.restaurant_details ? req.body.restaurant_details : restaurants.restaurant_details
        }, {
          where: {
            id: req.params.id
          }
        }).then(function (_) {
          res.status(200).send({
            message: 'Restaurant updated'
          });
        })["catch"](function (err) {
          return res.status(400).send(err);
        });
      } else {
        res.status(400).send("Restaurant not found");
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    }); // }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Delete a "Table" with the specified id in the request


var destroy = function destroy(req, res) {
  helper.checkPermission(req.user.role_id, 'restaurant_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Restaurant ID.'
      });
    } else {
      Restaurant.findByPk(req.params.id).then(function (restaurants) {
        if (restaurants) {
          Restaurant.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Restaurant deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Restaurant not found'
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
  helper.checkPermission(req.user.role_id, 'restaurant_get_all').then(function (rolePerm) {
    Restaurant.findAll().then(function (restaurants) {
      return res.status(200).send(restaurants);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Find a single "Table" with an id


var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'restaurant_get').then(function (rolePerm) {
    Restaurant.findByPk(req.params.id).then(function (restaurants) {
      if (!restaurants) {
        res.status(404).send({
          message: "Restaurant not found"
        });
      } else {
        res.status(200).send(restaurants);
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