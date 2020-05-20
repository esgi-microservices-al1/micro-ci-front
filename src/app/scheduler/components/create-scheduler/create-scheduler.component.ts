import {Component, OnInit, NgModule, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

NgModule( {

});
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'create-scheduler',
  templateUrl: './create-scheduler.component.html',
  styleUrls: ['./create-scheduler.component.scss']
})
export class CreateSchedulerComponent implements OnInit {
  scheduleForm: FormGroup;
  @Input() scheduleName: string;
  @Input() branchName: string;
  @Input() intervalUnit: string;
  @Input() frequency: bigint;
  @Input() startDate: Date;
  disableForm = true;

  ngOnInit(): void {
    this.setDisableForm(true);
  }

  setDisableForm(value: boolean): void {
    this.disableForm = value;
  }

  onClick(): void {
    // TODO : Get all the data and save them
    this.disableForm = false;
  }

}
