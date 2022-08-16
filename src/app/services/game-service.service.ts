import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  hostname: string = "http://localhost:8080/service";

  constructor(private http: HttpClient) { }

  // Gets a single game from the backend using ID
  public getGame(id: number, callback:any) {
    this.http.get<Game>(this.hostname + "/games/" + id).subscribe((data) => {
      callback(data);
    });

  }
  // Gets all games from the backend
  public getGames(callback: any) {
    this.http.get<Game[]>(this.hostname + "/games").subscribe((data) => {
      callback(data);
    });
  }

  // Creates a game on the backend
  public createGame(game: Game, callback:any) {
    this.http.post<Game>(this.hostname + "/games", game).subscribe((data) =>    
    {
      callback(data);    
    });
  }

  // Deletes a game on the backend
  public deleteGame(id: number, callback:any) {
    this.http.delete(this.hostname + "/games/" + id).subscribe((data) => {
      callback(data);
    });
  }

  // Select a game by its ID then modify it
  public updateGame(game: Game, id: number, callback:any) {
    this.http.put<Game>(this.hostname + "/games/" + id, game).subscribe((data) => {
      callback(data);
    });
  }
}
