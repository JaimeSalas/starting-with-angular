import { Component, OnInit } from '@angular/core';
import { Game } from './models/game.model';
import { GameStockService } from './services/game-stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Game Catalog';
  // @ts-ignore
  games!: Game[];
  // private _gameService!: GameStockService;
  // @ts-ignore
  // game!: Game;
  show = true;

  constructor(private gameService: GameStockService) {}

  onGameChange(gameName: string) {
    debugger
  }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }
}
