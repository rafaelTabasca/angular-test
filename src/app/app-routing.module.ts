import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './models/users/users.component';
import { AddUsersComponent } from './models/add-users/add-users.component';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './effects/users.effect';
import { provideStore } from '@ngrx/store';
import { usersSearchReducer } from './actions/users-search/users-search.reducer';

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full", }, // Redirect root to /users

  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: "add-users",
    component: AddUsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
