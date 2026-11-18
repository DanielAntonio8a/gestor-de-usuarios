import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { UsersService, User } from './services/users.service';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { UserGridComponent } from './components/user-grid/user-grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBarComponent, UserGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private usersService = inject(UsersService);

  users = signal<User[]>([]);
  searchTerm = signal<string>('');
  favorites = signal<number[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    return this.users().filter((user) =>
      user.name.toLowerCase().includes(term)
    );
  });

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Error al cargar usuarios');
        this.loading.set(false);
      }
    });
  }

  toggleFavorite(userId: number): void {
    this.favorites.update((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  }
}
