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

import { UserModule } from './user/user.module';
import { SellerDetailsComponent } from './seller/seller-details.component';
import { ErrorComponent } from './error.component';
import {
  checkDirtyState,
  CHECK_DIRTY_TOKEN,
} from './services/check-dirty.service';

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
    SellerDetailsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    GameStockService,
    SellerCategoryService,
    {
      provide: CHECK_DIRTY_TOKEN,
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
