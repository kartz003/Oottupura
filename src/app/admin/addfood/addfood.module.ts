import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfoodPageRoutingModule } from './addfood-routing.module';

import { AddfoodPage } from './addfood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddfoodPageRoutingModule
  ],
  declarations: [AddfoodPage]
})
export class AddfoodPageModule {}
