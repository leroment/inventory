import { Component, OnInit, Input } from '@angular/core';
import { ICustomer, IProduct, IOrder, IOrderItem } from '../shared/models/inventory.model';
import { CustomerService } from '../shared/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { OrderItemService } from '../shared/services/order-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers : ICustomer[];
  products : IProduct[];
  orderItems: IOrderItem[];


  @Input() customer;

  constructor( private customerService : CustomerService, private orderItemService : OrderItemService, private route : ActivatedRoute ) {

   }

  ngOnInit() {
    this.customers = this.route.snapshot.data['customers'];
    this.products = this.route.snapshot.data['products'];
    this.orderItems = this.route.snapshot.data['orderItems'];


  }

  getOrderItemForProduct(id: number)
  {
    return this.orderItems.find(orderItem => orderItem.product.productId === id);
  }

}