import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtablePageRoutingModule } from './addtable-routing.module';

import { AddtablePage } from './addtable.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddtablePageRoutingModule
  ],
  declarations: [AddtablePage]
})
export class AddtablePageModule {}
