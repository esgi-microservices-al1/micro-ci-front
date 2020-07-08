import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePlatformComponent } from './components/liste-platform/liste-platform.component';
import { PlatformContainerComponent } from './container/platform-container/platform-container.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {SharedModule} from '../shared';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [ListePlatformComponent, PlatformContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule

  ]
})
export class WebhookModule { }
