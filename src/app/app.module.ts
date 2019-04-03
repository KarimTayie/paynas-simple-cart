import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './products-list/product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    NavbarComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
