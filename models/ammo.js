const mongoose = require('mongoose');

const AmmoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: String,
    damage: Number,
    penetrationValue: Number,
    armorDamage: Number,
    speed: Number,
    icon: String,
    note: String 
})

module.exports = mongoose.model('ammo', AmmoSchema, 'ammo');