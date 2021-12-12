import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodbycatPageRoutingModule } from './foodbycat-routing.module';

import { FoodbycatPage } from './foodbycat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodbycatPageRoutingModule
  ],
  declarations: [FoodbycatPage]
})
export class FoodbycatPageModule {}
