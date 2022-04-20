import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../_services/notification.service';
import {UserService} from '../_services/user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  calorieGoal: number;
  minuteGoal: number;

  // HTML notes: two cards, top has two seek bars, bottom has two inputs with adjustments, and then a save button
  // and notification after saving!
  constructor(
    private notifService: NotificationService,
    private userservice: UserService,
    private authenticationService: AuthService
  ) { }

  ngOnInit(): void {
    // Get actual calorieGoal and minuteGoal values for the user
    this.userservice.getgoals(this.authenticationService.currentUserValue.username).subscribe(
      value => {
        this.calorieGoal = value.caloriegoal;
        this.minuteGoal = value.minutegoal;
      },
      () => {
        this.notifService.showNotif('error getting goals');
      }
    );
  }


  saveGoals(): void {
    // account for differences in textboxs
    // this.calorieGoal =

    // Get goals through user service component.
    this.userservice.setgoals(this.calorieGoal, this.minuteGoal,
      this.authenticationService.currentUserValue).subscribe(
      () => {
        this.notifService.showNotif('saved', 'acknowledge');
      },
      () => {
        this.notifService.showNotif('error occured setting goals', );
      }
    );
  }
}
