import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project.model';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  project: Project;
  branchesTableHeader = ["branches"]

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProject(this.route.snapshot.paramMap.get('id'))
      .subscribe((project: Project) => {
        console.log(project);
        this.project = project;
      }
    );
  }

}
