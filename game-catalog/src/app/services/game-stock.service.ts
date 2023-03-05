import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Game } from '../models/game.model';
import { ISeller } from '../models/seller.model';

// Angular 9 -> provideIn: root
@Injectable()
export class GameStockService {
  private games: Game[] = [];

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    if (this.games.length > 0) {
      return of(this.games);
    }
    return this.http.get<Game[]>('/api/games').pipe(
      tap((data) => console.log(data)),

      map((data) => {
        this.games = data.map(this.mapGame);
        return this.games;
      })
    );
  }

  private mapGame = (gameServer: any): Game => {
    if (gameServer.sellers && gameServer.sellers.length > 0) {
      return new Game(gameServer.name, gameServer.dateRelease, gameServer.imageUrl, gameServer.sellers);
    }

    return new Game(gameServer.name, gameServer.dateRelease, gameServer.imageUrl, []);
  }
    

  getGame(name: string): Observable<Game> {
    return this.getGames().pipe(
      map((games) => {
        const game = games.find((g) => g.name === name) as Game;
        return game;
      })
    );
  }

  getGameSellers(name: string): Observable<ISeller[]> {
    return this.getGame(name).pipe(map((game) => game.sellers || []));
  }

  addGame(game: Game): Observable<Game> {
    // games.push(game);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.createGame(game, headers);
  }

  private createGame(game: Game, headers: HttpHeaders): Observable<Game> {
    return this.http
      .post<Game>('', game, { headers })
      .pipe(tap((data) => this.games.push(data)));
  }

  updateGame(game: Game): Observable<Game> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Game>('', game, { headers }).pipe(
      tap(
        (g) =>
          (this.games = this.games.map((game) => {
            if (game.name === g.name) {
              return g;
            }
            return game;
          }))
      )
    );
  }

  deleteGame(name: string): Observable<Game> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Game>('', { headers }).pipe(
      tap(() => {
        this.games = this.games.filter((g) => g.name !== name);
      })
    );
  }
}
