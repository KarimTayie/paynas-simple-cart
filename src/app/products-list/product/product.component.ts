import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @ViewChild('pCount') productCountValue: ElementRef;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  addToCart(pCount: string, price: number) {
    const productObject = {
      productCount: parseInt(pCount, 10),
      productPrice: price
    };

    this.productService.addToCart(productObject);
    this.productCountValue.nativeElement.value = 0;
  }

}
