import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
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

  onProductCreated(product: Product) {
    this.products.unshift(product);
  }
}
