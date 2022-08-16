import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './create-game/create-game.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { ListGamesComponent } from './list-games/list-games.component';

const routes: Routes = [
  {path: "list-games", component: ListGamesComponent},
  {path: "create-game", component: CreateGameComponent},
  {path: "delete-game/:id", component: DeleteGameComponent},
  {path: "edit-game/:id", component: EditGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
