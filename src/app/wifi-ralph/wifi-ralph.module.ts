import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WifiRalphPageRoutingModule } from './wifi-ralph-routing.module';

import { WifiRalphPage } from './wifi-ralph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WifiRalphPageRoutingModule
  ],
  declarations: [WifiRalphPage]
})
export class WifiRalphPageModule {}
