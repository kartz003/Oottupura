import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewaorderPage } from './viewaorder.page';

const routes: Routes = [
  {
    path: '',
    component: ViewaorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewaorderPageRoutingModule {}
