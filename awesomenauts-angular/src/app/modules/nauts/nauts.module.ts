import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NautsRoutingModule } from './nauts-routing.module';
import { IndexComponent } from './pages/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    NautsRoutingModule
  ]
})
export class NautsModule { }
