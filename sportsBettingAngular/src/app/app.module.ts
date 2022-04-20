import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CreateRecordComponent } from './create-record/create-record.component';
import { IgxAvatarModule } from 'igniteui-angular';
import { BetComponent } from './bet/bet.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FootballbetsComponent } from './footballbets/footballbets.component';
import { Basketballbets } from './basketballbets/basketballbets';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { BaseballbetsComponent } from './baseballbets/baseballbets.component';
import { GamecardsComponent } from './gamecards/gamecards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    AdminComponent,
    RegisterComponent,
    CreateRecordComponent,
    ConfirmationComponent,
    LeaderboardComponent,
    Basketballbets,
    FootballbetsComponent,
    BaseballbetsComponent,
    BetComponent,
    GamecardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxAvatarModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
