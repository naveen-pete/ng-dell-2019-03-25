import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName: string = 'Dell Inspiron';
  productPrice: number = 35000;

  constructor() {
    // this.productName = 'Dell Inspiron';
  }

  ngOnInit() {
  }

  onSave() {
    console.log('Product information saved.');
  }

  onKeyup(e) {
    // console.log(e.target.value);
  }

}
