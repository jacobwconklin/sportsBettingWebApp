const gameService = require('../services/game.service')

module.exports = {
    getGames
};


function getGames(req, res, next) {
    // Need to identify the result by the game somehow.
    return gameService.getGames(req.body.sport);
}
