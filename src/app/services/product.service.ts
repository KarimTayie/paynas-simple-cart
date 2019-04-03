import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  navbarCartCount = 0;
  totalPrice = 0;

  selectedProducts: {productCount: number, productPrice: number}[] = [];

  constructor() { }

  addToCart(productObject: {productCount: number, productPrice: number}) {
    this.addToSelectedProducts(productObject);
    this.calculateCartProdCounts(productObject.productCount, productObject.productPrice);
  }

  calculateCartProdCounts(productCount: number, productPrice: number) {
    this.navbarCartCount += productCount;
    this.totalPrice += productCount * productPrice;
  }

  addToSelectedProducts(productObject: {productCount: number, productPrice: number}) {

    for (const prod of this.selectedProducts) {
      if (prod === productObject) {
        prod.productCount += productObject.productCount;
        prod.productPrice += productObject.productPrice;
      } else {
        this.selectedProducts.push(productObject);
      }
    }
  }
}
