import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { appRoutes } from './routes'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './shared/services/product.service';
import { CustomerService } from './shared/services/customer.service';
import { CustomerListResolver } from './shared/services/customer-list-resolver.service';
import { ProductListResolver } from './shared/services/product-list-resolver.service';
import { OrderService } from './shared/services/order.service';
import { OrderItemService } from './shared/services/order-item.service';
import { OrderItemListResolver } from './shared/services/order-item-list-resolver.service';
import { OrderListResolver } from './shared/services/order-list-resolver.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ProductService, CustomerService, OrderService, OrderItemService, CustomerListResolver, ProductListResolver,
     OrderItemListResolver, OrderListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
