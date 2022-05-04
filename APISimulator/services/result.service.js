const gameService = require('../services/game.service');

module.exports = {
    getResult
}


async function getResult(gameID) {

    let result = await gameService.getResult(gameID);

    return new Promise((resolve, reject) => {
    setTimeout( () => {

        // console.log('in result.service with following gameID');
        // console.log(gameID);
        // console.log(result);
        resolve(result);

    }, 6000); });



}
