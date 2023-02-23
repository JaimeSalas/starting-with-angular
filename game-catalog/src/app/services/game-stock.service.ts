import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { ISeller } from '../models/seller.model';

const games: Game[] = [
  new Game(
    'Super Mario Bros',
    '13 September 1985',
    // tslint:disable-next-line:max-line-length
    'http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1280w.jpg',
    [
      {
        id: 1,
        name: 'Old shop',
        price: 95,
        amount: 2,
        isAvailable: true,
      },
      {
        id: 2,
        name: 'New shop',
        price: 115,
        amount: 1,
        isAvailable: true,
      },
      {
        id: 3,
        name: 'Regular shop',
        price: 135,
        amount: 0,
        isAvailable: false,
      }
    ]
  ),
  new Game(
    'Legend of Zelda',
    '21 February 1986',
    // tslint:disable-next-line:max-line-length
    'https://as01.epimg.net/meristation/imagenes/2021/02/21/reportajes/1613888485_682494_1613888565_noticia_normal.jpg',
    [
      {
        id: 3,
        name: 'Old shop',
        price: 125,
        amount: 0,
        isAvailable: false,
      },
      {
        id: 4,
        name: 'New shop',
        price: 145,
        amount: 1,
        isAvailable: true,
      },
    ]
  ),
  new Game(
    'Sonic',
    '26 June 1981',
    'https://i.ytimg.com/vi/dfFd7Bu6xnc/hqdefault.jpg',
  ),
];


// Angular 9 -> provideIn: root 
@Injectable()
export class GameStockService {
  getGames(): Game[] {
    return games;
  }

  getGame(name: string) {
    // == ===
    // '7' == 7 -> true
    // '7' === 7 -> false
    return games.find((g) => g.name === name);
  }

  getGameSellers(name: string): ISeller[] | null {
    return this.getGame(name)?.sellers || null;
  }

  addGame(game: Game): void {
    games.push(game);
  }
}
