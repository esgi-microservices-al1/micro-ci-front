import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/projects.service';

@Component({
    templateUrl: 'notifications.container.html'
})
export class NotificationsContainer {
    projects: Project[];
    constructor(private projectService: ProjectService) {
        this.projectService.get().subscribe((projects: Project[]) => {
            this.projects = [...projects];
        });
    }
}
