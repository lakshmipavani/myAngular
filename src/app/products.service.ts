import {Injectable} from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class ProductsService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Blue item', price: 123.09, colors: ['blue']},
      <Product>{id: 2, name: 'Green and gray', price: 99.09, colors: ['green', 'gray']},
      <Product>{id: 3, name: 'Green item', price: 99.09, colors: ['green']},
      <Product>{id: 4, name: 'Blue and gray', price: 99.09, colors: ['blue', 'gray']},
      <Product>{id: 5, name: 'Green and blue', price: 99.09, colors: ['green', 'blue']},
      <Product>{id: 6, name: 'Green and blue', price: 99.09, colors: ['green', 'blue']},
      <Product>{id: 7, name: 'Gray', price: 99.09, colors: ['gray']},
      <Product>{id: 8, name: 'Pink and Black', price: 99.09, colors: ['blue']},
      <Product>{id: 9, name: 'White and Blue', price: 199.09, colors: ['blue']},
      <Product>{id: 10, name: 'Blue and black', price: 99.09, colors: ['blue']},
      <Product>{id: 11, name: 'Black and Blue', price: 399.09, colors: ['blue']},
      <Product>{id: 12, name: 'White and Black', price: 299.09, colors: ['blue']},
      <Product>{id: 13, name: 'White and White', price: 199.09, colors: ['blue']},
      <Product>{id: 14, name: 'Black and Black', price: 299.09, colors: ['blue']},
      <Product>{id: 15, name: 'Red and White', price: 399.09, colors: ['blue']},
      <Product>{id: 16, name: 'Red', price: 99.09, colors: ['blue']},
      <Product>{id: 17, name: 'Red and Black', price: 299.09, colors: ['blue']},
      <Product>{id: 18, name: 'Orange', price: 99.09, colors: ['blue']},
      <Product>{id: 19, name: 'Orange and White', price: 199.09, colors: ['blue']},
      <Product>{id: 20, name: 'All colors', price: 99.09, colors: ['gray', 'blue', 'green']},
    ]);
  }
}