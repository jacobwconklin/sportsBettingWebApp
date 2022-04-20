import { Component, OnInit } from '@angular/core';
import { RankingEntity } from '../_models/RankingEntity';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { NotificationService } from '../_services/notification.service';
import { PArecordService } from '../_services/parecord.service';
import { FormControl } from '@angular/forms';

// icon website: https://www.infragistics.com/products/ignite-ui-angular/angular/components/avatar

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  allRankings: Array<RankingEntity> = new Array<RankingEntity>();
  filteredRankings: Array<RankingEntity>;
  // allUsers: User[];
  sortControl = new FormControl(0);
  filterControl = new FormControl('');


  constructor(private notifservice: NotificationService,
              private parecordService: PArecordService) {
    this.sortControl.valueChanges.subscribe( value => this.sortRankings(value));
    this.filterControl.valueChanges.subscribe( value => {
      console.log('filter value is: ' + value);
      this.filteredRankings = this.allRankings.filter( ranking => ranking.username.includes(value));
      //  ranking.first.includes(value) ||
      //         ranking.last.includes(value) ||
    });
  }

  ngOnInit(): void {
    // Make call to PARecordService that will return array of JSON of all Users
    // and their avg minutes and calories and their goals.
    this.parecordService.getAverages().subscribe(
      allAverages => {
        for (const averageJson of allAverages) {
          // this.userService.getgoals(averageJson.username).subscribe(()=>{});
          let newRankingEntity: RankingEntity;
          newRankingEntity = {
            calorieGoal: averageJson.calorieGoal,
            minuteGoal: averageJson.minuteGoal,
            avgCalories: averageJson.avgCalories,
            avgMinutes: averageJson.avgMinutes,
            username: averageJson.username,
            first: averageJson.first,
            last: averageJson.last
          };
          // console.log(newRankingEntity);
          this.allRankings.push(newRankingEntity);
        }
        this.allRankings.sort( (a, b) => b.avgMinutes - a.avgMinutes);
        // Assing each ranking their rank #
        for (let i = 0; i < this.allRankings.length; i++) {
          this.allRankings[i].rank = (i + 1);
        }
        this.filteredRankings = this.allRankings;
      },
        err => {this.notifservice.showNotif('Error obtaining User Rankings');
      });
  }

  /**
   * Allows Users to sort the Rankings page by different attributes depending on which one they
   * select
   */
  sortRankings(sortType) {
    console.log(sortType);
    if (sortType === 'min') {
      this.allRankings.sort( (a, b) => b.avgMinutes - a.avgMinutes);
    } else if (sortType === 'cal') {
      this.allRankings.sort( (a, b) => b.avgCalories - a.avgCalories);
    } else if (sortType === 'minGoal') {
      this.allRankings.sort( (a, b) => b.minuteGoal - a.minuteGoal);
    } else if (sortType  === 'calGoal') {
      this.allRankings.sort( (a, b) => b.calorieGoal - a.calorieGoal);
    }
    for (let i = 0; i < this.allRankings.length; i++) {
      this.allRankings[i].rank = (i + 1);
      this.filteredRankings = this.allRankings;
    }
  }

  /* I first build everything on the Angular side before realizing there was supposed to be a new method in
  the PAService to return the averages so this was my old method.
  buildAllRankings(): void {
    for (let i = 0; i < this.allUsers.length; i++) {
      // console.log('first name is: ' + this.allUsers[i].firstName);
      // console.log('last name is: ' + this.allUsers[i].lastName);
      let totalMinutes = 0;
      let totalCalories = 0;
      this.parecordService.getAll(this.allUsers[i].username).subscribe(
        allPARecords => {
          console.log(allPARecords);
          if (allPARecords.length > 0) {
            console.log(allPARecords[0].createdByUsername);
            for (let rec = 0; rec < allPARecords.length; rec++) {
              totalMinutes += allPARecords[rec].minutes;
              totalCalories += allPARecords[rec].calories;
            }
            let newRankingEntity: RankingEntity;
            newRankingEntity = {
              calorieGoal: this.allUsers[i].caloriegoal,
              minuteGoal: this.allUsers[i].minutegoal,
              avgCalories: Math.floor(totalCalories / allPARecords.length),
              avgMinutes: Math.floor(totalMinutes / allPARecords.length),
              username: this.allUsers[i].username,
              first: this.allUsers[i].firstName,
              last: this.allUsers[i].lastName,
            };
            // console.log(newRankingEntity);
            this.allRankings.push(newRankingEntity);
            this.allRankings.sort( (a, b) => b.avgMinutes - a.avgMinutes);
            // console.log(this.allRankings);
          }
          },
        err => {
          this.notifservice.showNotif('error getting all PARecords for a user')
        }
      );
    }
    // sort here or call sorting function here idk?
    // this.allRankings.sort( (a, b) => a.avgMinutes - b.avgMinutes);
  } */

}
