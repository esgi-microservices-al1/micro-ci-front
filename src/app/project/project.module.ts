import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { CreateProjectComponent } from './create-project/create-project.component';



@NgModule({
  declarations: [ProjectComponent, CreateProjectComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
