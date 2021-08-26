import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattlefieldsRoutingModule } from './battlefields-routing.module';
import { IndexComponent } from './pages/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    BattlefieldsRoutingModule
  ]
})
export class BattlefieldsModule { }
