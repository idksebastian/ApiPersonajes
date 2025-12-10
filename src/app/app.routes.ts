import { Routes } from '@angular/router';

import { CharacterListComponent } from './features/rick-and-morty/character-list/character-list'; 
import { CharacterDetailComponent } from './features/rick-and-morty/character-detail/character-detail'; 
import { DragonBallListComponent } from './features/drangon-ball/character-list/dragon-ball-list'; 
import { DragonBallDetailComponent } from './features/drangon-ball/character-detail/dragon-ball-detail'; 
import { SimpsonsListComponent } from './features/simpsons/character-list/simpsons-list'; 
import { SimpsonsDetailComponent } from './features/simpsons/character-detail/simpsons-detail'; 

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'rick-and-morty', 
        pathMatch: 'full'
    },

   
    {
        path: 'rick-and-morty', 
        component: CharacterListComponent 
    },
    {
        path: 'rick-and-morty/:id', 
        component: CharacterDetailComponent 
    },

    
    {
        path: 'dragon-ball',
        component: DragonBallListComponent 
    },
    {
        path: 'dragon-ball/:id', 
        component: DragonBallDetailComponent 
    },

    
    {
        path: 'simpsons',
        component: SimpsonsListComponent 
    },
    {
        path: 'simpsons/:id', 
        component: SimpsonsDetailComponent 
    },

    {
        path: '**',
        redirectTo: 'rick-and-morty'
    }
];