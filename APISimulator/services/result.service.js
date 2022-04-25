const gameService = require('../services/game.service');

module.exports = {
    getResult
}


async function getResult(gameID) {

    return await gameService.getResult(gameID);

}
