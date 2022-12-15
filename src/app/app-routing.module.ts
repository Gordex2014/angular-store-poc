import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsAdminGuard } from './shared/guards';

const routes: Routes = [
  {
    path: 'guest',
    loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [IsAdminGuard],
    canLoad: [IsAdminGuard],
  },
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { path: '**', redirectTo: 'guest' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
