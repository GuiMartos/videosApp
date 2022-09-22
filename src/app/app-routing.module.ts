import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ron-bugado',
    loadChildren: () => import('./ron-bugado/ron-bugado.module').then( m => m.RonBugadoPageModule)
  },  {
    path: 'luca',
    loadChildren: () => import('./luca/luca.module').then( m => m.LucaPageModule)
  },
  {
    path: 'encanto',
    loadChildren: () => import('./encanto/encanto.module').then( m => m.EncantoPageModule)
  },
  {
    path: 'red-crescer',
    loadChildren: () => import('./red-crescer/red-crescer.module').then( m => m.RedCrescerPageModule)
  },
  {
    path: 'toy4',
    loadChildren: () => import('./toy4/toy4.module').then( m => m.Toy4PageModule)
  },
  {
    path: 'wifi-ralph',
    loadChildren: () => import('./wifi-ralph/wifi-ralph.module').then( m => m.WifiRalphPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
