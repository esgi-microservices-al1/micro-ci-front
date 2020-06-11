import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {SchedulerService} from '../../services/scheduler.service';
import {ScheduleModelDto} from "../../model/schedule.model";
import {IntervalModel} from "../../model/interval.model";

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
      schedulerName: [{value: '', disabled: false}],
      projectName: [{ value: '', disabled: false }],
      branchName: [{ value: '', disabled: false }],
      frequencyUnit: [{ value: '', disabled: false }],
      frequency: [{ value: '', disabled: false }],
      startDate: [{ value: '', disabled: false }],
      submit: [{ value: '', disabled: false }]
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
    this.setDisableForm(false);
    let interval: IntervalModel;
    interval = new IntervalModel(schedulerData.frequencyUnit, schedulerData.frequency);
    let scheduleDto: ScheduleModelDto;
    scheduleDto = new ScheduleModelDto(schedulerData.schedulerName,
      schedulerData.projectName,
      schedulerData.projectBranch,
      interval,
      schedulerData.startDate);
    console.log(scheduleDto.toString());
    this.schedulerService.postSchedule(scheduleDto).subscribe();
    console.warn('Your scheduler has been created', schedulerData);
  }
}
