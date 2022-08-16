import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from '../models/Game';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(private service: GameServiceService) { }

  ngOnInit(): void {
  }

  public createGame(data:any) {
    let game = new Game(data['id'], data['cost'], data['genre'], data['title']);
    console.log(game);
    this.service.createGame(game, (data: Game) => {
      
    });
  }

}
