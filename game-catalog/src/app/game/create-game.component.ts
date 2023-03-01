import { Component, Output, EventEmitter } from '@angular/core';
import { Game } from '../models';
import { GameStockService } from '../services/game-stock.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styles: [
    `
      em {
        color: red;
      }
    `,
  ],
})
export class CreateGameComponent {
  daterelease!: string;
  name!: string;
  imageurl!: string;
  mouseover = false;

  constructor(private gameStockService: GameStockService) {}

  createGame(formValues: any) {
    const game = this.mapper(formValues);
    this.gameStockService.addGame(game);
  }

  private mapper(formValues: any): Game {
    return new Game(
      formValues.name,
      formValues.daterelease,
      formValues.imageurl
    );
  }
}
