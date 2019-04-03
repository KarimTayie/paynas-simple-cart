import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsListComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
