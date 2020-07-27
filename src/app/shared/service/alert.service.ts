import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  success(data: string): void {
    this.snackBar.open(data, '✖', {
      duration: 7000,
      verticalPosition: 'top',
    });
  }

  errorMessage(data: string): void {
    this.snackBar.open(data, '✖', {
      duration: 7000,
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
}
