import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PARecord} from '../_models/PARecord';
import {NotificationService} from '../_services/notification.service';
import { UserService } from '../_services/user.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parecord-component',
  templateUrl: './parecord.component.html',
  styleUrls: ['./parecord.component.css']
})
export class ParecordComponent implements OnInit {
  @Input() parecord: PARecord;
  @Output() deleteEvent = new EventEmitter<Date>();

   mode = 'determinate';

   bufferValue = 0;

   activities = ['directions_walk', 'directions_run', 'directions_bike'];

   calColor = 'warn';
   color = 'primary';

   activity = this.activities[0];
   calprogressvalue;
   minprogressvalue;

  constructor(private notifService: NotificationService, private userService: UserService) { }

  delete(date) {
    // console.log('date is: ' + date);
    this.deleteEvent.emit(date);
  }

  notImplemented(message) {

    this.notifService.notImplementedWarning(message);
  }

  ngOnInit() {
    this.activity = this.activities[this.parecord.activityType];

    // TODO:  use userService to get the goal values corresponding the username that created the parecord and then use the obtained values to properly visualize the progress towards the goal.
    this.userService.getgoals(this.parecord.createdByUsername).subscribe(result => {
      this.calprogressvalue = Math.floor(this.parecord.calories / result.caloriegoal * 100);
      this.minprogressvalue = Math.floor(this.parecord.minutes / result.minutegoal * 100);
     },
     err => {
       this.notifService.showNotif('error occurred retrieving goals');
     });

    // console.log(this.parecord);
  //
    //
  }


}
