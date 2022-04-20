import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../_services/game.service';
import {Sport} from '../_models/sport';
import {Game} from '../_models/game';

@Component({
  selector: 'app-gamecards',
  templateUrl: './gamecards.component.html',
  styleUrls: ['./gamecards.component.css']
})
export class GamecardsComponent implements OnInit {
  @Input() game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {

  }

}
