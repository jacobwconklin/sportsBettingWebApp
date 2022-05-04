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
    addBet,
    getAvailable
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

    console.log('got here');
    console.log(userParam);
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    else  if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    console.log('all the way here');
    const user = new User(userParam);
    user.available = 100000;

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    console.log('now here');
    // save user
    await user.save();

}

async function getAvailable(userid){

    let id = await User.findOne({username: userid}).select('_id');

    return await User.findOne({ username: userid }).select('available');
}

async function addBet(data, userid) {
    //console.log('addBet data service', data);

    let id = await User.findOne({username: userid}).select('_id');
    let wagered = await User.findOne({username: userid}).select('wagered');
    let trades = await User.findOne({username: userid}).select('trades');
    let available = await User.findOne({username: userid}).select('available');

    console.log('available: ', available.available);
    console.log('wagered: ', wagered.wagered);

    let remaining = available.available - wagered.wagered;

    return await User.updateOne({_id: id._id}, {wagered: wagered.wagered + data.wagered, trades: trades.trades + 1, available: remaining});
}


