import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : "authenticate",
    pathMatch : 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule)
  },
  {
    path: 'authenticate-pin',
    loadChildren: () => import('./pin/pin.module').then(m => m.PinModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
