const express = require('express');
const router = express.Router();
const Keys = require('../models/keys');

//Find all keys
router.get('/', async (req, res) => {
    try {
        const findKeys = await Keys.find();
        res.json(findKeys)
    } catch(err) {
        res.json({message: err})
    }
});

//Post key to DB
router.post('/', async (req, res) => {
    const key = new Key({
        title: req.body.title,
        usage: req.body.type,
        maps: req.body.maps,
        durability: req.body.durability,
        questUse: req.body.questUse,
        questReward: req.body.questReward,
        spawns: req.body.spawns,
        icon: req.body.icon
    })
    try {
        const savedKeys = key.save();
        res.json(savedKeys);
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;