var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", data);
    });
});

router.post("/api", function (req, res) {
    burger.create(req.body.name, String(req.body.devoured), function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/:id", function (req, res) {
    // console.log(req);
    console.log(req.body);
    burger.update(req.body["id"], String(req.body["divoured"]),
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;