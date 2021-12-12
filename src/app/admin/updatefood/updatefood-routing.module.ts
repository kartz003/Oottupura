import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatefoodPage } from './updatefood.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatefoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatefoodPageRoutingModule {}
