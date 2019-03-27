import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor(private loggerService: LoggerService) { }

  ngOnInit() { }

  onDelete() {
    this.loggerService.log('Product deleted.');
  }

}
