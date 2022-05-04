import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_services/auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {Role} from './_models/role';
import { Basketballbets } from './basketballbets/basketballbets';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FootballbetsComponent } from './footballbets/footballbets.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BaseballbetsComponent } from './baseballbets/baseballbets.component';

const routes: Routes = [{path: '', component: HomeComponent, canActivate: [AuthGuard]}, {path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  {path: 'confirm', component: ConfirmationComponent},
  {path: 'basketball', component: Basketballbets},
  {path: 'football', component: FootballbetsComponent},
  {path: 'baseball', component: BaseballbetsComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
