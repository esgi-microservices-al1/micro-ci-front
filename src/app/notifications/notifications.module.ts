import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NotificationsContainer } from './container/notifications.container';
import { ProjectsListComponent } from './components/projects-list/projects-list';
import { ProjectService } from './services/projects.service';

@NgModule({
  declarations: [
      NotificationsContainer,
      
      ProjectsListComponent
  ],
  providers: [
    ProjectService,
  ],
  imports: [
    SharedModule
  ],
})
export class NotificationsModule { }
