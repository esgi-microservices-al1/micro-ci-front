import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './container/project.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [ProjectComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectModule { }
