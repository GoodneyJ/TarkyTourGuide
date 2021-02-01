const express = require('express');
const router = express.Router();
const Ammo = require('../models/ammo');

//Find all ammos
router.get('/', async (req, res) => {
    try {
        const ammotypes = await Ammo.find();
        res.json(ammotypes)
    } catch(err) {
        res.json({message: err})
    }
});

//Post ammo to DB
router.post('/', async (req, res) => {

    const ammo = new Ammo({
        title: req.body.title,
        type: req.body.type,
        damage:  req.body.damage,
        penetrationValue: req.body.penetrationValue,
        armorDamage: req.body.armorDamage,
        speed: req.body.speed,
        icon: req.body.icon,
        note: req.body.note
    })
    try {
      const savedAmmo = ammo.save(); 
      res.json(savedAmmo);
    } catch (err) {
        res.json({message: err})
    }
    
    
})


module.exports = router;