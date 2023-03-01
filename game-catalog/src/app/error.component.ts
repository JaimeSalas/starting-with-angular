import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: ` <h1 class="errorMessage">400'd</h1> `,
  styles: [`
    .errorMessage {
      margin-top: 25%;
      font-size: 10rem;
      text-align: center;
    }
  `],
})
export class ErrorComponent {}
