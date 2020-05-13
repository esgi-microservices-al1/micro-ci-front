import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NotificationsContainer } from './index';

@NgModule({
  declarations: [
      NotificationsContainer,
  ],
  imports: [
    SharedModule
  ]
})
export class NotificationsModule { }
