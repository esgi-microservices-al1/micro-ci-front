import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core';
import { UsersModule, UsersContainer } from './users';
import { EventsBuildComponent } from './events-build/events-build.component';
import { Routes, RouterModule } from '@angular/router';

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
      { enableTracing: true } // <-- debugging purposes only
    ),


    CoreModule,

    UsersModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule { }
