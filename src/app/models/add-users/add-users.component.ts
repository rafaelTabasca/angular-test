import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
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
  imports: [MatCardModule, MatInputModule, MatButton, ReactiveFormsModule, AsyncPipe]
})

export class AddUsersComponent {
  userForm = this.builder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  loading$: Observable<boolean>;


  constructor(private builder: FormBuilder, private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }

  submit() {
    this.loadingService.loadingOn();
    setTimeout(() => {
      this.loadingService.loadingOff();
    }, 2000);
  }
}
