import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { NotificationsModule } from './notifications';
import {EventsModule} from './events/events-module';


@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,

    CoreModule,
    UsersModule,
    NotificationsModule,
    EventsModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
