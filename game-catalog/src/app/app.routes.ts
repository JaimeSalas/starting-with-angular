import { Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { CreateGameComponent } from './game/create-game.component';
import { GameListComponent } from './game/game-list.component';
import { GameSellersComponent } from './game/game-sellers.component';
import { CreateSellerComponent } from './seller/create-seller.component';
import { CHECK_DIRTY_TOKEN } from './services/check-dirty.service';
import { GameRouterActivatorService } from './services/game-router-activator.service';
import { LoginComponent } from './user/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'games', component: GameListComponent },
  { path: 'games/new', component: CreateGameComponent, canDeactivate: [CHECK_DIRTY_TOKEN] },
  {
    path: 'games/:id',
    component: GameSellersComponent,
    canActivate: [GameRouterActivatorService],
  },
  { path: 'sellers/new', component: CreateSellerComponent },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
];
