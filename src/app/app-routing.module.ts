import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "orders", component: MyOrdersComponent },
  { path: "admin/order", component: AdminOrdersComponent },
  { path: "admin/product", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
