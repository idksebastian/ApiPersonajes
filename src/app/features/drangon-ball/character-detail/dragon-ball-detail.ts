import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 
import { switchMap } from 'rxjs/operators';
import { DragonBallApiService } from '../dragon-ball';

@Component({
  selector: 'app-dragon-ball-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dragon-ball-detail.html', 
  styleUrls: ['./dragon-ball-detail.scss']
})
export class DragonBallDetailComponent implements OnInit {
  
  private route = inject(ActivatedRoute); 
  private service = inject(DragonBallApiService);

  character = signal<any>(null);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        const id = +params['id'];
        return this.service.getCharacterById(id);
      })
    ).subscribe({
      next: (data) => {
        this.character.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error cargando detalle de Dragon Ball:', error);
        this.isLoading.set(false);
      }
    });
  }
}