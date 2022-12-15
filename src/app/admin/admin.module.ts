import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsAddComponent } from './pages/products-add/products-add.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsAddComponent,
    ProductsListComponent,
    FormTitleComponent,
    InputFieldComponent,
    ProductEditComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
