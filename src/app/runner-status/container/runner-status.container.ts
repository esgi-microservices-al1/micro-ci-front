import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';
import {RunnerStatus} from '../models/runner.status';
import {RunnerStatusService} from '../services/runner-status.service';
import {takeUntil} from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'ci-runner-status',
  templateUrl: './runner-status.container.html'
})
export class RunnerStatusContainer implements OnInit, OnDestroy {

  runningImages: RunnerStatus[];
  isError: boolean = false;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private runnerStatusService: RunnerStatusService) { }

  ngOnInit(): void {
    this.runnerStatusService.getStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        runningImages => {
          this.runningImages = runningImages.datas;
          this.isError = false;
        },
        error => this.isError = true
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
