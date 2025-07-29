import { createReducer, on } from '@ngrx/store';
import { errorUsers, loadingUsers, search, setUsers } from './users-search.actions';
import { User } from '../../services/users/users.service';

export type UsersSearchState = {
  users: User[];
  isLoading: boolean;
  filter: { query: string };
  error: string
};

export const initialState: UsersSearchState = {
  users: [],
  isLoading: false,
  filter: { query: '' },
  error: ""
};

export const usersSearchReducer = createReducer(
  initialState,
  on(setUsers, (state, { users }) => {
    return { ...state, users, isLoading: false };
  }),
  on(loadingUsers, (state) => ({ ...state, isLoading: true })),
  on(search, (state, { query }) => ({ ...state, filter: { query } })),
  on(errorUsers, (state, { error }) => ({ ...state, error }))
);