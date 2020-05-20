import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {SchedulerService} from '../../services/scheduler.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-scheduler',
  templateUrl: './create-scheduler.component.html',
  styleUrls: ['./create-scheduler.component.scss']
})
export class CreateSchedulerComponent implements OnInit {

  constructor(
    private schedulerService: SchedulerService,
    private formBuilder: FormBuilder,
  ) {
    this.scheduleForm = this.formBuilder.group({
      projectName: [{ value: '', disabled: true }],
      branchName: [{ value: '', disabled: true }],
      frequencyUnit: [{ value: '', disabled: true }],
      frequency: [{ value: '', disabled: true }],
      startDate: [{ value: '', disabled: true }],
      submit: [{ value: '', disabled: true }]
    });
  }

  scheduler;
  scheduleForm;


  ngOnInit(): void {
    this.scheduler = this.schedulerService.getSchedules();
  }

  setDisableForm(value: boolean): void {
    if (value) {
      this.scheduleForm.disable();
    } else {
      this.scheduleForm.enable();
    }
  }

  onSubmit(schedulerData) {
    // TODO : Save the data in the model and send them to the list
    this.scheduleForm.reset();
    this.setDisableForm(true);
    console.warn('Your scheduler has been created', schedulerData);
  }
}
