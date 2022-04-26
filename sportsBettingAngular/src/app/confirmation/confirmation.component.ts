import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BetService} from '../_services/bet.service';
import {Sport} from '../_models/sport';
import { Game } from '../_models/game';
import { Bet } from '../_models/bet';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  available: number;

  betAmount = 0;

  sportString: string = this.route.snapshot.queryParamMap.get('sport');
  sport: Sport;
  homeTeam: string = this.route.snapshot.queryParamMap.get('homeTeam');
  homeSpread: number = parseInt(this.route.snapshot.queryParamMap.get('homeSpread'), 10);
  homeSpreadLine: number = parseInt(this.route.snapshot.queryParamMap.get('homeSpreadLine'), 10);
  homeMoneyLine: number = parseInt(this.route.snapshot.queryParamMap.get('homeMoneyLine'), 10);
  awayTeam: string = this.route.snapshot.queryParamMap.get('awayTeam');
  awaySpread: number = parseInt(this.route.snapshot.queryParamMap.get('awaySpread'), 10);
  awaySpreadLine: number = parseInt(this.route.snapshot.queryParamMap.get('awaySpreadLine'), 10);
  awayMoneyLine: number = parseInt(this.route.snapshot.queryParamMap.get('awayMoneyLine'), 10);
  totalNumber: number = parseInt(this.route.snapshot.queryParamMap.get('totalNumber'), 10);
  over: number = parseInt(this.route.snapshot.queryParamMap.get('over'), 10);
  under: number = parseInt(this.route.snapshot.queryParamMap.get('under'), 10);
  clickedTeam: string = this.route.snapshot.queryParamMap.get('clickedTeam');
  betType: string = this.route.snapshot.queryParamMap.get('betType');
  betLine: number = parseInt(this.route.snapshot.queryParamMap.get('betLine'), 10);
  gameTime: string = this.route.snapshot.queryParamMap.get('gameTime');
  toWin: number;

  statuses: string[] = [
    'Pending',
    'Won',
    'Lost'
  ];

  toogle = new FormControl(this.betAmount, []);

  constructor(private authService: AuthService, private route: ActivatedRoute, private betService: BetService, private userService: UserService) { }

  ngOnInit() {

    this.toogle.valueChanges.subscribe(newToogleValue => {
      this.betAmount = newToogleValue;
    });

    this.available = this.authService.currentUserValue.available;

  }

  clickConfirmation(amountBet) {
    this.authService.currentUserValue.available -= amountBet;

    // Need to build the correct Bet here, not a random Bet.

    // May need to change Game model or need to add more query params to make a Game JSON

    this.getSport();
    this.getToWin();

    const game: Game = {
      id: '1',
      sport: this.sport,
      time: new Date(Date.now()), // Maybe will come as a string we can copy or a Date
      homeTeam: this.homeTeam, // Could make 'Team's their own Model but I think it's unnecessary
      homeSpread: this.homeSpread, // These are the values we would get from jsonodds.com
      homeSpreadLine: this.homeSpreadLine,
      homeMoneyLine: this.homeMoneyLine,
      awayTeam: this.awayTeam,
      awaySpread: this.awaySpread,
      awaySpreadLine: this.awaySpreadLine,
      awayMoneyLine: this.awayMoneyLine,
      totalNumber: this.totalNumber,
      over: this.over,
      under: this.under
    };
    // Make a random Bet object
    const newBet: Bet = {
      user: this.authService.currentUserValue,
      game,
      betType: this.betType,
      odds: this.betLine,
      wager: this.betAmount,
      toWin: this.toWin,
      status: this.statuses[0]
    };
    // need to add route to set user data

    const updateUser: { wagered: number; available: number; trades: number } = {
      trades: this.authService.currentUserValue.trades,
      wagered: this.betAmount,
      available: this.authService.currentUserValue.available
    };
    this.userService.addBet(updateUser, this.authService.currentUserValue.username).subscribe(data => {
      console.log(data);
    });

    console.log(this.authService.currentUserValue);

    this.betService.addBet(newBet);

    this.betService.awaitResults(newBet.game.id);
  }

  getSport() {
    console.log(this.sportString);

    if (this.sportString === '0') {
      this.sport = 0;
    } else if (this.sportString === '1') {
      this.sport = 1;
    } else if (this.sportString === '2') {
      this.sport = 2;
    }
  }

  getToWin() {
    if (this.betLine > 0) {
      this.toWin = ((this.betLine / 100) + 1) * this.betAmount;
    } else {
      this.toWin = (this.betAmount - ((100 / this.betLine) + 1) * this.betAmount) + this.betAmount;
    }
  }


}
