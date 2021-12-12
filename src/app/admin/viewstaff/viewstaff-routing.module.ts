import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewstaffPage } from './viewstaff.page';

const routes: Routes = [
  {
    path: '',
    component: ViewstaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewstaffPageRoutingModule {}
