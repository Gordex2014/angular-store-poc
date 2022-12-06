import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsListComponent, ShopComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    ShopRoutingModule,
  ],
})
export class ShopModule {}
