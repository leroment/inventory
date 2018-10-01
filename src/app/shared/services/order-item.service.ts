import { Injectable } from "@angular/core";
import { IOrderItem, IProduct, IOrder } from "../models/inventory.model";
import { OrderService } from "./order.service";
import { ProductService } from "./product.service";
import { Observable, Subject } from "rxjs";

@Injectable()
export class OrderItemService {
    getOrderItems(): Observable<IOrderItem[]> {
        let subject = new Subject<IOrderItem[]>();
        setTimeout(() => { subject.next(ORDERITEMS); subject.complete(); },
            100);
        return subject;
    }

    static getOrderItem(id: number): IOrderItem {
        return ORDERITEMS.find(orderItem => orderItem.orderItemId === id);
    }
    
}


const ORDERITEMS: IOrderItem[] = [
    {
        orderItemId: 1,
        product: ProductService.getProduct(4),
        order: OrderService.getOrder(1),
        quantity: 3
    },
    {
        orderItemId: 2,
        product: ProductService.getProduct(1),
        order: OrderService.getOrder(1),
        quantity: 4
    },
    {
        orderItemId: 3,
        product: ProductService.getProduct(2),
        order: OrderService.getOrder(1),
        quantity: 2
    }
]