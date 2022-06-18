"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var Hotel = require('../../models').Hotel;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'hotel_add').then(function (rolePerm) {
    if (!req.body.hotel_details || !req.body.hotel_price) {
      res.status(400).send({
        message: 'Please pass hotel details and hotel price.'
      });
    } else {
      Hotel.create({
        hotel_details: req.body.hotel_details,
        hotel_price: req.body.hotel_price
      }).then(function (hotels) {
        return res.status(201).send(hotels);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Update a "Table" by the id in the request


var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'hotel_update').then(function (rolePerm) {
    Hotel.findByPk(req.params.id).then(function (hotels) {
      if (hotels) {
        hotels.update({
          hotel_details: req.body.hotel_details ? req.body.hotel_details : hotels.hotel_details,
          hotel_price: req.body.hotel_price ? req.body.hotel_price : hotels.hotel_price
        }, {
          where: {
            id: req.params.id
          }
        }).then(function (_) {
          res.status(200).send({
            message: 'Hotel updated'
          });
        })["catch"](function (err) {
          return res.status(400).send(err);
        });
      } else {
        res.status(400).send("Hotel not found");
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    }); // }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Delete a "Table" with the specified id in the request


var destroy = function destroy(req, res) {
  helper.checkPermission(req.user.role_id, 'hotel_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Hotel ID.'
      });
    } else {
      Hotel.findByPk(req.params.id).then(function (hotels) {
        if (hotels) {
          Hotel.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Hotel deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Hotel not found'
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
  helper.checkPermission(req.user.role_id, 'hotel_get_all').then(function (rolePerm) {
    Hotel.findAll().then(function (hotels) {
      return res.status(200).send(hotels);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Find a single "Table" with an id


var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'hotel_get').then(function (rolePerm) {
    Hotel.findByPk(req.params.id).then(function (hotels) {
      if (!hotels) {
        res.status(404).send({
          message: "Hotel not found"
        });
      } else {
        res.status(200).send(hotels);
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