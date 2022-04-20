import { Component, OnInit } from '@angular/core';
import {Game} from '../_models/game';
import {GameService} from '../_services/game.service';
import {Sport} from '../_models/sport';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-footballbets',
  templateUrl: './footballbets.component.html',
  styleUrls: ['./footballbets.component.css']
})
export class FootballbetsComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService, private authService: AuthService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {

    this.gameService.getUpcomingGames(Sport.football).subscribe(data => {
      this.games = data;
      console.log(data);
    });
  }

  getUserAvailableMoney() {
    return this.authService.currentUserValue.available;
  }

}
