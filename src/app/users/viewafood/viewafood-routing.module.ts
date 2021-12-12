import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewafoodPage } from './viewafood.page';

const routes: Routes = [
  {
    path: '',
    component: ViewafoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewafoodPageRoutingModule {}
