const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    sport: {type: Number},
    time: {type: Date},
    homeTeam: {type: String},
    homeSpread: {type: Number},
    homeSpreadLine: {type: Number},
    homeMoneyLine: {type: Number},
    awayTeam: {type: String},
    awaySpread: {type: Number},
    awaySpreadLine: {type: Number},
    awayMoneyLine: {type: Number},
    totalNumber: {type: Number},
    over: {type: Number},
    under: {type: Number},
});

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Bet', schema);
