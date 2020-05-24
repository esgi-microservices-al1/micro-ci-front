import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import { EventsBuildComponent } from './events/events-build/events-build.component';


const routes: Routes = [
  { path: 'users', component: UsersContainer},
  { path: 'build' , component: EventsBuildComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
