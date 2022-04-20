
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AuthService} from './auth.service';
import {PARecord} from '../_models/PARecord';
import { PAType } from '../_models/PAType';
import { RankingEntity } from '../_models/RankingEntity';




@Injectable({ providedIn: 'root' })
export class PArecordService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAll(username: string) {
      return this.http.get<PARecord[]>(`http://localhost:3030/parecord/getparecords`, {params: {username}});
  }

  getAverages() {
    return this.http.get<RankingEntity[]>(`http://localhost:3030/parecord/getaverages`);
  }




  add(caloriesValue: number, minutesValue: number, activity: PAType, exDate: Date, creationDate: Date) {
    const newparecord = {
          calories: caloriesValue,
          minutes: minutesValue,
          steps:  Math.floor(Math.random() * 25000),
          activityType: activity,
          exerciseDate: exDate,
          createdDate: creationDate,
        };


    return this.http.post(`http://localhost:3030/parecord/addparecord`, newparecord);

  }


  delete(date: string) {
    // console.log('got to service');
    return this.http.delete(`http://localhost:3030/parecord/${date}`);

  }



}
