import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatefoodPageRoutingModule } from './updatefood-routing.module';

import { UpdatefoodPage } from './updatefood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatefoodPageRoutingModule
  ],
  declarations: [UpdatefoodPage]
})
export class UpdatefoodPageModule {}
