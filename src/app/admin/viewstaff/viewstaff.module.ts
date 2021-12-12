import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewstaffPageRoutingModule } from './viewstaff-routing.module';

import { ViewstaffPage } from './viewstaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewstaffPageRoutingModule
  ],
  declarations: [ViewstaffPage]
})
export class ViewstaffPageModule {}
