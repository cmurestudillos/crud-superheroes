import { Injectable } from '@angular/core';
// Angular Material
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  }

  showSuccessMessage(msg:string) {
    this.snackBar.open(msg, 'Cerrar',this.config);
  }

  showErrorMessage(msg: string) {
    this.snackBar.open(msg, 'Cerrar', this.config);
  }
}
