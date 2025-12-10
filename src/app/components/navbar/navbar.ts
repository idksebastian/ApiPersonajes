import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  private router = inject(Router);


  navItems = [
    { label: 'Rick & Morty', path: '/rick-and-morty' },
    { label: 'The Simpsons', path: '/simpsons' },
    { label: 'Dragon Ball', path: '/dragon-ball' },
  ];

  
  goTo(path: string) {
    this.router.navigate([path]);
  }
}