import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameSummaryComponent } from './game/game-summary.component';
import { GameStockService } from './services/game-stock.service';
import { GameSellersComponent } from './game/game-sellers.component';
import { CreateGameComponent } from './game/create-game.component';
import { GameListComponent } from './game/game-list.component';
import { appRoutes } from './app.routes';
import { CreateSellerComponent } from './seller/create-seller.component';
import { SellerCategoryService } from './services/seller-category.service';
import { NavbarComponent } from './shell/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngModel
// ngForm
@NgModule({
  declarations: [
    AppComponent,
    GameSummaryComponent,
    GameSellersComponent,
    CreateGameComponent,
    GameListComponent,
    CreateSellerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    GameStockService, 
    SellerCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
