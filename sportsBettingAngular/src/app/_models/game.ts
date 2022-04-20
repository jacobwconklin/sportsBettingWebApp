import {Sport} from './sport';

export class Game {
  id: string;
  sport: Sport;
  time: Date; // Maybe will come as a string we can copy or a Date
  homeTeam: string; // Could make 'Team's their own Model but I think it's unnecessary
  homeSpread: number; // These are the values we would get from jsonodds.com
  homeSpreadLine: number;
  homeMoneyLine: number;
  awayTeam: string;
  awaySpread: number;
  awaySpreadLine: number;
  awayMoneyLine: number;
  totalNumber: number;
  over: number;
  under: number;
  // will need to know the specifics of what happened in the game like the final
  // score and spread and the winner or loser. idk how exactly

}
