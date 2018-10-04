import { Injectable } from "@angular/core";
import { IOrderItem, IProduct, IOrder } from "../models/inventory.model";
import { OrderService } from "./order.service";
import { ProductService } from "./product.service";
import { Observable, Subject } from "rxjs";
import { CustomerService } from "./customer.service";

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
        product: ProductService.getProduct(1),
        order: OrderService.getOrder(1),
        customer: CustomerService.getCustomer(1),
        quantity: 3
    },
    {
        orderItemId: 2,
        product: ProductService.getProduct(2),
        order: OrderService.getOrder(1),
        customer: CustomerService.getCustomer(2),
        quantity: 4
    },
    {
        orderItemId: 3,
        product: ProductService.getProduct(3),
        order: OrderService.getOrder(2),
        customer: CustomerService.getCustomer(3),
        quantity: 2
    },
    {
        orderItemId: 4,
        product: ProductService.getProduct(4),
        order: OrderService.getOrder(2),
        customer: CustomerService.getCustomer(4),
        quantity: 9
    },
    {
        orderItemId: 5,
        product: ProductService.getProduct(4),
        order: OrderService.getOrder(1),
        customer: CustomerService.getCustomer(2),
        quantity: 3
    },
    {
        orderItemId: 6,
        product: ProductService.getProduct(1),
        order: OrderService.getOrder(1),
        customer: CustomerService.getCustomer(1),
        quantity: 4
    },
    {
        orderItemId: 7,
        product: ProductService.getProduct(2),
        order: OrderService.getOrder(2),
        customer: CustomerService.getCustomer(2),
        quantity: 2
    },
    {
        orderItemId: 8,
        product: ProductService.getProduct(3),
        order: OrderService.getOrder(2),
        customer: CustomerService.getCustomer(4),
        quantity: 9
    },

]