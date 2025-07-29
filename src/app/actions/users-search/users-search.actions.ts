import { createAction, props } from '@ngrx/store';
import { User } from '../../services/users/users.service';

export const actions = {
  set: "[Users Component] Set Users",
  loading: "[Users Component] Loading Users",
  error: "[Users Component] Error Users",
  search: "[Users Component] Search Users",
  load: "[Users Component] Load Users"
}

export const setUsers = createAction(actions.set, props<{ users: User[] }>());
export const loadingUsers = createAction(actions.loading, props<{ users: User[] }>());
export const errorUsers = createAction(actions.error, props<{ error: string }>());
export const search = createAction(actions.search, props<{ query: string }>())