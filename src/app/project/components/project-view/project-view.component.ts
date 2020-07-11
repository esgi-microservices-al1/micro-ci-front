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
  project: Project;

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
