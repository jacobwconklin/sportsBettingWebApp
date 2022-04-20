
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';
import { PARecord } from '../_models/PARecord';




@Injectable({ providedIn: 'root' })
export class UserService {


  constructor(private http: HttpClient) { }

  getAll() {
     return this.http.get<User[]>(`http://localhost:3030/user/allusers`);
  }

  //getAllRecordsOfUser(username: string) {
  //  return this.http.get<PARecord[]>(`http://localhost:3030/user/allusers`, {params: {username}});
  //}





  register(user: User) {
    return this.http.post(`http://localhost:3030/user/register`, user);
  }


  //TODO: add a function that will allow users to set their calorie and minute goals. The function will comuunicate with the back-end.


  //TODO: add a function that will allow users to get calorie and minute goals for a specific user (this means, given a username, this function should fetch calories and minute goals for that user). The function will comuunicate with the back-end.

  getgoals(username: string) {
    // console.log(username);
    return this.http.get<User>('http://localhost:3030/user/getgoals', {params: {username}});
  }

  setgoals(calorieGoal: number, minuteGoal: number, user: User) {
    return this.http.post('http://localhost:3030/user/setgoals/'  + user.username,
      {caloriegoal: calorieGoal, minutegoal: minuteGoal});
  }


}
