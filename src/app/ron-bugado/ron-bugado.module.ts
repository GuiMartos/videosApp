import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RonBugadoPageRoutingModule } from './ron-bugado-routing.module';

import { RonBugadoPage } from './ron-bugado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RonBugadoPageRoutingModule
  ],
  declarations: [RonBugadoPage]
})
export class RonBugadoPageModule {}
