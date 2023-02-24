import { Component } from '@angular/core';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styles: [`
    em { color: #E05C65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color:#E3C3C5; }
    .error :: -webkit-input-placeholder { color: #999; }
    .error :: -moz-placeholder { color: #999; }
    .error :: -ms-input-placeholder { color: #999; }
  `]
})
export class CreateSellerComponent {

}
