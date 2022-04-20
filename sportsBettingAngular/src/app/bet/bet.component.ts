import {Component, Input, OnInit} from '@angular/core';
import {PARecord} from '../_models/PARecord';
import {Bet} from '../_models/bet';
import {Sport} from '../_models/sport';
import {GameService} from '../_services/game.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  sportColor = 'darkorange';
  statusColor = 'green';

  basketball = false;
  baseball = false;
  football = false;
  sportName: string;
  statusIcon: string;

  @Input() bet: Bet;

  constructor(private gameservice: GameService) { }

  ngOnInit() {
    // console.log('got to bet component' + this.bet.game.sport);
    // console.log(this.bet.status);
    if (this.bet.game.sport === Sport.basketball) {
      this.sportName = 'Basketball';
      this.basketball = true;
    } else if (this.bet.game.sport === Sport.baseball) {
      this.sportName = 'Baseball';
      this.sportColor = 'tan';
      this.baseball = true;
    } else if (this.bet.game.sport === Sport.football) {
      this.sportName = 'Football';
      this.sportColor = 'brown';
      this.football = true;
    }
    if (this.bet.status === 'Lost') {
      this.statusIcon = 'clear';
      this.statusColor = 'red';
    } else if (this.bet.status === 'Won') {
      this.statusIcon = 'check';
    } else {
      // Game is still pending
      this.statusIcon = 'replay';
      this.statusColor = 'blue';
    }

  }

}
