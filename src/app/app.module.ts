import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    CreateGameComponent,
    DeleteGameComponent,
    EditGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
