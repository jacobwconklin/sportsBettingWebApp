import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BetService} from '../_services/bet.service';
import {Sport} from '../_models/sport';
import { Game } from '../_models/game';
import { Bet } from '../_models/bet';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  betAmount = 0;

  homeTeam: string = this.route.snapshot.queryParamMap.get('homeTeam');
  awayTeam: string = this.route.snapshot.queryParamMap.get('awayTeam');
  clickedTeam: string = this.route.snapshot.queryParamMap.get('clickedTeam');
  betType: string = this.route.snapshot.queryParamMap.get('betType');
  betLine: string = this.route.snapshot.queryParamMap.get('betLine');
  gameTime: string = this.route.snapshot.queryParamMap.get('gameTime');

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

  toogle = new FormControl(this.betAmount, []);

  constructor(private authService: AuthService, private route: ActivatedRoute, private betService: BetService) { }

  ngOnInit() {

    this.toogle.valueChanges.subscribe(newToogleValue => {
      this.betAmount = newToogleValue;
    });

  }

  clickConfirmation(amountBet) {
    this.authService.currentUserValue.available -= amountBet;

    // May need to change Game model or need to add more query params to make a Game JSON

    const game: Game = {
      id: '1',
      sport: Math.round(Math.random() * 2),
      time: new Date(Date.now()), // Maybe will come as a string we can copy or a Date
      homeTeam: this.homeTeam, // Could make 'Team's their own Model but I think it's unnecessary
      homeSpread: Math.floor((Math.random() - 1) * 5), // These are the values we would get from jsonodds.com
      homeSpreadLine: Math.floor((Math.random() - 1) * 150),
      homeMoneyLine: Math.floor((Math.random() - 1) * 150),
      awayTeam: this.awayTeam,
      awaySpread: Math.floor((Math.random() - 1) * 5),
      awaySpreadLine: Math.floor((Math.random() - 1) * 150),
      awayMoneyLine: Math.floor((Math.random() - 1) * 150),
      totalNumber: Math.floor((Math.random() + 9) * 10),
      over: Math.floor((Math.random() - 1) * 150),
      under: Math.floor((Math.random() - 1) * 150)
    };
    // Make a random Bet object
    const newBet: Bet = {
      user: this.authService.currentUserValue,
      game: game,
      position: this.positions[Math.round(Math.random() * 5)],
      odds: Math.round((Math.random() - 1) * 200),
      wager: Math.round(Math.random() * 15000),
      toWin: Math.round(Math.random() * 15000),
      status: this.statuses[Math.round(Math.random() * 2)]
    };



    this.betService.addBet(newBet).subscribe();
  }

}
