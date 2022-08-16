import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  games: Game[] = [];

  constructor(private service: GameServiceService) { }

  ngOnInit(): void {
    this.service.getGames((games:Game[])=> {
      for (let i = 0; i < games.length; i++) {
        this.games.push(games[i]);
      }
    });
  }
}
