import { Component, OnInit } from '@angular/core';
import { GameService } from '../_services/game.service';
import { Sport } from '../_models/sport';
import { Game } from '../_models/game';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-basketballbets',
  templateUrl: './basketballbets.html',
  styleUrls: ['./basketballbets.css']
})
export class Basketballbets implements OnInit {

  games: Game[] = [];

  available = 0;

  sport: string;

  constructor(private gameService: GameService, private authService: AuthService, private route: Router, private userService: UserService) {
    this.sport = this.route.url.substring(1, this.route.url.length);
    // console.log(this.sport);
  }

  ngOnInit() {
    this.getGames();

    this.getUserAvailableMoney();
  }

  getGames() {

    this.gameService.getUpcomingGames(Sport.basketball).subscribe(data => {
      console.log('got something back');
      console.log(data);
      this.games = data;

    });
  }

  getUserAvailableMoney() {
    // console.log('available: ', this.authService.currentUserValue.available);

    this.userService.getavailable(this.authService.currentUserValue.username).subscribe(data => {
      console.log(data);
      this.available = data.available;
    });

  }


}
