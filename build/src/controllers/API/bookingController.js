"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _helper = _interopRequireDefault(require("../../utils/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var helper = new _helper["default"]();

var passport = require('passport');

require('../../middleware/passport')(passport);

var Booking = require('../../models').Booking;

var User = require('../../models').User;

var TravelAgency = require('../../models').TravelAgency;

var Outcome = require('../../models').RefBookingOutcome;

var StatusPayment = require('../../models').RefBookingStatusPayment;

var Service = require('../../models').Service;

var ServiceBooking = require('../../models').ServiceBooking;

var create = function create(req, res) {
  helper.checkPermission(req.user.role_id, 'booking_add').then(function (rolePerm) {
    if (!req.body.service_id || !req.body.start_date || !req.body.end_date) {
      return res.status(400).send({
        message: "Please pass service_id, start_date, end_date"
      });
    } else {
      Service.findByPk(req.body.service_id).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(service) {
          var user_id, currentUser;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (service) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", res.status(404).send({
                    message: "Service not found"
                  }));

                case 2:
                  user_id = req.user.id;

                  if (!(req.user.role_id === 1)) {
                    _context2.next = 12;
                    break;
                  }

                  if (req.body.user_id) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return", res.status(400).send({
                    message: "Please pass user_id"
                  }));

                case 6:
                  _context2.next = 8;
                  return User.findOne({
                    where: {
                      id: req.body.user_id,
                      role_id: 2
                    }
                  });

                case 8:
                  currentUser = _context2.sent;

                  if (currentUser) {
                    _context2.next = 11;
                    break;
                  }

                  return _context2.abrupt("return", res.status(404).send({
                    message: "User not found"
                  }));

                case 11:
                  user_id = currentUser.dataValues.id;

                case 12:
                  Booking.create({
                    user_id: user_id,
                    travel_agency_id: 1,
                    outcome_id: 1,
                    status_payment_id: 1,
                    booking_details: req.body.detail
                  }).then( /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(booking) {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              ServiceBooking.create({
                                service_id: req.body.service_id,
                                booking_id: booking.id,
                                booking_start_date: req.body.start_date,
                                booking_end_date: req.body.end_date,
                                other_details: req.body.detail
                              }).then(function (serviceBooking) {
                                res.status(200).send({
                                  message: "Created Booking success"
                                });
                              })["catch"](function (error) {
                                res.status(400).send(error);
                              });

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }())["catch"](function (error) {
                    res.status(400).send(error);
                  });

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (error) {
        res.status(400).send(error);
      });
    }
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var findAll = function findAll(req, res) {
  helper.checkPermission(req.user.role_id, 'booking_get_all').then(function (rolePerm) {
    Booking.findAll({
      attributes: {
        exclude: ['user_id', 'travel_agency_id', 'outcome_id', 'status_payment_id']
      },
      include: [{
        model: User,
        as: 'user'
      }, {
        model: TravelAgency,
        as: 'travel_agency'
      }, {
        model: Outcome,
        as: 'outcome'
      }, {
        model: StatusPayment,
        as: 'payment_status'
      }]
    }).then(function (bookings) {
      return res.status(200).send(bookings);
    })["catch"](function (error) {
      console.log(error);
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var findOne = function findOne(req, res) {
  helper.checkPermission(req.user.role_id, 'booking_get').then(function (rolePerm) {
    Booking.findOne({
      where: {
        id: req.params.id
      },
      attributes: {
        exclude: ['user_id', 'travel_agency_id', 'outcome_id', 'status_payment_id']
      },
      include: [{
        model: User,
        as: 'user'
      }, {
        model: TravelAgency,
        as: 'travel_agency'
      }, {
        model: Outcome,
        as: 'outcome'
      }, {
        model: StatusPayment,
        as: 'payment_status'
      }]
    }).then(function (booking) {
      return res.status(200).send(booking);
    })["catch"](function (error) {
      console.log(error);
      res.status(400).send(error);
    });
  })["catch"](function (error) {
    res.status(403).send(error);
  });
};

var update = function update(req, res) {
  helper.checkPermission(req.user.role_id, 'booking_update').then( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(rolePerm) {
      var currentBooking, agency_id;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Booking.findByPk(req.params.id);

            case 2:
              currentBooking = _context3.sent;

              if (!currentBooking) {
                res.status(404).send({
                  message: "Booking not found"
                });
              } else {
                if (req.user.role_id === 2 && currentBooking.dataValues.outcome_id !== 2) {
                  res.status(400).send({
                    message: "Update fail"
                  });
                } else {
                  agency_id = req.body.agency_id ? req.body.agency_id : currentBooking.dataValues.travel_agency_id;
                  TravelAgency.findByPk(agency_id).then(function (agency) {
                    var outcome_id = req.body.outcome_id ? req.body.outcome_id : currentBooking.dataValues.outcome_id;
                    Outcome.findByPk(outcome_id).then(function (outcome) {
                      var status_payment_id = req.body.status_payment_id ? req.body.status_payment_id : currentBooking.dataValues.status_payment_id;
                      StatusPayment.findByPk(status_payment_id).then(function (statusPayment) {
                        Booking.update({
                          travel_agency_id: agency.id,
                          outcome_id: outcome.id,
                          status_payment_id: statusPayment.id,
                          booking_details: req.body.detail ? req.body.detail : currentBooking.dataValues.booking_details
                        }, {
                          where: {
                            id: req.params.id
                          }
                        }).then(function (_) {
                          res.status(200).send({
                            message: "Updated success"
                          });
                        })["catch"](function (error) {
                          res.status(400).send(error);
                        });
                      });
                    })["catch"](function (error) {
                      res.status(400).send(error);
                    });
                  })["catch"](function (error) {
                    res.status(400).send(error);
                  });
                }
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }())["catch"](function (error) {
    res.status(403).send(error);
  });
};

var cancel = function cancel(req, res) {};

module.exports = {
  create: create,
  findAll: findAll,
  findOne: findOne,
  update: update,
  cancel: cancel
};