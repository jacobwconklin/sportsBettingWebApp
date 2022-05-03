const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
        username: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {type: String},
        role: {type:String, required: true},
        trades: {type: Number, required: true, default: 0},
        earnings: {type: Number, required: true, default: 0},
        wins: {type: Number, required: true, default: 0},
        wagered: {type: Number, required: true, default: 0},
        available: {type: Number, required: true, default: 100000}
    });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
