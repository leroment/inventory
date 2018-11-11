import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes } from "@angular/router";
import { CustomerListResolver } from "./shared/services/customer-list-resolver.service";
import { ProductListResolver } from "./shared/services/product-list-resolver.service";
import { OrderItemListResolver } from "./shared/services/order-item-list-resolver.service";
import { OrderListResolver } from "./shared/services/order-list-resolver.service";
import { ProductsComponent } from "./products/products.component";

export const appRoutes : Routes = [
    { path: 'dashboard', component: DashboardComponent, resolve: { customers: CustomerListResolver, products: ProductListResolver, 
        orderItems: OrderItemListResolver, orders: OrderListResolver} },
    { path: 'products', component: ProductsComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]