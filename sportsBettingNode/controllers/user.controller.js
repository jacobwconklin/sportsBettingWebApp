const userService = require('../services/user.service')


module.exports = {
    authenticate,
    getAllUsers,
    register,
    getgoals,
    setgoals,
    addBet,
    getAvailable
    //getAllRecordsOfUser
};


function authenticate(req, res, next) {
    // console.log("Authenticate():", req.body);
       userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAllUsers(req, res, next) {
    //  console.log("getAll", req.body);
    userService.getAllUsers()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function addBet(req, res, next) {
    // console.log("user controller addBet", req.body);
    userService.addBet(req.body, req.params.username)
        .then(result => {res.send(result)})
        .catch(err => next(err));
}

function getAvailable(req, res, next)
{

    userService.getAvailable(req.params.username)
        .then(result => res.json(result))
        .catch(err =>{next(err)});

}

//TODO: set goals (calorie goal and minute goal) for a user. Hint: write a middleware function and add it to the module exports.
function setgoals(req, res, next)
{
    /*console.log(req.body);
    console.log(req.body.caloriegoal);
    console.log(req.body.minutegoal); */
    //console.log(req.params);
    //console.log(req.params.username);
    userService.setGoals(req.body, req.params.username)
        .then(result => {res.send(result)})
        .catch(err =>{next(err)});

}




function register(req, res, next) {

   userService.addUser(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}




//TODO: get goals (calorie goal and minute goal) for the specific username in 'req.params...' and send the JSON back the to the user that requested the information. Hint: write a middleware function and add it to the exports.
function getgoals(req, res, next)
{
    //console.log(req.query);
    //console.log(req.query);
    //console.log(req.query.username);
    userService.getGoals(req.query.username).then( result => {res.send(result)}).catch(err => next(err));
}

/*function getAllRecordsOfUser(req, res, next)
{
    userService.getAllRecordsOfUser(req.query.username).then( result => {res.send(result)}).catch(err => next(err));
}*/

