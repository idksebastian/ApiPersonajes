import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IRickAndMortyCharacter, IRickAndMortyResponse } from '../../models/api.interfaces'; 

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  

  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/character';

 
  getAllCharacters(): Observable<IRickAndMortyResponse> {
    
    return this.http.get<IRickAndMortyResponse>(this.apiUrl);
  }


  getCharacterById(id: number): Observable<IRickAndMortyCharacter> {
    
    return this.http.get<IRickAndMortyCharacter>(`${this.apiUrl}/${id}`);
  }
}