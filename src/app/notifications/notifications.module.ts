import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NotificationsContainer } from './container/notifications.container';
import { ProjectsListComponent } from './components/projects-list/projects-list';
import { ProjectService } from './services/projects.service';
import { ProjectDetailsComponent } from './components/project-details/project-details';

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
