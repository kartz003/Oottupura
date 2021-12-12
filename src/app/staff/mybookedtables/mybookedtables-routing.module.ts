import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MybookedtablesPage } from './mybookedtables.page';

const routes: Routes = [
  {
    path: '',
    component: MybookedtablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MybookedtablesPageRoutingModule {}
