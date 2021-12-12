import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcouponPage } from './addcoupon.page';

const routes: Routes = [
  {
    path: '',
    component: AddcouponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcouponPageRoutingModule {}
