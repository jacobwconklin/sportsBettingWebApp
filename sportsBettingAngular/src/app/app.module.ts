import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParecordComponent } from './parecord/parecord.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { SettingsComponent } from './settings/settings.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { RankingsComponent } from './rankings/rankings.component';
import { RankingEntitiesComponent } from './rankingentities/rankingentitie.component';
import { IgxAvatarModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    ParecordComponent,
    AdminComponent,
    RegisterComponent,
    SettingsComponent,
    CreateRecordComponent,
    RankingsComponent,
    RankingEntitiesComponent
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
