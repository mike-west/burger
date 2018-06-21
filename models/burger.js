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
  update: function (id, burger, devoured, cb) {
    orm.update(id, burger, devoured, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;