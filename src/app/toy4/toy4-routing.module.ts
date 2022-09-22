import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Toy4Page } from './toy4.page';

const routes: Routes = [
  {
    path: '',
    component: Toy4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Toy4PageRoutingModule {}
