import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../products-list/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  selectedProducts: Product[];

  constructor(
    public productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedProducts = this.productService.getSelectedProducts();
  }

  clearCart() {
    this.productService.clearCart();
    this.router.navigateByUrl('/');
  }
}
