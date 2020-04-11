import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';


const routes: Routes = [{
  path: '',
  component: UsersContainer
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
