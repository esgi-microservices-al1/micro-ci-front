import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NotificationsContainer } from './container/notifications.container';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectService } from './services/projects.service';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
  ],
})
export class NotificationsModule { }
