import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodbycatPage } from './foodbycat.page';

const routes: Routes = [
  {
    path: '',
    component: FoodbycatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodbycatPageRoutingModule {}
