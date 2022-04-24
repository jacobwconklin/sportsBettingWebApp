import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {NotificationService} from './notification.service';
import {User} from '../_models/user';
import {Role} from '../_models/role';
import {HttpClient} from '@angular/common/http';



const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Injectable({providedIn: 'root'})
export class UserService {




  constructor(private notif: NotificationService,
              private http: HttpClient) {}

  getAllUsers(): Observable<Array<User>> {
    // in complete code this will call NodeJS to retrieve all Users from
    // the database, for now it fakes them.
    const users: Array<User> = new Array<User>();

    for (let i = 0; i < 20; i++) {
      // Create 20 random Users
      const tradeNum: number = Math.floor(Math.random() * 200);
      const newUser = {
        username: (NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
          ' ' +
          NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
          '.'),
        role: Role.user,
        trades: tradeNum,
        earnings: Math.floor(Math.random() * 200000),
        wins: Math.floor(Math.random() * tradeNum),
        wagered: Math.floor(Math.random() * 150000),
        available: Math.floor(Math.random() * 100000)
      };
      users.push(newUser);
    }

    return of<User[]>(users);
  }

  getAll() {
    return this.http.get<User[]>(`http://localhost:3030/user/allusers`);
  }

  addBet(bet, username) {
    return this.http.post('http://localhost:3030/user/addBet/' + username, bet);
  }

  // getAllRecordsOfUser(username: string) {
  //  return this.http.get<PARecord[]>(`http://localhost:3030/user/allusers`, {params: {username}});
  // }





  register(user: User) {
    return this.http.post(`http://localhost:3030/user/register`, user);
  }

  getgoals(username: string) {
    // console.log(username);
    return this.http.get<User>('http://localhost:3030/user/getgoals', {params: {username}});
  }

  setgoals(calorieGoal: number, minuteGoal: number, user: User) {
    return this.http.post('http://localhost:3030/user/setgoals/'  + user.username,
      {caloriegoal: calorieGoal, minutegoal: minuteGoal});
  }


}
