import { Routes } from '@angular/router';
import { CreateGameComponent } from './game/create-game.component';
import { GameListComponent } from './game/game-list.component';
import { CreateSellerComponent } from './seller/create-seller.component';

export const appRoutes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'games/new', component: CreateGameComponent },
  { path: 'seller/new', component: CreateSellerComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
];
