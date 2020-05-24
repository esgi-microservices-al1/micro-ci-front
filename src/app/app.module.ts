import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule, UsersContainer } from './users';
import { Routes, RouterModule } from '@angular/router';
import {EventsBuildComponent} from "./events/events-build/events-build.component";
import {MatTableModule} from "@angular/material/table";


const routes: Routes = [
  { path: 'users', component: UsersContainer},
  { path: 'build' , component: EventsBuildComponent},
];

@NgModule({
  declarations: [
    AppContainer,
    EventsBuildComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    ),


    CoreModule,

    UsersModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
