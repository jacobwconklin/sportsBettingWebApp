import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BetService} from '../_services/bet.service';
import {Sport} from '../_models/sport';

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
    // this.betService.addBet()
  }

}
