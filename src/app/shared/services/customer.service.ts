import { Injectable } from "@angular/core";
import { ICustomer, IOrder, IOrderItem } from "../models/inventory.model";
import { Subject, Observable } from "rxjs";
import { ProductService } from "./product.service";
import { OrderService } from "./order.service";

@Injectable()
export class CustomerService {

    getCustomers(): Observable<ICustomer[]> {
        let subject = new Subject<ICustomer[]>();
        setTimeout(() => { subject.next(CUSTOMERS); subject.complete(); },
            100);
        return subject;
    }

    static getCustomer(id : number) : ICustomer
    {
        return CUSTOMERS.find(customer => customer.customerId === id);
    }

/*     getOrdersForCustomer(customerId : number) : IOrder[]
    {
        return this.getCustomer(customerId).orders;
    }

    getOrderForCustomer(customerId : number, orderId: number) : IOrder {
        return this.getOrdersForCustomer(customerId).find(order => order.orderId === orderId);
    }

    getOrderItemsForCustomer( customerId : number, orderId: number) : IOrderItem[]
    {
        return this.getOrderForCustomer(customerId, orderId).orderItems;
    }
    
    getOrderItemForCustomer(customerId: number, orderId: number, orderItemId: number)
    {
        return this.getOrderItemsForCustomer(customerId, orderId).find(orderItem => orderItem.orderItemId === orderItemId);
    } */
}

const CUSTOMERS: ICustomer[] = [
    {
        customerId: 1,
        name: "Microsoft"
    },
    {
        customerId: 2,
        name: "Apple"
    },
    {
        customerId: 1,
        name: "Samsung"
    }
]