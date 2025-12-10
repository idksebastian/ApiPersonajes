import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DragonBallApiService } from '../dragon-ball';

@Component({
  selector: 'app-dragon-ball-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragon-ball-list.html',
  styleUrls: ['./dragon-ball-list.scss']
})
export class DragonBallListComponent implements OnInit {

  private service = inject(DragonBallApiService);
  private router = inject(Router);

  characters = signal<any[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.service.getAllCharacters().subscribe({
      next: (data) => {
        this.characters.set(data.items ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/dragon-ball', id]);
  }
}