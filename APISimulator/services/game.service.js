import {Game} from '../models/game';

module.exports = {
    getGames,
    getResult
}

// Here will be all of the Games and their results:

const games = [{
    id: '1',
    sport: Sport.basketball,
    time: new Date(Date.now()), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Toronto Raptors', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -3.0, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -153,
    awayTeam: 'Chicago Bulls',
    awaySpread: 3.0,
    awaySpreadLine: 110,
    awayMoneyLine: 132,
    totalNumber: 182.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 100,
        AwayScore: 110,
        Final: false,
    }
}];



async function getGames(sport) {

}

async function getResult(gameID) {

}
