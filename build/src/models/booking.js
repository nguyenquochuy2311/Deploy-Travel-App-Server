'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _require = require('sequelize'),
    Model = _require.Model;

module.exports = function (sequelize, DataTypes) {
  var Booking = /*#__PURE__*/function (_Model) {
    _inherits(Booking, _Model);

    var _super = _createSuper(Booking);

    function Booking() {
      _classCallCheck(this, Booking);

      return _super.apply(this, arguments);
    }

    _createClass(Booking, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        Booking.belongsTo(models.User, {
          foreignKey: 'user_id',
          as: 'user'
        });
        Booking.belongsTo(models.TravelAgency, {
          foreignKey: 'travel_agency_id',
          as: 'travel_agency'
        });
        Booking.belongsTo(models.RefBookingOutcome, {
          foreignKey: 'outcome_id',
          as: 'outcome'
        });
        Booking.belongsTo(models.RefBookingStatusPayment, {
          foreignKey: 'status_payment_id',
          as: 'payment_status'
        });
        Booking.hasMany(models.Payment, {
          foreignKey: 'booking_id',
          as: 'payments'
        });
      }
    }]);

    return Booking;
  }(Model);

  Booking.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    travel_agency_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outcome_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    booking_details: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Booking'
  });
  return Booking;
};