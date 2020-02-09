const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get('/', (req, res) => {
    burger.all("burgers", (result) => {
        res.render("index", { burgers: result });
    })
});

router.post('/', (req, res) => {
    const { burgerName } = req.body;
    burger.insertOne("burgers", ["burger_name", "devoured"], [burgerName, false], (result) => {
        res.json({ burgerName: result });
    })
});

router.put('/:id', (req, res) => {
    const condition = "id = " + req.params.id;

    const columnChanges = {
        devoured: true
    }
    burger.updateOne("burgers", columnChanges, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end(); 
    })
})

module.exports = router;