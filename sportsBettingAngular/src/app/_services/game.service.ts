import {Injectable} from '@angular/core';
import {Sport} from '../_models/sport';
import {Game} from '../_models/game';
import {Observable} from 'rxjs';
import {Result} from '../_models/result';

@Injectable({providedIn: 'root'})
export class GameService {

  fakeNames: string[] = [
    'Cardinals',
    'Falcons',
    'Ravens',
    'Bulls',
    'Panthers',
    'Lions',
    'Cowboys',
    'Broncos',
    'Packers',
    'Vikings',
    'Dolphins',
    'Chargers',
    'Raiders',
    'Eagles'
  ];

  constructor() {}

  getResults(gameID: string): Observable<Result> {
    // Need to send request with correct match ID and Odd type, and we also specify something for 'Final' as a parameter
    // idk if that will only give us a final score, but the json we get in return will also say if it is the final
    // score so we can just check that boolean. This method needs to be called for each new bet placed and subscribed to
    // until the results come in.
    return null;

  }

  getUpcomingGames(sport: Sport): Observable<Game[]> {
    if (sport === Sport.basketball) {
      // Really we would request from our API, however we are faking it for the framework
      return new Observable<Game[]>(observer => {
        observer.next([{
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
          under: -110
        }]);
      });

    } else {
      // generate random games.
      const games: Game[] = new Array<Game>(8);

      for (let i = 0; i < 8; i++) {
         games[i] = {
           id: '1',
           sport: Math.round(Math.random() * 2),
           time: new Date(Date.now()), // Maybe will come as a string we can copy or a Date
           homeTeam: this.fakeNames[Math.floor(Math.random() * 13)], // Could make 'Team's their own Model but I think it's unnecessary
           homeSpread: Math.floor((Math.random() - 1) * 5), // These are the values we would get from jsonodds.com
           homeSpreadLine: Math.floor((Math.random() - 1) * 150),
           homeMoneyLine: Math.floor((Math.random() - 1) * 150),
           awayTeam: this.fakeNames[Math.floor(Math.random() * 13)],
           awaySpread: Math.floor((Math.random() - 1) * 5),
           awaySpreadLine: Math.floor((Math.random() - 1) * 150),
           awayMoneyLine: Math.floor((Math.random() - 1) * 150),
           totalNumber: Math.floor((Math.random() + 9) * 10),
           over: Math.floor((Math.random() - 1) * 150),
           under: Math.floor((Math.random() - 1) * 150)
         };
      }

      return new Observable<Game[]>(observer => {
        observer.next(games); });

    }

    /*else if (sport === Sport.football) {

    } else if (sport === Sport.baseball) {

    } else if (sport === Sport.soccer) {

    } */
  }


}
