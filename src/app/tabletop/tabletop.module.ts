import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabletopRoutingModule } from './tabletop-routing.module';
import { TabletopComponent } from './tabletop.component';


@NgModule({
  declarations: [
    TabletopComponent
  ],
  imports: [
    CommonModule,
    TabletopRoutingModule
  ]
})
export class TabletopModule { }
