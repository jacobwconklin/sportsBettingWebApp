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
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private authservice: AuthService,
              private notifservice: NotificationService,
              private http: HttpClient,
              private router: Router) {

  }

  // Return Observable<Bet[]>
  getAllBetsOfUser(username: string): Observable<any> {
    // Would get all of a User's bets from the database, this will be simulated for now.

    // Be real get from db
    return this.http.get('http://localhost:3030/bet/getbetsofuser');
  }

  addBet(bet: Bet) {

    // console.log('in addBEt in bet.service angular');
    // console.log(bet);
    return this.http.post('http://localhost:3030/bet/addbet/',
      { bet });
  }

  awaitResults(gameID, betID): void {
    // Get results from the API based on the gameID and caluate earnings to
    // update the database

    this.http.get('http://localhost:3000/result/getResult', {params: {gameID}}).subscribe(
      result => {
        // console.log('Game Result for game ID:  ' + gameID + ' is:\n');
        // console.log(result);
        this.http.post('http://localhost:3030/bet/postresult', {result, betID}).subscribe(
          () => {
            // console.log('RESULT POSTED!!');
            window.location.reload();
          }
        );
      });
  }

}
