import {Component, OnDestroy, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';
import {PARecord} from '../_models/PARecord';
import {Bet} from '../_models/bet';
import {BetService} from '../_services/bet.service';
import {AuthService} from '../_services/auth.service';

@Component({
  templateUrl: 'home.component.html',

  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {


  parecords: PARecord[] = [];
  bets: Bet[] = [];


  constructor(
    private userService: UserService,
    private notifService: NotificationService,
    private betService: BetService,
    private authservice: AuthService
  ) {
  }

  ngOnInit() {
    this.betService.getAllBetsOfUser(this.authservice.currentUserValue.username).subscribe(
      allBets => {
        this.bets = allBets;
        this.bets.reverse();
      });


  }
}

