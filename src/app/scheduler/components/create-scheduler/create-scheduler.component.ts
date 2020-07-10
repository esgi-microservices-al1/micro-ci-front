import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';
import {SchedulerService} from '../../services/scheduler.service';
import { ScheduleModelDto, IntervalModel} from '../../model';
import {ToastService} from '../../services/toast.service';
import {Project} from '../../../project/model/project.model';
import {DatePipe} from "@angular/common";
import {MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatDateFormats} from "@angular/material/core";


export const GRI_DATE_FORMATS: MatDateFormats = {
  ...MAT_NATIVE_DATE_FORMATS,
  display: {
    ...MAT_NATIVE_DATE_FORMATS.display,
    dateInput:
      {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      timeZone: 'Europe/Paris',
        formatMatcher :'basic'
    } as Intl.DateTimeFormatOptions,
  }
};


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-scheduler',
  templateUrl: './create-scheduler.component.html',
  styleUrls: ['./create-scheduler.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: GRI_DATE_FORMATS , },
  ]
})
export class CreateSchedulerComponent implements OnInit {

  branch = ['master', 'develop'];
  scheduleForm;

  frequencyUnits = [
    'DAY',
    'WEEK',
    'MONTH',
    'HOUR',
    'MINUTE'
  ];

  @Input() project:  Project = {
    _id: '1',
    label: 'myProject1',
    git_url: 'https://toto.git',
    access_token: 'eeee',
    enable: true,
    git_host: 'github',
    branches: this.branch} as Project;

  @Output() updateScheduleList = new EventEmitter();



  branchName: string = this.project.branches[0];
  frequency: number = 1;
  startDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  frequencyUnit : string = this.frequencyUnits[0];

  scheduleToUpdate = null;

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  constructor(
    private schedulerService: SchedulerService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private datePipe: DatePipe
  ) {
    this.resetFormulaire();
  }

  ngOnInit(): void {
    console.log(this.project.label);
  }

  compareFunction(o1: any, o2: any) {
    return (o1.name == o2.name && o1.id == o2.id);
  }

  setDisableForm(): void {
    this.scheduleToUpdate = null;
    this.scheduleForm.reset();
  }

  onSubmit(schedulerData) {

    console.log("projectName : ", schedulerData.projectName);
    console.log('schedulerData', schedulerData);
    if (this.scheduleForm.invalid) {
      this.toastService.createToast('Invalid Schedule', 'OK');
      return;
    }
    const scheduleDto = this.parseFormData(schedulerData);

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

    this.resetFormulaire();
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

  resetFormulaire() {
    this.scheduleForm = this.formBuilder.group({
      schedulerName: [{value: '', disabled: false}, Validators.required],
      projectName: [{ value: this.project.label, disabled: true}, Validators.required],
      branchName: [{ value: this.branchName, disabled: false }, Validators.required],
      frequencyUnit: [{ value: this.frequencyUnit ,disabled: false }],
      frequency: [{ value: this.frequency , disabled: false }, [Validators.required, Validators.min(0)]],
      startDate: [{ value: this.startDate , disabled: false }, Validators.required]
    });
  }

  private parseFormData(schedulerData): ScheduleModelDto {
    const interval = new IntervalModel(schedulerData.frequencyUnit, schedulerData.frequency);

    let startDate = typeof schedulerData.startDate === 'string'?
                              schedulerData.startDate :
                              schedulerData.startDate.toISOString();


    return new ScheduleModelDto( schedulerData.schedulerName, this.project.label,
                                  schedulerData.branchName, interval, startDate );
  }

  deleteSchedule(schedule) {
    this.toastService.createToast('Delete ' + schedule.name + ' ?', 'Yes', 6000).onAction().subscribe(() => {
      this.schedulerService.deleteSchedule(schedule.id).subscribe((res) => {
        console.warn('Your schedule has been deleted', schedule);
        this.updateScheduleList.emit();
        this.setDisableForm();
        this.resetFormulaire();
      });
    });
  }

  get getDateFormatted() {
    // this.datepipe.transform(this.startDate, 'dd/MM/yyyy');
    const formatted =  this.datePipe.transform(this.startDate, 'yyyy/dd/MM');
    console.log({formatted});
    return formatted;
  }


  buttonContentName(){
    return this.scheduleToUpdate == null ? 'Create new Schedule':'Update schedule';
  }

}
