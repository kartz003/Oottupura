import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewafoodPageRoutingModule } from './viewafood-routing.module';

import { ViewafoodPage } from './viewafood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewafoodPageRoutingModule
  ],
  declarations: [ViewafoodPage]
})
export class ViewafoodPageModule {}
