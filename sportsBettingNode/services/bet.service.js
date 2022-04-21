const db = require('../_helpers/database');
const Bet = db.Bet;
const User = db.User;


module.exports = {
    addBet,
    getBetsOfUser
}

/*
async function getAllPArecords(username){
    let recs = await PArecord.find({createdByUsername: username});
    // console.log(recs);
    return await PArecord.find({createdByUsername: username});
}

async function addPArecord(parecord, id) {
    // console.log(parecord);
    // validate
    //console.log('id is: ' + id);
    let user = await User.findOne({_id: id});
    // console.log('user is: ' + user);
    //console.log('users username is: ' + user.username);
    if (await PArecord.findOne({ createdBy: id, createdDate: parecord.createdDate  })) {
        // We are just updating an existing record
        await PArecord.updateOne({ createdBy: id, createdDate: parecord.createdDate  }, {minutes: parecord.minutes,
            calories: parecord.calories, activityType: parecord.activityType});
        await dbrecord.save();
        return

        //return await User.updateOne({_id: id._id}, {caloriegoal: values.caloriegoal, minutegoal: values.minutegoal});
    }
    else if(!user){
        throw 'Error with the user submitting the request. User information missing. Malformed request.';
    }
    // populate missing fields in the brand new parecord object
    let newrecord= parecord;
    parecord.createdBy = user;
    parecord.createdByUsername = user.username;
    dbrecord = new PArecord(newrecord);
    // console.log(dbrecord);

    // save the record
    await dbrecord.save();

}
*/

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
