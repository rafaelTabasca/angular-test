import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoadingService } from '../../services/loading/loading.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButton, ReactiveFormsModule, AsyncPipe, MatSnackBarModule]
})

export class AddUsersComponent {
  userForm = this.builder.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
    email: ['', [Validators.required, Validators.email]]
  });

  loading$: Observable<boolean>;


  constructor(private builder: FormBuilder, private loadingService: LoadingService, private _snackBar: MatSnackBar) {
    this.loading$ = this.loadingService.loading$;
  }

  submit() {
    this.loadingService.loadingOn();
    setTimeout(() => {
      this.loadingService.loadingOff();
      console.log('User added:', this.userForm.value);
      this.openSnackBar("User added successfully!", "Close");
      this.userForm.reset();
    }, 2000);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
