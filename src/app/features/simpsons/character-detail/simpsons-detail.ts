import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 
import { switchMap } from 'rxjs/operators';
import { SimpsonsApiService } from '../simpsons';

@Component({
  selector: 'app-simpsons-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simpsons-detail.html', 
  styleUrls: ['./simpsons-detail.scss']
})
export class SimpsonsDetailComponent implements OnInit {
  
  private route = inject(ActivatedRoute); 
  private service = inject(SimpsonsApiService);

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
        
        this.character.set(data[0] || null); 
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error cargando detalle de Los Simpsons:', error);
        this.isLoading.set(false);
      }
    });
  }
}