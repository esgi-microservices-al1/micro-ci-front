import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';
import {SchedulerService} from '../../services/scheduler.service';
import {ScheduleModelDto, IntervalModel, FrequencyUnit} from '../../model';
import {ToastService} from '../../services/toast.service';
import {Project} from '../../../project/model/project.model';
import {DatePipe} from '@angular/common';
import {MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {Router} from '@angular/router';


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
      formatMatcher : 'basic'
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
  @Output() updateScheduleList = new EventEmitter();
  project: Project;

  scheduleForm;

  frequencyUnits = Object.keys(FrequencyUnit);
  branchName: string ;
  frequency = 1;
  startDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  frequencyUnit: string = FrequencyUnit.DAY.toString();

  scheduleToUpdate = null;

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  constructor(
    private schedulerService: SchedulerService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private datePipe: DatePipe
  ) {
    this.project = JSON.parse(localStorage.getItem('selectedProject')) as Project;
    // TODO add guard for this
    if ( this.project != null ) {
      this.branchName = this.project.branches[0];
      this.resetFormulaire();
    }
  }

  ngOnInit(): void {
    console.log(this.project.label);
  }

  compareFunction(o1: any, o2: any) {
    return (o1.name === o2.name && o1.id === o2.id);
  }

  setDisableForm(): void {
    this.scheduleToUpdate = null;
  }

  onSubmit(schedulerData) {
    if (this.scheduleForm.invalid) {
      this.toastService.createToast('Invalid Schedule', 'OK');
      return;
    }
    const scheduleDto = this.parseFormData(schedulerData);

    // TODO create method like createSchedule
    if (this.scheduleToUpdate != null) {
        console.log('let\'s update this schedule', scheduleDto);
        scheduleDto.project = this.project._id;
        this.schedulerService.updateSchedule(this.scheduleToUpdate.id, scheduleDto).subscribe((res) => {
          this.updateScheduleList.emit();
          console.warn('Your schedule has been updated', schedulerData);
          this.scheduleToUpdate = null;
        },
        error => {
          console.log(error);
        }
      );
    } else { // TODO create method like updateSchedule
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
    if ( this.project != null)  {
      this.scheduleToUpdate = schedule;
      this.scheduleForm.controls.schedulerName.setValue(schedule.name);
      this.scheduleForm.controls.projectName.setValue(this.project.label);
      this.scheduleForm.controls.branchName.setValue(schedule.branch);
      this.scheduleForm.controls.frequencyUnit.setValue(schedule.interval.unity);
      this.scheduleForm.controls.frequency.setValue(schedule.interval.frequency);
      this.scheduleForm.controls.startDate.setValue(schedule.start_date);
    }
  }

  resetFormulaire() {
    this.scheduleForm = this.formBuilder.group({
      schedulerName: [{value: '', disabled: false}, Validators.required],
      projectName: [{ value: this.project.label, disabled: true}, Validators.required],
      branchName: [{ value: this.branchName, disabled: false }, Validators.required],
      frequencyUnit: [{ value: this.frequencyUnit , disabled: false }],
      frequency: [{ value: this.frequency , disabled: false }, [Validators.required, Validators.min(0)]],
      startDate: [{ value: this.startDate , disabled: false }, Validators.required]
    });
  }

  private parseFormData(schedulerData): ScheduleModelDto {
    const interval = new IntervalModel(schedulerData.frequencyUnit, schedulerData.frequency);

    const startDate = typeof  schedulerData.startDate === 'string' ?
                              schedulerData.startDate :
                              schedulerData.startDate.toISOString();


    return new ScheduleModelDto( schedulerData.schedulerName, this.project._id,
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

  buttonContentName() {
    return this.scheduleToUpdate == null ? 'Create new Schedule' : 'Update schedule';
  }

}
