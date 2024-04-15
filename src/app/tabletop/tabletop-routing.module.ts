import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabletopComponent } from './tabletop.component';

const routes: Routes = [{ path: '', component: TabletopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabletopRoutingModule { }
