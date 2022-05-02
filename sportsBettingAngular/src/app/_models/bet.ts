import {User} from './user';
import {Sport} from './sport';
import {Game} from './game';

export class Bet {
  user: User;
  game: Game;
  betType: string; // Idk how best to represent the user's position on a bet
                    // (meaning like what kind of bet they are doing, maybe should be an enumerated type)
  betLine: number;
  odds: number;
  wager: number;
  toWin: number;
  status: string; // will either be win or lose so I was thinking about a boolean, but Until the results are in it should
  // probably be like: 'pending' or something.


}
