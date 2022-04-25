const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/database');
const {castToNumber} = require("mongoose/lib/schema/operators/helpers");
const User = db.User;



module.exports = {
    authenticate,
    getAllUsers,
    getByUsername,
    addUser,
    addBet
}

async function authenticate({ username, password }) {

    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAllUsers() {
    //Returning the result of the promise.
    let fullUsers = await User.find().select('-hash');
    // console.log(fullUsers);
    return await User.find().select('-hash');
}

async function getByUsername(username) {

    return await User.find({username:username});
}

async function addUser(userParam) {

    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    else  if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();

}

/* async function setGoals(values, userid){

    let id = await User.findOne({username: userid}).select('_id');

    return await User.updateOne({_id: id._id}, {caloriegoal: values.caloriegoal, minutegoal: values.minutegoal});
}
 */

async function addBet(data, userid) {
    console.log('addBet data service', data);

    let id = await User.findOne({username: userid}).select('_id');
    let wagered = await User.findOne({username: userid}).select('wagered');
    let trades = await User.findOne({username: userid}).select('trades');
    let available = await User.findOne({username: userid}).select('available');

    return await User.updateOne({_id: id._id}, {wagered: wagered.wagered + data.wagered, trades: trades.trades + 1, available: available.available - wagered.wagered});
}


/* async function getGoals(username){
    //I am returning the entire User object to have it's goals ripped out in the Angular side
    //console.log('get goals username param is: ' + username);
    let goalValues = await User.findOne({username: username}).select('caloriegoal minutegoal');
    console.log('get goals is giving: ' + fullPerson);
    console.log('get goals is giving: ' + goalValues);
    console.log('get goals is giving: ' + goalValues.caloriegoal);
    console.log('get goals is giving: ' + goalValues.minutegoal);
    return await User.findOne({username: username}).select('caloriegoal minutegoal');

    //Instead of using .select('caloriegoal minutegoal') to pull just the goals here, may even be able
    // to add this without breaking anything, will have to see.
}
*/

