import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.projectForm = this.fb.group({
      label: [''],
      gitUrl: [''],
      storageUrl: ['']
    });
  }

  ngOnInit(): void {
  }

  submitProject() {
    this.projectService.createProject(this.projectForm);
    return true;
  }

}
