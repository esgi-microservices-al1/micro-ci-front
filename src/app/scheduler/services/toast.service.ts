import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private snackBar: MatSnackBar) {

  }

  createToast(message: string, action: string, time = 2000) {
    return this.snackBar.open(message, action, {
      duration: time,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}
