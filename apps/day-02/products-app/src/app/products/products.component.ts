import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product = new Product();
  showMessage: boolean = false;

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

  constructor() {
    // this.productName = 'Dell Inspiron';
  }

  ngOnInit() {
  }

  onSave() {
    this.products.unshift(this.product);
    this.showMessage = true;

    console.log('Product saved.');

    // let obj = this;
    // setTimeout(function () {
    //   console.log(obj);
    //   obj.showMessage = false;
    //   console.log('showMessage reset to false');
    // }, 4000);

    setTimeout(() => {
      this.showMessage = false;
      console.log('showMessage reset to false');
    }, 4000);

    this.product = new Product();
  }

  onKeyup(e) {
    // console.log(e.target.value);
  }

}
