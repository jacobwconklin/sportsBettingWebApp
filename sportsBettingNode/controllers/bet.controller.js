const parecordService = require('../services/bet.service')

module.exports = {
    addBet,
    getBetsOfUser
};


function addBet(req, res, next) {

    console.log('got to parecordcontroller');
    parecordService.addBet(req.body, req.user.sub).then(result => {res.send(result)})
        .catch(err => {next(err)});
}

function getBetsOfUser(req,res,next){
    console.log('got to parecordcontroller in get');
    parecordService.getBetsOfUser(req.user.sub).then(records => res.json(records))
        .catch(err => next(err));
    }

