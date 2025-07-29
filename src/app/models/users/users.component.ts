import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersSearchState } from '../../actions/users-search/users-search.reducer';
import { actions, search } from '../../actions/users-search/users-search.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  imports: [UserCardComponent, NgFor, MatInputModule, NgIf, MatProgressSpinnerModule],
  standalone: true,
})
export class UsersComponent {
  users$: Observable<UsersSearchState>;
  usersFiltered: UsersSearchState = {
    error: "",
    filter: { query: "" },
    isLoading: false,
    users: []
  };

  constructor(private store: Store<{ usersSearch: UsersSearchState }>) {
    this.users$ = this.store.select("usersSearch");
  }

  ngOnInit() {
    this.store.dispatch({
      type: actions.load
    });

    this.users$?.subscribe(val => {
      this.usersFiltered = {
        ...val,
        users: val.error ? [] : val.users.filter((v) => v.phone.includes(val.filter.query))
      }
    })
  }

  onSearch(event: Event) {
    this.store.dispatch(search({ query: (event.target as HTMLInputElement).value }))
  }
}
