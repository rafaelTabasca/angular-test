import { Injectable } from '@angular/core';
import { UsersSearchState } from '../../actions/users-search/users-search.reducer';
import { Store } from '@ngrx/store';
import { loadingUsers } from '../../actions/users-search/users-search.actions';
import { HttpClient } from '@angular/common/http';

export type User = {
  name: string;
  phone: string;
  email: string
  id: string;
};

@Injectable()
export class UsersService {

  constructor(private usersStore: Store<UsersSearchState>, private http: HttpClient) { }

  get() {
    this.usersStore.dispatch(loadingUsers({ users: [] }));
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }
}
