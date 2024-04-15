import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) }, { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
