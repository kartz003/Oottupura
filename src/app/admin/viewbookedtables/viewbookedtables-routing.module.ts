import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewbookedtablesPage } from './viewbookedtables.page';

const routes: Routes = [
  {
    path: '',
    component: ViewbookedtablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewbookedtablesPageRoutingModule {}
