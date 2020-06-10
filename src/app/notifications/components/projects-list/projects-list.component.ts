import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Project} from '../../models/project.model';

@Component({
  selector: 'ci-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {

  columns: string[] = ['id', 'name'];

  @Input() projects: Project[] = [];
  @Output() selectedProject: EventEmitter<Project> = new EventEmitter<Project>();

  selectProject(project: Project): void {
    this.selectedProject.emit(project);
  }

}
