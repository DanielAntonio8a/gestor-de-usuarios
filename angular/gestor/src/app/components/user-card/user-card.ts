import { Component, input, output } from '@angular/core';
import { User } from '../../services/users.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCardComponent {
  user = input.required<User>();
  isFavorite = input<boolean>(false);
  toggleFavorite = output<number>();
}
