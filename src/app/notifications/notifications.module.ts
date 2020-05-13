import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NotificationsContainer } from './container/notifications.container';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectService } from './services/projects.service';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MatCheckboxModule } from '@angular/material/checkbox'

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
    SharedModule,
    MatCheckboxModule,
  ],
})
export class NotificationsModule { }
