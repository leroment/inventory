import { Injectable } from "@angular/core";
import { IOrder } from "../models/inventory.model";
import { OrderItemService } from "./order-item.service";
import { Subject, Observable } from "rxjs";
import { CustomerService } from "./customer.service";

@Injectable()
export class OrderService {
    getOrders(): Observable<IOrder[]> {
        let subject = new Subject<IOrder[]>();
        setTimeout(() => { subject.next(ORDERS); subject.complete(); },
            100);
        return subject;
    }

    static getOrder(id: number): IOrder {
        return ORDERS.find(order => order.orderId === id);
    }


}

const ORDERS: IOrder[] = [
    {
        orderId: 1,
        customer: CustomerService.getCustomer(2),
        date: 2
    },
    {
        orderId: 2,
        customer: CustomerService.getCustomer(2),
        date: 3
    }
]