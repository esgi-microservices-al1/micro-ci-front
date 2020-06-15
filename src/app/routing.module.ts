import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  {
    path: '',
    component: UsersContainer
  },
  {
    path: 'project',
    component: ProjectComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
