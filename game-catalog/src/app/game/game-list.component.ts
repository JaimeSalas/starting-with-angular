import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from '../models/game.model';
import { GameStockService } from '../services/game-stock.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [
  ]
})
export class GameListComponent implements OnInit, OnDestroy {
  title = 'Game Catalog';
  games!: Game[];
  gamesSubscription!: Subscription;

  constructor(private gameService: GameStockService) {}
  
  ngOnInit(): void {
    this.loadGames();
  }

  ngOnDestroy(): void {
    this.gamesSubscription.unsubscribe();
  }

  private loadGames() {
    this.gamesSubscription = this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
      }
    });
  }
}
