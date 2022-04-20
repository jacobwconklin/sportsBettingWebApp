import { Component, Input, OnInit } from '@angular/core';
import { PARecord } from '../_models/PARecord';
import { RankingEntity } from '../_models/RankingEntity';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-rankingentities',
  templateUrl: './rankingentitie.component.html',
  styleUrls: ['./rankingentitie.component.css']
})
export class RankingEntitiesComponent implements OnInit {
  @Input() ranking: RankingEntity;

  mode = 'determinate';
  calColor = 'warn';
  minColor = 'primary';
  calprogressvalue: number;
  minprogressvalue: number;
  iconBackColor;
  iconLetterColor;
  randomColors: string[] = ['blue', 'darkBlue', 'mediumblue', 'mediumslateblue', 'midnightblue',
    'forestgreen', 'seagreen', 'limegreen'];

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.calprogressvalue = Math.floor(this.ranking.avgCalories / this.ranking.calorieGoal * 100);
    this.minprogressvalue = Math.floor(this.ranking.avgMinutes / this.ranking.minuteGoal * 100);

    // Set color randomly for the icon, unless it is for the current user
    if (this.authservice.currentUserValue.username === this.ranking.username) {
      this.iconBackColor = 'black';
      this.iconLetterColor = 'gold';
    } else {
      this.iconBackColor = this.randomColors[Math.floor(Math.random() * 7)];
      this.iconLetterColor = 'white';
    }


  }

}
