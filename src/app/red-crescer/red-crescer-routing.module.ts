import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedCrescerPage } from './red-crescer.page';

const routes: Routes = [
  {
    path: '',
    component: RedCrescerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedCrescerPageRoutingModule {}
