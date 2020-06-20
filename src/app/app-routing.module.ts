import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'musica',
    loadChildren: () => import('./musica/musica.module').then( m => m.MusicaPageModule)
  },
  {
    path: '',
    redirectTo: 'musica',
    pathMatch: 'full'
  },
  {
    path: 'detallemusica/:musicaIndex',
    loadChildren: () => import('./detallemusica/detallemusica.module').then( m => m.DetallemusicaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
