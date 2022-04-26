const resultService = require('../services/result.service')

module.exports = {
    getResult
};


function getResult(req, res, next) {
    // Need to identify the result by the game somehow.
    resultService.getResult(req.query.gameID).then(records => res.json(records))
        .catch(err => next(err));
}
