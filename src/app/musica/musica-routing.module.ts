import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicaPage } from './musica.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'',
        component: MusicaPage
      },
      {
        path: ':musicaId',
        loadChildren: () => import('src/app/detallemusica/detallemusica.module').then( m => m.DetallemusicaPageModule)
      }
    ]

  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicaPageRoutingModule {}
