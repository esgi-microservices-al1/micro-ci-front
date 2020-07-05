import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ci-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  tableHeaders: string[] = ['_id', 'label', 'git_url', 'git_host', 'enable'];

  constructor(private projectService: ProjectService, private route: Router) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject() {
    this.projectService.getAllProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }
}
