import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonBallApiService {

  private http = inject(HttpClient);
  private apiUrl = 'https://dragonball-api.com/api/characters';

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}