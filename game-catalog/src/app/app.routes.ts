import { Routes } from '@angular/router';
import { CreateGameComponent } from './game/create-game.component';
import { GameListComponent } from './game/game-list.component';
import { GameSellersComponent } from './game/game-sellers.component';
import { CreateSellerComponent } from './seller/create-seller.component';
import { LoginComponent } from './user/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'games', component: GameListComponent },
  { path: 'games/new', component: CreateGameComponent },
  { path: 'games/:id', component: GameSellersComponent },
  { path: 'sellers/new', component: CreateSellerComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
];
