const betService = require('../services/bet.service')

module.exports = {
    addBet,
    getBetsOfUser,
    postResult
};


function addBet(req, res, next) {


    // console.log(req);
    // console.log('got to add bet in controller');
    // console.log(req.body);
    // console.log(req.body.bet.position);
    betService.addBet(req.body.bet, req.user.sub).then(result => {res.send(result)})
        .catch(err => {next(err)});
}

function getBetsOfUser(req,res,next){
    // console.log('got to get bets of user in controller');
    betService.getBetsOfUser(req.user.sub).then(records => res.json(records))
        .catch(err => next(err));
    }

function postResult(req, res, next) {
    // console.log('in post result of bet controller, req.body is:');
    // console.log(req.body);
    betService.postResult(req.body.result, req.body.betID, req.user.sub).then(records => res.json(records))
        .catch(err => next(err));
}

