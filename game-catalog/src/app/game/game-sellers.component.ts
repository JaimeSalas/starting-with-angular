import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models';
import { ISeller } from '../models/seller.model';
import { GameStockService } from '../services/game-stock.service';

@Component({
  selector: 'app-game-sellers',
  templateUrl: './game-sellers.component.html',
})
export class GameSellersComponent implements OnInit {
  sellers: ISeller[] = [];
  gamName = '';
  addMode = false;
  sortBy = 'asc'; 
  filterBy = 'all';

  constructor(
    private route: ActivatedRoute,
    private gameStockService: GameStockService
  ) {}

  toggleAddSeller() {
    this.addMode = !this.addMode;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.gameStockService.getGame(id).subscribe({
      next: (g) => {
        this.gamName = g.name;
        this.sellers = g.sellers || [];
      }
    });
  }
}
