import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcComponent } from './pc.component';

const routes: Routes = [{ path: '', component: PcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcRoutingModule { }
