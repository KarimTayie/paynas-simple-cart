import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from '../products-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private itemsCollection: AngularFirestoreCollection<Product>;
  items: Observable<any[]>;

  navbarCartCount = 0;
  totalPrice = 0;

  selectedProducts: Product[] = [];
  products: Product[] = [];

  constructor(
    db: AngularFirestore
  ) {
    // this.itemsCollection = this.afs.collection<Product>('products');
    // this.items = this.itemsCollection.valueChanges();
    this.items = db.collection('products').valueChanges();
   }

  addToCart(productObject: Product) {
    this.addToSelectedProducts(productObject);
    this.calculateCartProdCounts(productObject.count, productObject.price);
  }

  calculateCartProdCounts(productCount: number, productPrice: number) {
    this.navbarCartCount += productCount;
    this.totalPrice += productCount * productPrice;
  }

  addToSelectedProducts(productObject: Product) {
    let flag = false;

    for (const prod of this.selectedProducts) {
      if (prod.name === productObject.name) {
        prod.count += productObject.count;
        prod.price += productObject.price;
        flag = true;
      }
    }

    if (!flag) {
      this.selectedProducts.push(productObject);
    }
  }

  getAllProductsObservable() {
    return this.items;
  }

  getAllProducts() {
    return this.products;
  }

  setAllProducts(products: Product[]) {
    this.products = products;
  }

  getSelectedProducts() {
    return this.selectedProducts.slice();
  }

  clearCart() {
    this.navbarCartCount = 0;
    this.totalPrice = 0;
    this.selectedProducts = [];
  }
}
