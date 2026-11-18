import { Component, input, output } from '@angular/core';
import { User } from '../../services/users.service';
import { UserCardComponent } from '../user-card/user-card';

@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-grid.html',
  styleUrl: './user-grid.css'
})
export class UserGridComponent {
  users = input.required<User[]>();
  favorites = input<number[]>([]);
  toggleFavorite = output<number>();

  isFavorite(userId: number): boolean {
    return this.favorites().includes(userId);
  }
}
