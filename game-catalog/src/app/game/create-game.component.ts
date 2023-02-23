import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output() createGameEvent: EventEmitter<any> = new EventEmitter<any>();

  createGame(formValues: any) {
    debugger
    this.createGameEvent.emit(formValues);
  }
}
