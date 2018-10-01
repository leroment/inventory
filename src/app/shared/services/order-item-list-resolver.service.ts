import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { OrderItemService } from './order-item.service';

@Injectable()
export class OrderItemListResolver implements Resolve<any> {

    constructor(private orderItemService: OrderItemService) {}

    resolve() {
        return this.orderItemService.getOrderItems().pipe(map(orderItems => orderItems));
    }
}