import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

import { PartsDisplayComponent } from './components/parts-display/parts-display.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    PartsDisplayComponent,
    ProductCardComponent,
    ProductsListComponent,
    ShopComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    SharedModule,
    ShopRoutingModule,
  ],
})
export class ShopModule {}
