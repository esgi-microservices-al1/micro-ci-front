import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCommandListComponent } from './components/project-command-list/project-command-list.component';
import { SharedModule } from '../shared';
import { ProjectcommandContainer } from './container/projectcommand.container';
import { CommandDetailsComponent } from './components/command-details/command-details.component';



@NgModule({
  declarations: [
    ProjectcommandContainer,
    ProjectCommandListComponent,
    CommandDetailsComponent
  ],
  imports: [
    SharedModule
  ]
  
})
export class CommandsModule { }
