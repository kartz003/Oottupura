import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcouponPageRoutingModule } from './addcoupon-routing.module';

import { AddcouponPage } from './addcoupon.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddcouponPageRoutingModule
  ],
  declarations: [AddcouponPage]
})
export class AddcouponPageModule {}
