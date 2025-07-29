import { Component, inject } from '@angular/core';
import { CounterStore } from '../../store/counter/counter.store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  providers: [CounterStore],
})

export class NavComponent {
  counterStore = inject(CounterStore);
 
}
