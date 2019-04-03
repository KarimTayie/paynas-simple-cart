import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[] = [
    {
      img: 'assets/492408_main.jpg',
      productName: 'Mobile-1',
      price: 3
    },
    {
      img: 'assets/492408_main.jpg',
      productName: 'Mobile-2',
      price: 5
    },
    {
      img: 'assets/492408_main.jpg',
      productName: 'Mobile-3',
      price: 7
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
