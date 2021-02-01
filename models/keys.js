const mongoose = require('mongoose');

const KeySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    usage: String,
    maps: String,
    durability: String,
    questUse: String,
    questReward: String,
    spawns: String,
    icon: String
})

module.exports = mongoose.model('keys', KeySchema, 'keys');