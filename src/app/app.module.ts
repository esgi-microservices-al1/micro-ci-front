import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { NotificationsModule } from './notifications';
import {EventsBuildComponent} from "./events/events-build/events-build.component";
import {MatTableModule} from "@angular/material/table";


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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
