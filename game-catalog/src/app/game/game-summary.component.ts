import { Component, Input } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
})
export class GameSummaryComponent {
  @Input() game!: Game;
}

/*
-> modulos angular
-> module
-> shared
-> core
-> feature -> 'area negocio'
*/

// []
