import {Component, OnInit} from '@angular/core';
import {GameService} from '../_services/game.service';
import {Sport} from '../_models/sport';
import {Game} from '../_models/game';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-basketballbets',
  templateUrl: './basketballbets.html',
  styleUrls: ['./basketballbets.css']
})
export class Basketballbets implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService, private authService: AuthService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {

    this.gameService.getUpcomingGames(Sport.basketball).subscribe(data => {
      this.games = data;
      console.log(data);
    });
  }

  getUserAvailableMoney() {
    return this.authService.currentUserValue.available;
  }


}
