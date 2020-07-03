import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import { NotificationsContainer } from './notifications';
import { EventsBuildComponent } from './events/events-build/events-build.component';


const routes: Routes = [{
  path: '',
  component: UsersContainer
  },
  {
    path: 'notifications',
    component: NotificationsContainer
  },
  { path: 'build' ,
    component: EventsBuildComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
