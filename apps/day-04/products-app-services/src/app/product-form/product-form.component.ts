import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  showMessage: boolean = false;

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

  onSave() {
    this.productsService.addProduct(this.product);
    this.showMessage = true;

    this.loggerService.log('Product saved.');

    setTimeout(() => {
      this.showMessage = false;
      console.log('showMessage reset to false');
    }, 4000);

    this.product = new Product();
  }
}
