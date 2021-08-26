import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nauts',
    loadChildren: () => import('./modules/nauts/nauts.module').then(module => module.NautsModule)
  },
  {
    path: 'battlefields',
    loadChildren: () => import('./modules/battlefields/battlefields.module').then(module => module.BattlefieldsModule)
  },
  {
    path: '**',
    redirectTo: 'nauts'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
