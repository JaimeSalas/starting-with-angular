import { Component, Input } from '@angular/core';
import { ISeller } from '../models';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styles: [
  ]
})
export class SellerDetailsComponent {
  @Input() seller!: ISeller;
}
