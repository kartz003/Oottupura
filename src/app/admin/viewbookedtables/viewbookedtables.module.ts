import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewbookedtablesPageRoutingModule } from './viewbookedtables-routing.module';

import { ViewbookedtablesPage } from './viewbookedtables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewbookedtablesPageRoutingModule
  ],
  declarations: [ViewbookedtablesPage]
})
export class ViewbookedtablesPageModule {}
