import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  isDirty = true;

  constructor(
    private gameStockService: GameStockService,
    private router: Router
  ) {}

  createGame(formValues: any) {
    this.isDirty = false;
    const game = this.mapper(formValues);
    this.gameStockService.addGame(game);
    this.router.navigate(['/games']);
  }

  private mapper(formValues: any): Game {
    return new Game(
      formValues.name,
      formValues.daterelease,
      formValues.imageurl
    );
  }

  cancel() {
    this.router.navigate(['/games']);
  }
}
