import {Injectable} from '@angular/core';
import {Sport} from '../_models/sport';
import {Game} from '../_models/game';
import {Observable} from 'rxjs';
import {Bet} from '../_models/bet';
import {User} from '../_models/user';
import {AuthService} from './auth.service';
import {NotificationService} from './notification.service';
import {GameService} from './game.service';
import {Result} from '../_models/result';

@Injectable({providedIn: 'root'})
export class BetService {

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

  positions: string[] = [
    'Over',
    'Under',
    'HomeSpread',
    'AwaySpread',
    'HomeMoneyLine',
    'AwayMoneyLine',
  ];

  statuses: string[] = [
    'Pending',
    'Won',
    'Lost'
  ];

  /*
  allBets: Bet[] = [user: User;
  sport: Sport;
  game: Game;
  position: string; // Idk how best to represent the user's position on a bet
  wager: number;
  status: string;];
   */

  constructor(private authservice: AuthService,
              private notifservice: NotificationService) {

  }

  getAllBetsOfUser(username: string): Observable<Bet[]> {
    // Would get all of a User's bets from the database, this will be simulated for now.

    const bets: Bet[] = new Array<Bet>(4);

    for (let i = 0; i < 4; i++) {
      // Just use the current User for the User
      const currUser: User = this.authservice.currentUserValue;
      // Create a random game for the bet
      const game: Game = {
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
      // Make a random Bet object
      bets[i] = {
      user: currUser,
      game: game,
      position: this.positions[Math.round(Math.random() * 5)],
      odds: Math.round((Math.random() - 1) * 200),
      wager: Math.round(Math.random() * 15000),
      toWin: Math.round(Math.random() * 15000),
      status: this.statuses[Math.round(Math.random() * 2)] };
    } // end of for loop

    return new Observable<Bet[]>(observer => {
      observer.next(bets); });

  }

  addBet(game: Game, position: string, wager: number, odds: number) {
    // How much math do we want to do here or before or after here?
    // Knowing the Game in question and the User's position and wager amount
    // the rest can be calculated.

    /* let odds: number;          Odds could be determined, but it will be known when confirming the bet
                                  so it may as well just be passed in
    if (position === 'Over') {

    } else if (position === 'Under') {

    } else if (position === )
    */
    const newBet: Bet = {
      user: this.authservice.currentUserValue,
      game: game,
      position: position,
      odds: odds,
      wager: wager,
      toWin: Math.round(Math.random() * 15000), // would need to be calculated here or in the database either way
      status: 'Pending'};

    // Now bet would be added to the database
    this.notifservice.showNotif('Bet Added', 'acknowledge');

    // Result is then awaited
    this.awaitResults(newBet.game.id, newBet.position).subscribe(
      result => {
        // Send results to databse
        this.submitResults(result, newBet);
      },
      error => {
        this.notifservice.showNotif('Error receiving results');
      });
  }

  awaitResults(gameID: string, position: string): Observable<Result> {
    // Get results from the API based on the gameID and position

    return null;
  }

  submitResults(result: Result, bet: Bet): void  {
    // Post the result to the database calculations can be done in the database
    // The user who is associated with the Bet can have his wins, total, and
    // available aspects updated based on their position on the bet and the
    // actual results.
  }


}
