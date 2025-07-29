import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card"
import { User } from '../../services/users/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  standalone: true,
  imports: [MatCardModule]
})

export class UserCardComponent {
  @Input() user: User | undefined;
}
