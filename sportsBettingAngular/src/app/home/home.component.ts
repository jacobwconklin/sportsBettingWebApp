import {Component, OnDestroy, OnInit} from '@angular/core';
import {first, mergeMap} from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import {NotificationService} from '../_services/notification.service';
import {PARecord} from '../_models/PARecord';
import {PArecordService} from '../_services/parecord.service';
import {UserService} from '../_services/user.service';
import { AuthService } from '../_services/auth.service';


@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {



  parecords: PARecord[] = [];


  constructor(
    private parecordservice: PArecordService,

    private notifService: NotificationService,

    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.authservice.currentUser.subscribe(
      user => { this.loadAllPArecords(user.username); },
      err => { this.notifService.showNotif('couldnt find current user'); }
    );
      }

  private loadAllPArecords(username: string) {
    // console.log('called load all');
    this.parecordservice.getAll(username).subscribe(
         parecords => {
           // console.log('got back something' + parecords[0].createdByUsername);
           this.parecords = parecords;
         },
        error => {
            this.notifService.showNotif(error.toString(), 'warning'); });
  }

  /* createPARecord() {
    this.parecordservice.add().pipe(first()).subscribe(
      () => {
        this.notifService.showNotif('Record Added', 'acknowledge');
        this.parecords = null;
        this.loadAllPArecords();
        }, error => {
        this.notifService.showNotif(error); });
  } */

  refresh() {
    this.loadAllPArecords(this.authservice.currentUserValue.username);
  }

  deletePARecord(date) {

    // this.userService.deleteActivity(date);
    // console.log('now date is' + date);
    const prevLength = this.parecords.length;
    this.parecordservice.delete(date).pipe(first()).subscribe( () => {
      this.parecords = null;
      this.ngOnInit();
    });
  }

}

