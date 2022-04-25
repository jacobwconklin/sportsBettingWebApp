const resultService = require('../services/result.service')

module.exports = {
    getResult
};


function getResult(req, res, next) {
    // Need to identify the result by the game somehow.
    return resultService.getResult(req.body.gameID);
}
