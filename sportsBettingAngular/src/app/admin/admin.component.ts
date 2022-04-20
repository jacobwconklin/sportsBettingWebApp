import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('admin component');
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
