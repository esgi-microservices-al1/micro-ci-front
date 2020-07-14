import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {RunnerStatus} from '../models/runner.status';
import {RunnerStatusService} from '../services/runner-status.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ci-runner-status',
  templateUrl: './runner-status.container.html'
})
export class RunnerStatusContainer implements OnInit, OnDestroy {

  runningImages: RunnerStatus[];
  isError = false;
  isLoading = false;
  processSubscription: Subscription;
  refreshInterval;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private runnerStatusService: RunnerStatusService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.refreshProcess();
  }

  getProcesses() {
    if (this.processSubscription) {
      this.processSubscription.unsubscribe();
    }
    this.processSubscription = this.runnerStatusService.getStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        runningImages => {
          this.isLoading = false;
          this.runningImages = runningImages.datas;
          this.isError = false;
        },
        error => {
          this.isLoading = false;
          this.isError = true;
          clearInterval(this.refreshInterval);
        }
      );
  }

  refreshProcess() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    this.getProcesses();
    this.refreshInterval = setInterval(() => {
      this.getProcesses();
    }, 5000);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    clearInterval(this.refreshInterval);
    this.destroy$.complete();
  }

}
