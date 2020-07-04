import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'ci-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  tableHeaders: string[] = ['_id','label', 'git_url', 'enable'];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject() {
    this.projectService.getAllProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

}
