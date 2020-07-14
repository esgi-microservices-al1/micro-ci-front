import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project.model';

@Component({
  selector: 'ci-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  project: Project = {
    _id: '5f09a2e88158385ce934900b',
    label: 'Project 1',
    access_token: 'fezfgzr',
    branches: ['master', 'develop', 'demo'] as Array<string>,
    enable: true,
    git_host: 'Github',
    git_url: 'vfs,mbv,rmbrôbgr'
  } as Project;

  branchesTableHeader = ['branches'];

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    this.projectService.getProject(this.route.snapshot.paramMap.get('id'))
      .subscribe((project: Project) => {
        console.log(project);
        this.project = project;
      }
    );
  }

  refreshBranches() {
    this.projectService.getBranches(this.project._id)
      .subscribe((project: Project) => {
        this.project = project;
      }
    );
  }

  goToSchedules() {
    localStorage.setItem('selectedProject', JSON.stringify(this.project));
    this.router.navigateByUrl('/scheduler');
  }
}
