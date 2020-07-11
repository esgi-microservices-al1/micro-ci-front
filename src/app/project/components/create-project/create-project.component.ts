import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project.model';
import { Project as NotifProject } from 'src/app/notifications/models/project.model';
import { ProjectService as NotificationService } from '../../../notifications/services/projects.service';

@Component({
  selector: 'ci-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  projectForm: FormGroup;
  project: Project;
  notifProject: NotifProject;

  constructor(private fb: FormBuilder, private projectService: ProjectService,
              private notifService: NotificationService) {
    this.projectForm = this.fb.group({
      label: [''],
      gitUrl: [''],
      gitHost: [''],
      accessToken: ['']
    });
  }

  ngOnInit(): void {
  }

  submitProject() {
    if (this.projectForm.invalid) {
      return;
    }
    this.projectService.createProject(this.projectForm.value)
      .subscribe((project: Project) => {
        this.project = project;
        alert('Project created!');
        window.location.reload();
        return;
      }, err => {
        return alert('An error occured during the process\n' + err);
      });
    this.notifProject.id = this.project._id;
    this.notifService.update(this.notifProject);
  }

}
