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

  // Passing product count, price, name to product service cart
  addToCart(pCount: string, price: number, name: string) {
    const productObject: Product = {
      count: parseInt(pCount, 10),
      price,
      name
    };

    this.productService.addToCart(productObject);

    // Reseting number input field after clicking add to cart
    this.productCountValue.nativeElement.value = 0;
  }

}
