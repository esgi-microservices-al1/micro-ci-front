import {Component} from '@angular/core';
import {Project} from '../models/project.model';
import {ProjectService} from '../services/projects.service';
import {UserNotification} from '../models/userNotification.model';

@Component({
  templateUrl: 'notifications.container.html'
})
export class NotificationsContainer {
  projects: Project[];
  users: UserNotification[];

  selectedProject: Project;

  constructor(private projectService: ProjectService) {
    this.projectService.get().subscribe((projects: Project[]) => {
      this.projects = [...projects];
    });

    this.projectService.getAllUsers().subscribe((users: UserNotification[]) => {
      this.users = [...users];
    });
  }

  getSelectedProject(event: Project): void {
    this.selectedProject = event;
  }
}
