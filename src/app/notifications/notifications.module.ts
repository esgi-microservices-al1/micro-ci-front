import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NotificationsContainer } from './container/notifications.container';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectService } from './services/projects.service';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  declarations: [
      NotificationsContainer,
      ProjectsListComponent,
      ProjectDetailsComponent,
  ],
  providers: [
    ProjectService,
  ],
  imports: [
    SharedModule
  ],
})
export class NotificationsModule { }
