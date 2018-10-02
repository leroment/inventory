import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { OrderService } from './order.service';

@Injectable()
export class OrderListResolver implements Resolve<any> {

    constructor(private orderService: OrderService) {}

    resolve() {
        return this.orderService.getOrders().pipe(map(orders => orders));
    }
}