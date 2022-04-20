const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({


    user: { type: Schema.Types.ObjectId, ref: 'User' },
    game: {type: Schema.Types.ObjectId, ref: 'Game'},
    positions: {type: String},
    odds: {type: Number},
    wager: {type: Number},
    toWin: {type: Number},
    status: {type: String}
});

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Bet', schema);
