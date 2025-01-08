import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule)
  },
  {
    path: 'authenticate-pin',
    loadChildren: () => import('./pin/pin.module').then(m => m.PinModule)
  },
  {
    path: 'reset-passwprd',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule)
  },
  {
    path: 'product-lists',
    loadChildren: () => import('./product-lists/product-lists.module').then(m => m.ProductListsModule)
  },
  {
    path: 'view-product',
    loadChildren: () => import('./view-product/view-product.module').then(m => m.ViewProductModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
  },
  {
    path: 'view-offers',
    loadChildren: () => import('./view-offer/view-offer.module').then(m => m.ViewOfferModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
