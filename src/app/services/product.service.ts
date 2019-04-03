import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from '../products-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Firebase observable
  items: Observable<any[]>;

  // Count variables
  navbarCartCount = 0;
  totalPrice = 0;

  // Selected products which will be added to the cart
  selectedProducts: Product[] = [];

  // Firebase observable subscribtion values will be stored in this variable
  products: Product[] = [];

  constructor(
    db: AngularFirestore
  ) {
    this.items = db.collection('products').valueChanges();
   }

  addToCart(productObject: Product) {
    this.addToSelectedProducts(productObject);
    this.calculateCartProdCounts(productObject.count, productObject.price);
  }

  // Updating counter variables with new products counts
  calculateCartProdCounts(productCount: number, productPrice: number) {
    this.navbarCartCount += productCount;
    this.totalPrice += productCount * productPrice;
  }

  addToSelectedProducts(productObject: Product) {
    let flag = false;

    // A simple algorithm to check wether the product is in the array or not
    // if it's not in the array it will add it
    for (const prod of this.selectedProducts) {
      if (prod.name === productObject.name) {
        prod.count += productObject.count;
        flag = true;
      }
    }

    if (!flag) {
      this.selectedProducts.push(productObject);
    }
  }

  // Return products as firebase observable
  getAllProductsObservable() {
    return this.items;
  }

  // Return all products
  getAllProducts() {
    return this.products;
  }

  // Sets all products and store it's value in products
  setAllProducts(products: Product[]) {
    this.products = products;
  }

  // Return a copy of the selected products by counter
  getSelectedProducts() {
    return this.selectedProducts.slice();
  }

  // Clear Cart by reseting all counter variables to zero and selectedproducts to an empty array
  clearCart() {
    this.navbarCartCount = 0;
    this.totalPrice = 0;
    this.selectedProducts = [];
  }
}
