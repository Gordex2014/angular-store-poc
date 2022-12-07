import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'products/list',
        component: ProductsListComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailsComponent,
      },
      { path: '', redirectTo: 'products/list', pathMatch: 'full' },
      { path: '**', redirectTo: 'products/list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
