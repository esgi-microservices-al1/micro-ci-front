import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {EventService} from './services/event.service';
import {EventsBuildComponent} from './eventsComponent/events-build.component';

@NgModule({
  declarations: [
    EventsBuildComponent
  ],
  providers: [
    EventService
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
  export class EventsModule { }
