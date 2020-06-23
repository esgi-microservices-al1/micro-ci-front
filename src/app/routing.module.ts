import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import {SchedulerContainer} from './scheduler';


const routes: Routes = [{
  path: '',
  component: UsersContainer
}, {
  path: 'scheduler',
  component: SchedulerContainer
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
