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
    return newBet._id;
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

async function postResult(result, betID, userID) {

    let bet = await Bet.findOne({_id: betID});
    // await console.log('in post result in service found bet:');
    // await console.log(bet);
    // await console.log(result);
    let won = false;

    // Determine by position and results if user won or lost this bet
    if (bet.betType === 'Over')
    {
        // console.log('in over part');
        // console.log( (result.AwayScore + result.HomeScore) + ' - to - ' + bet.game.totalNumber);
        //Won
        if (result.AwayScore + result.HomeScore > bet.game.totalNumber)
        {
            // console.log('is Over!')
            won = true;
        }
        //else Lost
    }
    else if (bet.betType === 'Under')
    {
        //Won
        if (result.AwayScore + result.HomeScore < bet.game.totalNumber)
        {
            won = true;
        }
        //else Lost
    }
    // Determine if they chose home or away by
    // betLine which will equal game.awaySpreadLine or game.homeSpreadLine
    else if (bet.betType === 'SpreadH')
    {
        if (result.HomeScore - result.AwayScore >= bet.betLine)
            won = true;
    }
    else if (bet.betType === 'SpreadA')
    {
        if (result.AwayScore - result.HomeScore >= bet.betLine)
            won = true;
    }
    // Determine if they picked home or aray, then determine if home or away won
    // final === true is home victory, false === away victory
    else if (bet.betType === 'MLH' && result.final === true)
    {
        won = true;
    }
    else if (bet.betType === 'MLA' && result.final === false)
    {
        won = true;
    }


    //Perform updates
    if (won)
    {
        // console.log('its a win');
        await Bet.updateOne({_id: betID}, {status: 'Won'});
        let wins = await User.findOne({_id: userID}).select('wins');
        let earnings = await User.findOne({_id: userID}).select('earnings');
        let available = await User.findOne({_id: userID}).select('available');
        await User.updateOne({_id: userID}, {wins: wins.wins + 1, earnings: earnings.earnings + bet.toWin,
            available: available.available + bet.toWin})
    }
    else
    {
        // console.log('its a loss');
        await Bet.updateOne({_id: bet._id}, {status: 'Lost'});
    }

}
