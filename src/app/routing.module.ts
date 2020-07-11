import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainer } from './users';
import { NotificationsContainer } from './notifications';
import { EventsBuildComponent } from './events/eventsComponent/events-build.component';
import { ProjectComponent } from './project/container/project.component';
import {SchedulerContainer} from './scheduler';
import { ProjectViewComponent } from './project/components/project-view/project-view.component';


const routes: Routes = [{
  path: '',
  component: UsersContainer
}, {
  path: 'notifications',
  component: NotificationsContainer
},
{ path: 'events' ,
  component: EventsBuildComponent
}, {
  path: 'scheduler',
  component: SchedulerContainer
}, {
  path: 'project',
  component: ProjectComponent
}, {
  path: 'project/:id',
  component: ProjectViewComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
