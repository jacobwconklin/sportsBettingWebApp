import {Component, OnInit} from '@angular/core';
import {GameService} from '../_services/game.service';
import {Sport} from '../_models/sport';
import {Game} from '../_models/game';
import {AuthService} from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basketballbets',
  templateUrl: './basketballbets.html',
  styleUrls: ['./basketballbets.css']
})
export class Basketballbets implements OnInit {

  games: Game[] = [];

  sport: string;

  constructor(private gameService: GameService, private authService: AuthService, private route: Router) {
    this.sport = this.route.url.substring(1, this.route.url.length);
    // console.log(this.sport);
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {

    this.gameService.getUpcomingGames(Sport.basketball).subscribe(data => {
      this.games = data;
      // console.log(data);
    });
  }

  getUserAvailableMoney() {
    return this.authService.currentUserValue.available;
  }


}
