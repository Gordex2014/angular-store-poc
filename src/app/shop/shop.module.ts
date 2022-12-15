import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { PartsDisplayComponent } from './components/parts-display/parts-display.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CartCardComponent } from './layout/cart-card/cart-card.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CartCardComponent,
    FooterComponent,
    HeaderComponent,
    PartsDisplayComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductDisplayComponent,
    ProductsListComponent,
    ShopComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    SharedModule,
    ShopRoutingModule,
  ],
})
export class ShopModule {}
