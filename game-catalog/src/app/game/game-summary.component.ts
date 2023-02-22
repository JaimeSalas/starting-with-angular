import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
})
export class GameSummaryComponent {
  @Input() game!: Game; // @Input() game;

  @Output() gameChange: EventEmitter<string> = new EventEmitter<string>();

  selectedGame(gameName: string) {
    this.gameChange.emit(gameName);
  }
}

/*
-> modulos angular
-> module
-> shared
-> core
-> feature -> 'area negocio'
*/

// []
