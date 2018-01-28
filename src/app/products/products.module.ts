import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ColorListComponent } from './components/color-list/color-list.component';

import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

import {RouterModule} from '@angular/router';
import {routes} from './products.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ColorListComponent,
  ],
  providers: [CartService,ProductsService],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule {
}
