import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewtablesPageRoutingModule } from './viewtables-routing.module';

import { ViewtablesPage } from './viewtables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewtablesPageRoutingModule
  ],
  declarations: [ViewtablesPage]
})
export class ViewtablesPageModule {}
