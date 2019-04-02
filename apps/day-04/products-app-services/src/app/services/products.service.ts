import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Dell Inspiron',
      description: 'Recommended for home use',
      price: 35000,
      isAvailable: true
    },
    {
      id: 2,
      name: 'Dell Latitude',
      description: 'Recommended for business use',
      price: 45000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Dell XPS',
      description: 'Recommended for gaming',
      price: 75000,
      isAvailable: true
    }
  ];

  constructor(private loggerService: LoggerService) { }

  // products component
  getProducts(): Product[] {
    this.loggerService.log('ProductsService.getProducts() invoked.');
    return this.products;
  }

  // product form component
  addProduct(product: Product) {
    this.loggerService.log('ProductsService.addProduct() invoked.');
    this.products.unshift(product);
  }
}