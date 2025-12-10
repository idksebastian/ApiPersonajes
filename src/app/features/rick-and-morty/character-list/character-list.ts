import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

import { RickAndMortyService } from '../rick-and-morty';

import { IRickAndMortyCharacter } from '../../../models/api.interfaces';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.html', 
  styleUrls: ['./character-list.scss']
})
export class CharacterListComponent implements OnInit {
  
  private service = inject(RickAndMortyService); 
  private router = inject(Router);

 
  characters = signal<IRickAndMortyCharacter[]>([]);
  
  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.service.getAllCharacters().subscribe({
      next: (data) => {
       
        this.characters.set(data.results);
      },
      error: (error) => {
        console.error('Error cargando Rick & Morty:', error);
      }
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/rick-and-morty', id]);
  }
}