import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { UsersService } from '../services/users/users.service';
import { actions } from '../actions/users-search/users-search.actions';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);
  constructor(userService: UsersService, actions$: Actions) {
    this.actions$ = actions$
    this.usersService = userService
  }

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.load),
      exhaustMap(() => this.usersService.get()
        .pipe(
          map(users => {
            return {
              type: actions.set, users
            };
          }),
          catchError(() => of({ type: actions.error, payload: 'Error loading users' }))
        ))
    );
  });
}