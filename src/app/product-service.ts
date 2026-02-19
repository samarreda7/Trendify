import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from './products/products';
import { Observable } from 'rxjs';
import { products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);

  getproducts(): Observable<products[]> {
    console.log('Data' + this.httpClient.get<products[]>('https://fakestoreapi.com/products'));
    return this.httpClient.get<products[]>('https://fakestoreapi.com/products');
  }
}
