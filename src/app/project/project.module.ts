import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './container/project.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { SharedModule } from '../shared';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { NotificationsModule } from '../notifications';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectComponent, CreateProjectComponent, ProjectListComponent, ProjectViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    NotificationsModule,
    RouterModule
  ]
})
export class ProjectModule { }
