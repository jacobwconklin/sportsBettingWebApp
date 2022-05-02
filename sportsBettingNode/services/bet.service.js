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
    let newBet = await new Bet(partialBet); // I am not sure if any other information needs to be added to the bet
    // console.log('showing new bet: ' + newBet);
    // await newBet.game.identifier = bet.game.identifier;
    // await console.log(newBet);
    // await console.log(bet.game.identifier);
    // await console.log(newBet.game.identifier);
    await newBet.save();
    return newBet.game.identifier;
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

async function postResult(result, gameID, userID) {

    let user = await User.find({_id: userID});
    let bets = Bet.find({user: userID});
    console.log('in post result in service');

    console.log(bets);

    bets.map( bet =>
    {
        console.log('looping through bets');
        console.log(bet);
        if (bet.game.identifier === gameID && bet.status === 'Pending')
        {
            console.log('found a matching bet');
            // update bet for each possible position and what happened, and update user
            if (bet.position === 'Over')
            {
                console.log('in over part');
                //Won
                if (result.awayFinalScore + result.homeFinalScore > bet.game.totalNumber)
                {
                    Bet.updateOne({_id: bet._id}, {status: 'Won'});
                    let wins = User.findOne({_id: userID}).select('wins');
                    let earnings = User.findOne({_id: userID}).select('earnings');
                    let available = User.findOne({_id: userID}).select('available');
                    User.updateOne({_id: userID}, {wins: wins++, earnings: earnings + bet.toWin,
                        available: available + bet.toWin})
                }
                //Lost
                else
                {
                    Bet.updateOne({_id: bet._id}, {status: 'Lost'});
                }
            }
            else if (bet.position === 'Under')
            {
                //Won
                if (result.awayFinalScore + result.homeFinalScore < bet.game.totalNumber)
                {
                    Bet.updateOne({_id: bet._id}, {status: 'Won'});
                    let wins = User.findOne({_id: userID}).select('wins');
                    let earnings = User.findOne({_id: userID}).select('earnings');
                    let available = User.findOne({_id: userID}).select('available');
                    User.updateOne({_id: userID}, {wins: wins++, earnings: earnings + bet.toWin,
                        available: available + bet.toWin})
                }
                //Lost
                else
                {
                    Bet.updateOne({_id: bet._id}, {status: 'Lost'});
                }
            }
            else if (bet.position === 'Spread')
            {
                // Determine if they chose home or away by
                // betLine which will equal game.awaySpreadLine or game.homeSpreadLine
            }
            else if (bet.position === 'ML')
            {

            }
            /* Included in Game Model:

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
             */

        }
    });


}
