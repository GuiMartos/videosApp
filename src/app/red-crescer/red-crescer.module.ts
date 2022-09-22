import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedCrescerPageRoutingModule } from './red-crescer-routing.module';

import { RedCrescerPage } from './red-crescer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedCrescerPageRoutingModule
  ],
  declarations: [RedCrescerPage]
})
export class RedCrescerPageModule {}
