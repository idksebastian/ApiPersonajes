

import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../rick-and-morty'; 
import { IRickAndMortyCharacter } from '../../../models/api.interfaces'; 

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.html',
  styleUrls: ['./character-detail.scss']
})
export class CharacterDetailComponent implements OnInit {
  
  
  private route = inject(ActivatedRoute); 
  private service = inject(RickAndMortyService);
  
  
  character = signal<IRickAndMortyCharacter | null>(null);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.getCharacterIdFromRoute();
  }

  getCharacterIdFromRoute(): void {
    
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      if (id) {
        this.loadCharacterDetail(id);
      } else {
        console.error('ID del personaje no encontrado en la ruta.');
        this.isLoading.set(false);
      }
    });
  }

  loadCharacterDetail(id: number): void {
    this.isLoading.set(true);
    
    this.service.getCharacterById(id).subscribe({
      next: (data) => {
        this.character.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error cargando detalle de Rick & Morty:', error);
        this.isLoading.set(false);
      }
    });
  }
}