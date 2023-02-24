import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { ISeller } from '../models/seller.model';
import { GameStockService } from '../services/game-stock.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [
  ]
})
export class GameListComponent implements OnInit {
  title = 'Game Catalog';
  games!: Game[];
  selectedGameName!: string; 
  sellers: ISeller[] = [];


  constructor(private gameService: GameStockService) {}

  onGameChange(gameName: string) {
    this.selectedGameName = gameName;
    const retrieveSellers = this.gameService.getGameSellers(gameName);
    this.sellers = retrieveSellers ?? []; // () ? '' : '' 
  }

  ngOnInit(): void {
    this.loadGames();
  }

  private loadGames() {
    this.games = this.gameService.getGames();
  }
}
