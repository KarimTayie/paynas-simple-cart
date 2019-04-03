import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productsList = this.productService.getAllProducts();
    this.productService.getAllProductsObservable().subscribe(
      products => {
        this.productsList = products;
        this.productService.setAllProducts(products);
      }
    );
  }

}
