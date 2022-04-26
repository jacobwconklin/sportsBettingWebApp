const db = require('../_helpers/database');
const Bet = db.Bet;
const User = db.User;


module.exports = {
    addBet,
    getBetsOfUser,
    postResult
}

async function addBet(bet, id) {

    // console.log(bet.game);
    // let user = await User.findOne({_id: id});
    let partialBet = bet;
    partialBet.game = bet.game;
    partialBet.user = id;
    let newBet = new Bet(partialBet); // I am not sure if any other information needs to be added to the bet
    // console.log('showing new bet: ' + newBet);
    await newBet.save();
    // await console.log('Bet.find({})');
    // let result = await Bet.find({user: userid});
    // await console.log(result);

}

async function getBetsOfUser(id) {

    // console.log('got to get bets of user in service');
    // let oneBet = await Bet.findOne({user: id});
    // await console.log('looking for user: ' + id);
    // await console.log(oneBet);
    return await Bet.find({user: id});
}

async function postResult(result) {

}
