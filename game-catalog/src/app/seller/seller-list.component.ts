import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISeller } from '../models';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styles: [],
})
export class SellerListComponent implements OnChanges {
  @Input() sellers: ISeller[] = [];
  @Input() filterBy = '';
  @Input() sortBy = '';
  visibleSellers: ISeller[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterBy']) {
      this.visibleSellers = this.filterSellers(
        changes['filterBy'].currentValue
      );
    }

    if (changes['sortBy']) {
      this.sortSellers(changes['sortBy'].currentValue);
    }
  }

  private filterSellers = (filter: string) =>
    this.sellers.filter((s) => filter === 'all' || s.amount > 0);

  private sortSellers = (sortBy: string): void => {
    this.visibleSellers.sort(this.sortSellersActions[sortBy]);
  };

  private sortSellersActions: { [key: string]: any } = {
    ['asc']: (current: ISeller, after: ISeller) => after.price - current.price,
    ['desc']: (current: ISeller, after: ISeller) => current.price - after.price,
  };
}
