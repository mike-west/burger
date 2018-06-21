var connection = require("../config/connection.js");

var orm = {
    insertString: "INSERT INTO burgers (burger, devoured) VALUES (?, ?)",
    updateString: "UPDATE burgers SET burger = ?, devoured = ? where id = ?",

    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers;", function (err, data) {
            if (err) {
                throw err;
            }
            cb({data});
        });
    },
    create: function (burger, devoured, cb) {
        connection.query(this.insertString, [burger, devoured], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    updateOne: function (id, burger, devoured, cb) {
        connection.query(this.updateString, [burger, devoured, id], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    }
};

module.exports = orm;