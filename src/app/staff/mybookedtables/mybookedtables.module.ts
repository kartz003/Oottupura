import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MybookedtablesPageRoutingModule } from './mybookedtables-routing.module';

import { MybookedtablesPage } from './mybookedtables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MybookedtablesPageRoutingModule
  ],
  declarations: [MybookedtablesPage]
})
export class MybookedtablesPageModule {}
