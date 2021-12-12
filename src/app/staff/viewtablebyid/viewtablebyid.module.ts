import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewtablebyidPageRoutingModule } from './viewtablebyid-routing.module';

import { ViewtablebyidPage } from './viewtablebyid.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ViewtablebyidPageRoutingModule
  ],
  declarations: [ViewtablebyidPage]
})
export class ViewtablebyidPageModule {}
