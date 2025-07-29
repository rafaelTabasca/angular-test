import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { UsersEffects } from './app/effects/users.effect';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
