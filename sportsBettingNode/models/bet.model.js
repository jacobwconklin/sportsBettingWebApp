const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema({
    identifier: {type: String},
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

const schema = new Schema({


    user: { type: String },
    game: Game,
    betType: {type: String},
    betLine: {type: Number},
    odds: {type: Number},
    wager: {type: Number},
    toWin: {type: Number},
    status: {type: String}
});


Game.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Game', Game);
schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Bet', schema);
