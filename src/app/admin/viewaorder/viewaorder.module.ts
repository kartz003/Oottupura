import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewaorderPageRoutingModule } from './viewaorder-routing.module';

import { ViewaorderPage } from './viewaorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewaorderPageRoutingModule
  ],
  declarations: [ViewaorderPage]
})
export class ViewaorderPageModule {}
