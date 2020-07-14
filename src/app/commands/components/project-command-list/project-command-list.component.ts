import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/commands/model/commande.model';

@Component({
  selector: 'ci-project-command-list',
  templateUrl: './project-command-list.component.html',
  styleUrls: ['./project-command-list.component.scss']
})
export class ProjectCommandListComponent {

  constructor() { }

  columns: string[] = ['id', 'name'];

  @Input()
  projects: Project[];

  @Output()
  selectedProject: EventEmitter<Project> = new EventEmitter<Project>();


  selectProject(project: Project) {
    this.selectedProject.emit(project);
  }

}
