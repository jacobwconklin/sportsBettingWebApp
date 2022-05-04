const gameService = require('../services/game.service')

module.exports = {
    getGames
};


function getGames(req, res, next) {
    // Need to identify the result by the game somehow.
    // console.log(req.query);
    gameService.getGames(req.query.sport).then(records => res.json(records))
        .catch(err => next(err));
}
