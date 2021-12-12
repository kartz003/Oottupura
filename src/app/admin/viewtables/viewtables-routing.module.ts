import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtablesPage } from './viewtables.page';

const routes: Routes = [
  {
    path: '',
    component: ViewtablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewtablesPageRoutingModule {}
