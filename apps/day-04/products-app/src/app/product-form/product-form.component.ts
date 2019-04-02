import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated = new EventEmitter<Product>();
  product: Product = new Product();
  showMessage: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.productCreated.emit(this.product);
    this.showMessage = true;

    console.log('Product saved.');

    setTimeout(() => {
      this.showMessage = false;
      console.log('showMessage reset to false');
    }, 4000);

    this.product = new Product();
  }
}
