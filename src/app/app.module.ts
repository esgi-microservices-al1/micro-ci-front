import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { ProjectModule } from './project';
import { NotificationsModule } from './notifications';
import {EventsModule} from './events/events-module';
import {SchedulerModule} from './scheduler';

import { HttpClientModule } from '@angular/common/http';
import {SchedulerService} from "./scheduler/services/scheduler.service";



@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,

    CoreModule,
    ProjectModule,
    UsersModule,
    NotificationsModule,
    EventsModule,
    SchedulerModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppContainer]
})
export class AppModule { }
