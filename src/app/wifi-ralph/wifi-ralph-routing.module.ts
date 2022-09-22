import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiRalphPage } from './wifi-ralph.page';

const routes: Routes = [
  {
    path: '',
    component: WifiRalphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WifiRalphPageRoutingModule {}
