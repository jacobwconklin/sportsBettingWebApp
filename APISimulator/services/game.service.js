module.exports = {
    getGames,
    getResult
}

// Here will be all of the Games and their results:

const basketballGames = [{
    identifier: '1',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Toronto Raptors', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -3.0, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -153,
    awayTeam: 'Chicago Bulls',
    awaySpread: 3.0,
    awaySpreadLine: 110,
    awayMoneyLine: 132,
    totalNumber: 202.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 100,
        AwayScore: 110,
        Final: false,
    }
}, {
    identifier: '2',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Boston Celtics', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -6.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -190,
    awayTeam: 'Brooklyn Nets',
    awaySpread: 6.5,
    awaySpreadLine: -110,
    awayMoneyLine: 170,
    totalNumber: 218.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 107,
        AwayScore: 109,
        Final: false,
    }
},  {
    identifier: '3',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Cleveland Cavaliers', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: 8.0, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: 210,
    awayTeam: 'Golden State Warriors',
    awaySpread: -8.0,
    awaySpreadLine: -110,
    awayMoneyLine: -240,
    totalNumber: 201.0,
    over: -110,
    under: -110,
    result: {
        HomeScore: 89,
        AwayScore: 112,
        Final: false,
    }
},  {
    identifier: '4',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'New York Knicks', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -120,
    awayTeam: 'Philadelphia 76ers',
    awaySpread: 1.5,
    awaySpreadLine: -110,
    awayMoneyLine: -110,
    totalNumber: 222.0,
    over: -110,
    under: -110,
    result: {
        HomeScore: 101,
        AwayScore: 100,
        Final: false,
    }
},  {
    identifier: '5',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Milwaukee Bucks', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -5.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -120,
    homeMoneyLine: -175,
    awayTeam: 'Indiana Pacers',
    awaySpread: 5.5,
    awaySpreadLine: 100,
    awayMoneyLine: 155,
    totalNumber: 203.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 100,
        AwayScore: 105,
        Final: false,
    }
},  {
    identifier: '6',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Charlotte Hornets', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -2.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -130,
    awayTeam: 'Orlando Magic',
    awaySpread: 2.5,
    awaySpreadLine: -110,
    awayMoneyLine: 100,
    totalNumber: 213.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 103,
        AwayScore: 115,
        Final: false,
    }
}, {
    identifier: '7',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'San Antonio Spurs', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: 6.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: 160,
    awayTeam: 'Los Angeles Lakers',
    awaySpread: -6.5,
    awaySpreadLine: -110,
    awayMoneyLine: -190,
    totalNumber: 209.0,
    over: -110,
    under: -110,
    result: {
        HomeScore: 93,
        AwayScore: 106,
        Final: false,
    }
},  {
    identifier: '8',
    sport: 0,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Utah Jazz', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -110,
    awayTeam: 'Memphis Grizzlies',
    awaySpread: 1.5,
    awaySpreadLine: -110,
    awayMoneyLine: -110,
    totalNumber: 204.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 98,
        AwayScore: 93,
        Final: false,
    }
}];


const footballGames = [{
    identifier: '9',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'New England Patriots', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -4.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -120,
    homeMoneyLine: -160,
    awayTeam: 'New York Jets',
    awaySpread: 4.5,
    awaySpreadLine: -110,
    awayMoneyLine: 150,
    totalNumber: 34.5,
    over: -110,
    under: -120,
    result: {
        HomeScore: 21,
        AwayScore: 10,
        Final: false,
    }
}, {
    identifier: '10',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Atlanta Falcons', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: 6.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: 180,
    awayTeam: 'New Orleans Saints',
    awaySpread: -6.5,
    awaySpreadLine: -110,
    awayMoneyLine: -190,
    totalNumber: 41.0,
    over: -110,
    under: -110,
    result: {
        HomeScore: 21,
        AwayScore: 24,
        Final: false,
    }
},  {
    identifier: '11',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Kansas City Chiefs', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -7.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -210,
    awayTeam: 'Cleveland Browns',
    awaySpread: 7.5,
    awaySpreadLine: -110,
    awayMoneyLine: 200,
    totalNumber: 47.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 28,
        AwayScore: 10,
        Final: false,
    }
},  {
    identifier: '12',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Denver Broncos', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -3.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -150,
    awayTeam: 'Houston Texans',
    awaySpread: 3.5,
    awaySpreadLine: -110,
    awayMoneyLine: 130,
    totalNumber: 32.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 13,
        AwayScore: 24,
        Final: false,
    }
},  {
    identifier: '13',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Baltimore Ravens', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -120,
    awayTeam: 'Dallas Cowboys',
    awaySpread: 1.5,
    awaySpreadLine: 100,
    awayMoneyLine: -110,
    totalNumber: 29.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 24,
        AwayScore: 21,
        Final: false,
    }
},  {
    identifier: '14',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Green Bay Packers', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -4.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -150,
    awayTeam: 'Indianapolis Colts',
    awaySpread: 4.5,
    awaySpreadLine: -110,
    awayMoneyLine: 130,
    totalNumber: 38.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 35,
        AwayScore: 6,
        Final: false,
    }
}, {
    identifier: '15',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Miami Dolphins', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: 6.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: 160,
    awayTeam: 'Tennessee Titans',
    awaySpread: -6.5,
    awaySpreadLine: -110,
    awayMoneyLine: -190,
    totalNumber: 31.0,
    over: -110,
    under: -110,
    result: {
        HomeScore: 10,
        AwayScore: 14,
        Final: false,
    }
},  {
    identifier: '16',
    sport: 1,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Seattle Seahawks', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -110,
    awayTeam: 'Jacksonville Jaguars',
    awaySpread: 1.5,
    awaySpreadLine: -110,
    awayMoneyLine: -110,
    totalNumber: 28.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 21,
        AwayScore: 6,
        Final: false,
    }
}];


const baseballGames = [{
    identifier: '17',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Chicago Cubs', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -120,
    homeMoneyLine: -170,
    awayTeam: 'Cleveland Guardians',
    awaySpread: 1.5,
    awaySpreadLine: -110,
    awayMoneyLine: 150,
    totalNumber: 9.5,
    over: -110,
    under: -120,
    result: {
        HomeScore: 5,
        AwayScore: 3,
        Final: false,
    }
}, {
    identifier: '18',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Pittsburgh Pirates', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -2.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -210,
    awayTeam: 'St. Louis Cardinals',
    awaySpread: 2.5,
    awaySpreadLine: -110,
    awayMoneyLine: 190,
    totalNumber: 8.0,
    over: -110,
    under: -110,
    result: {
        HomeScore: 4,
        AwayScore: 9,
        Final: false,
    }
},  {
    identifier: '19',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Minnesota Twins', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: 1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: 130,
    awayTeam: 'Kansas City Royals',
    awaySpread: -1.5,
    awaySpreadLine: -110,
    awayMoneyLine: -140,
    totalNumber: 7.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 10,
        AwayScore: 2,
        Final: false,
    }
},  {
    identifier: '20',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Detroit Tigers', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -3.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -250,
    awayTeam: 'Baltimore Orioles',
    awaySpread: 3.5,
    awaySpreadLine: -110,
    awayMoneyLine: 230,
    totalNumber: 10.5,
    over: -120,
    under: -110,
    result: {
        HomeScore: 8,
        AwayScore: 7,
        Final: false,
    }
},  {
    identifier: '21',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Toronto Blue Jays', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: 1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: 120,
    awayTeam: 'Washington Nationals',
    awaySpread: -1.5,
    awaySpreadLine: -110,
    awayMoneyLine: -150,
    totalNumber: 29.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 0,
        AwayScore: 4,
        Final: false,
    }
},  {
    identifier: '22',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Arizona Diamondbacks', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -5.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -350,
    awayTeam: 'Oakland Athletics',
    awaySpread: 5.5,
    awaySpreadLine: -110,
    awayMoneyLine: 300,
    totalNumber: 12.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 11,
        AwayScore: 0,
        Final: false,
    }
}, {
    identifier: '23',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'Boston Red Sox', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: 1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: 130,
    awayTeam: 'Philadelphia Phillies',
    awaySpread: -1.5,
    awaySpreadLine: -110,
    awayMoneyLine: -140,
    totalNumber: 9.0,
    over: -110,
    under: -110,
    result: {
        HomeScore: 6,
        AwayScore: 2,
        Final: false,
    }
},  {
    identifier: '24',
    sport: 2,
    time: getDate(), // Maybe will come as a string we can copy or a Date
    homeTeam: 'New York Yankees', // Could make 'Team's their own Model but I think it's unnecessary
    homeSpread: -1.5, // These are the values we would get from jsonodds.com
    homeSpreadLine: -110,
    homeMoneyLine: -110,
    awayTeam: 'Miami Marlins',
    awaySpread: 1.5,
    awaySpreadLine: -110,
    awayMoneyLine: -110,
    totalNumber: 8.5,
    over: -110,
    under: -110,
    result: {
        HomeScore: 2,
        AwayScore: 6,
        Final: false,
    }
}];


async function getGames(sport) {

    return new Promise((resolve, reject) => {
        console.log('got to getGames Service');
        console.log(sport);
        // May want to create a promise here, probably unnecessary
        if (sport === '2') {
            resolve(baseballGames);
        }
        else if (sport === '1') {
            resolve(footballGames);
        }
        else {
            // BasketballGames are the default
            resolve(basketballGames);
        }
    });

}

async function getResult(gameID) {
    // Find the game by the game ID and return its results
    // May have the setTimeOut here!


        for (let i = 0; i < basketballGames.length; i++) {
            if (basketballGames[i].identifier === gameID) {
                return (basketballGames[i].result);
            }
        }
        for (let i = 0; i < footballGames.length; i++) {
            if (footballGames[i].identifier === gameID) {
                return (footballGames[i].result);
            }
        }
        for (let i = 0; i < baseballGames.length; i++) {
            if (baseballGames[i].identifier === gameID) {
                // console.log('found a match, game is:');
                // console.log(baseballGames[i]);
                // console.log(baseballGames[i].result);
                return (baseballGames[i].result);
            }
        }
}

function getDate() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(randomIntFromInterval(10, 22), randomIntFromInterval(0, 60));

    return currentDate;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
