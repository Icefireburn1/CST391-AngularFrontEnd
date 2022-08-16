import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/Game';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  game: Game = new Game(-1,-1,"NULL","NULL");

  constructor(private service: GameServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getGame(params['id'],  (game:Game[]) => {
        this.game = game[0];
      });
      
    })
  }

  public editGame(data:any) {
    let newGame = new Game(data['id'], data['cost'], data['genre'], data['title']);
    this.service.updateGame(newGame, this.game['id'], (data: Game) => {

    });
    alert("Record updated.")
  }

}
