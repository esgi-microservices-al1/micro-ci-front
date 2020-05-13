import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { NotificationsModule } from './notifications/notifications.module';


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
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
