"use strict";

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var TravelAgency = require('../../models').TravelAgency;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'travel_agency_add').then(function (rolePerm) {
    if (!req.body.travel_agency_details) {
      res.status(400).send({
        message: 'Please pass travel agency details.'
      });
    } else {
      TravelAgency.create({
        travel_agency_details: req.body.travel_agency_details
      }).then(function (travelagencies) {
        return res.status(201).send(travelagencies);
      })["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Update a "Table" by the id in the request


var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'travel_agency_update').then(function (rolePerm) {
    TravelAgency.findByPk(req.params.id).then(function (travelagencies) {
      if (travelagencies) {
        travelagencies.update({
          travel_agency_details: req.body.travel_agency_details ? req.body.travel_agency_details : travelagencies.travel_agency_details
        }, {
          where: {
            id: req.params.id
          }
        }).then(function (_) {
          res.status(200).send({
            message: 'Travel Agency updated'
          });
        })["catch"](function (err) {
          return res.status(400).send(err);
        });
      } else {
        res.status(400).send("Travel Agency not found");
      }
    })["catch"](function (error) {
      res.status(400).send(error);
    }); // }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Delete a "Table" with the specified id in the request


var destroy = function destroy(req, res) {
  helper.checkPermission(req.user.role_id, 'travel_agency_delete').then(function (rolePerm) {
    if (!req.params.id) {
      res.status(400).send({
        msg: 'Please pass Travel Agency ID.'
      });
    } else {
      TravelAgency.findByPk(req.params.id).then(function (travelagencies) {
        if (travelagencies) {
          TravelAgency.destroy({
            where: {
              id: req.params.id
            }
          }).then(function (_) {
            res.status(200).send({
              message: 'Travel Agency deleted'
            });
          })["catch"](function (err) {
            return res.status(400).send(err);
          });
        } else {
          res.status(404).send({
            message: 'Travel Agency not found'
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
  helper.checkPermission(req.user.role_id, 'travel_agency_get_all').then(function (rolePerm) {
    TravelAgency.findAll().then(function (travelagencies) {
      return res.status(200).send(travelagencies);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
}; // Find a single "Table" with an id


var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'travel_agency_get').then(function (rolePerm) {
    TravelAgency.findByPk(req.params.id).then(function (travelagencies) {
      if (!travelagencies) {
        res.status(404).send({
          message: "Travel Agency not found"
        });
      } else {
        res.status(200).send(travelagencies);
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