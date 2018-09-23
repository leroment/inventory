import { Injectable } from "@angular/core";
import { ICustomer } from "../models/inventory.model";
import { Subject, Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable()
export class CustomerService {

    constructor(private productService : ProductService) {
        
    }

    getCustomers() : Observable<ICustomer[]>
    {
      let subject = new Subject<ICustomer[]>();
      setTimeout(() => {subject.next(CUSTOMERS); subject.complete(); }, 
          100);
        return subject;
    }

    getCustomer(id : number) : ICustomer
    {
        return CUSTOMERS.find(customer => customer.customerId === id);
    }
    
}

const CUSTOMERS: ICustomer[] = [
    {
        customerId: 1,
        name: "Microsoft",
        orders: [
            {
                orderId: 1,
                date: 3,
                orderItems: [
                    {
                        orderItemId: 1,
                        product: this.productService.getProduct(1),
                        quantity: 3,
                        price: 4
                    }
                ]
            }
        ]
    }
]