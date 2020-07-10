import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, Validators} from '@angular/forms';

import {SchedulerService} from '../../services/scheduler.service';
import {Schedule, ScheduleModelDto} from '../../model/schedule.model';
import {IntervalModel} from '../../model/interval.model';
import {ToastService} from '../../services/toast.service';
import {SchedulerContainer} from '../..';
import {Project} from '../../../project/model/project.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-scheduler',
  templateUrl: './create-scheduler.component.html',
  styleUrls: ['./create-scheduler.component.scss']
})
export class CreateSchedulerComponent implements OnInit {

  @Input() projects: Project[];
  scheduleForm;
  frequencyUnits = [
    'DAY',
    'WEEK',
    'MONTH',
    'HOUR',
    'MINUTE'
  ];
  projectList = [
    'myProject1',
    'myProject2',
    'myProject3',
    'myProject4',
  ];
  today = new Date();
  tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));
  @Output() updateScheduleList = new EventEmitter();
  scheduleToUpdate = null;
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  constructor(
    private schedulerService: SchedulerService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {

    this.scheduleForm = this.formBuilder.group({
      schedulerName: [{value: '', disabled: false}, Validators.required],
      projectName: [{ value: '', disabled: false }, Validators.required],
      branchName: [{ value: '', disabled: false }, Validators.required],
      frequencyUnit: [{ value: '', disabled: false }],
      frequency: [{ value: '', disabled: false }, [Validators.required, Validators.min(0)]],
      startDate: [{ value: '', disabled: false }, Validators.required],
      submit: [{ value: '', disabled: false }]
    });
  }

  ngOnInit(): void {
    console.log({project : this.projects});
  }

  compareFunction(o1: any, o2: any) {
    // tslint:disable-next-line:triple-equals
    return (o1.name == o2.name && o1.id == o2.id);
  }

  setDisableForm(): void {
    this.scheduleToUpdate = null;
    this.scheduleForm.reset();
  }

  onSubmit(schedulerData) {
    console.log('schedulerData', schedulerData);
    if (this.scheduleForm.invalid) {
      this.toastService.createToast('Invalid Schedule', 'OK');
      return;
    }
    this.scheduleForm.reset();
    this.formDirective.resetForm();
    let interval: IntervalModel;
    interval = new IntervalModel(schedulerData.frequencyUnit, schedulerData.frequency);
    let scheduleDto: ScheduleModelDto;
    scheduleDto = new ScheduleModelDto(schedulerData.schedulerName,
      schedulerData.projectName, // TODO : put @Input project in this field
      schedulerData.branchName,
      interval,
      schedulerData.startDate);
    // console.log(scheduleDto.toString());
    if (this.scheduleToUpdate != null) {
        console.log('let\'s update this schedule', scheduleDto);
        this.schedulerService.updateSchedule(this.scheduleToUpdate.id, scheduleDto).subscribe((res) => {
          this.updateScheduleList.emit();
          console.warn('Your schedule has been updated', schedulerData);
          this.scheduleToUpdate = null;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.schedulerService.postSchedule(scheduleDto).subscribe((res) => {
        this.updateScheduleList.emit();
        console.warn('Your schedule has been created', schedulerData);
      },
      error => {
        console.log(error);
      }
      );
      this.setDisableForm();
    }
  }

  updateSchedule(schedule) {
    this.scheduleToUpdate = schedule;
    this.scheduleForm.controls.schedulerName.setValue(schedule.name);
    this.scheduleForm.controls.projectName.setValue(schedule.project);
    this.scheduleForm.controls.branchName.setValue(schedule.branch);
    this.scheduleForm.controls.frequencyUnit.setValue(schedule.interval.unity);
    this.scheduleForm.controls.frequency.setValue(schedule.interval.frequency);
    this.scheduleForm.controls.startDate.setValue(schedule.start_date);
  }


  deleteSchedule(schedule) {
    this.toastService.createToast('Delete ' + schedule.name + ' ?', 'Yes', 6000).onAction().subscribe(() => {
      this.schedulerService.deleteSchedule(schedule.id).subscribe((res) => {
        console.warn('Your schedule has been deleted', schedule);
        this.updateScheduleList.emit();
        this.setDisableForm();
      });
    });
  }
}
