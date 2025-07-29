import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from '@angular/material/card';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { usersSearchReducer } from './actions/users-search/users-search.reducer';
import { UsersEffects } from './effects/users.effect';
import { UsersService } from './services/users/users.service';
import { MatChipsModule } from "@angular/material/chips"

@NgModule({
  declarations: [AppComponent, NavComponent,],
  imports: [BrowserModule, MatChipsModule, AppRoutingModule, MatCardModule, MatInputModule, FormsModule, HttpClientModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  providers: [
    provideStore({ usersSearch: usersSearchReducer }),
    provideEffects(UsersEffects),
    UsersService,
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
