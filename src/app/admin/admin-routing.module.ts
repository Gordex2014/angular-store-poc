import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductsAddComponent } from './pages/products-add/products-add.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products-add',
        component: ProductsAddComponent,
      },
      {
        path: 'products-list',
        component: ProductsListComponent,
      },
      {
        path: 'product/:id',
        component: ProductEditComponent,
      },
      { path: '', redirectTo: 'products-add', pathMatch: 'full' },
      { path: '**', redirectTo: 'products-add' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
