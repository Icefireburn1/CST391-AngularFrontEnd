import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/Game';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {

  constructor(private service: GameServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("ID: " + params['id']);
      this.service.deleteGame(params['id'], (data: Game) => {

      });
      
    })
  }

}
