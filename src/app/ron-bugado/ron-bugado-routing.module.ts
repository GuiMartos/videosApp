import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RonBugadoPage } from './ron-bugado.page';

const routes: Routes = [
  {
    path: '',
    component: RonBugadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RonBugadoPageRoutingModule {}
