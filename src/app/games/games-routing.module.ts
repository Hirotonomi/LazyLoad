import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [{ path: '', component: GamesComponent , children: [ { path: 'tabletop', loadChildren: () => import('../tabletop/tabletop.module').then(m => m.TabletopModule) },{ path: 'pc', loadChildren: () => import('../pc/pc.module').then(m => m.PcModule) }]
}]; 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
