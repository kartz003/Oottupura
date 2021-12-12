import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtablebyidPage } from './viewtablebyid.page';

const routes: Routes = [
  {
    path: '',
    component: ViewtablebyidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewtablebyidPageRoutingModule {}
