import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallemusicaPage } from './detallemusica.page';

const routes: Routes = [
  {
    path: '',
    component: DetallemusicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallemusicaPageRoutingModule {}
