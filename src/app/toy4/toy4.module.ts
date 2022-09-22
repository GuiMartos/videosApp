import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Toy4PageRoutingModule } from './toy4-routing.module';

import { Toy4Page } from './toy4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Toy4PageRoutingModule
  ],
  declarations: [Toy4Page]
})
export class Toy4PageModule {}
