var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (burger, devoured, cb) {
    orm.create(burger, devoured, function (res) {
      cb(res);
    });
  },
  update: function (id, devoured, cb) {
    var devouredInt = (devoured === "true") ? 1 : 0;
    orm.update(id, devouredInt, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;