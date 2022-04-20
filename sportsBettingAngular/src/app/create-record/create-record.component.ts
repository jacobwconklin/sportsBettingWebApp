import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PAType } from '../_models/PAType';
import { FormControl } from '@angular/forms';
import { PArecordService } from '../_services/parecord.service';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {

  display = 'display';
  createdDate: Date;
  exerciseDate: Date;
  minutes: number;
  calories: number;
  activityType: PAType;
  cantEditDate: boolean;
  activityControl = new FormControl(0);
  calorieControl = new FormControl(0);
  minuteControl = new FormControl(0);
  dateControl = new FormControl(0);
  creationDate: Date;

constructor(private route: ActivatedRoute,
            private parecordservice: PArecordService,
            private notifService: NotificationService ) {
  // this.minuteControl.registerOnChange(() => {this.minutes =  this.minuteControl.value; console.log('changed Minutes'); } );
}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Check if any query Parameters are passed in
      if (params.createdDate) {
        // console.log(params);
        // console.log(params.minutes);
        this.createdDate = params.createdDate;
        this.dateControl.setValue(params.exerciseDate);
        this.exerciseDate = params.exerciseDate;
        this.minutes = params.minutes;
        this.minuteControl.setValue(this.minutes);
        this.calories = params.calories;
        this.calorieControl.setValue(this.calories);
        this.activityType = params.activityType;
        this.activityControl.setValue(this.activityType);
        this.cantEditDate = true;

      } else {
        // this.date
        this.createdDate = new Date(Date.now());
        this.cantEditDate = false;
      }
    });
    this.minuteControl.valueChanges.subscribe( () => {this.minutes =  this.minuteControl.value; } );
    this.calorieControl.valueChanges.subscribe(() => {this.calories = this.calorieControl.value; } );
    // this.minuteControl.registerOnChange(() => {this.minutes =  this.minuteControl.value; console.log('changed Minutes'); } );
  }

  saveRecord(): void {
    // console.log('clicked save record');
    // set all of the fields to be the correct value if the value in the form controls
    // is needed.
    this.activityType = this.activityControl.value;
    // Date control holds the exercise Date
    this.exerciseDate = this.dateControl.value;
    // from here need to call the PARecord service with a modified addRecord method
    // then in the node side I will either make changes in an existing record
    // of if I don't find one, create a new record with the supplied information.
    this.parecordservice.add(this.calories, this.minutes, this.activityType, this.exerciseDate, this.createdDate).subscribe(
      result => { this.notifService.showNotif('Recorded', 'acknowledge'); },
      err => {this.notifService.showNotif('Error adding record'); }
    );

  }

}
