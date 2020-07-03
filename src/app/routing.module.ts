import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import { NotificationsContainer } from './notifications';
import { EventsBuildComponent } from './events/eventsComponent/events-build.component';


const routes: Routes = [{
  path: '',
  component: UsersContainer
  },
  {
    path: 'notifications',
    component: NotificationsContainer
  },
  { path: 'events' ,
    component: EventsBuildComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
