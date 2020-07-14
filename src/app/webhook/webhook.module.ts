import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePlatformComponent } from './components/liste-platform/liste-platform.component';
import { PlatformContainerComponent } from './container/platform-container/platform-container.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {SharedModule} from '../shared';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListePlatformComponent, PlatformContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    BrowserModule,
    FormsModule

  ]

})
export class WebhookModule { }
