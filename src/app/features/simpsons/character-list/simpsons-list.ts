import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SimpsonsApiService } from '../simpsons';

@Component({
  selector: 'app-simpsons-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simpsons-list.html',
  styleUrls: ['./simpsons-list.scss']
})
export class SimpsonsListComponent implements OnInit {

  private service = inject(SimpsonsApiService);
  private router = inject(Router);

  characters = signal<any[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.service.getAllCharacters().subscribe({
      next: (data) => {
        this.characters.set(data ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/simpsons', id]);
  }
}