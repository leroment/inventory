import { Injectable } from "@angular/core";
import { ICustomer } from "../models/inventory.model";
import { Subject, Observable } from "rxjs";

@Injectable()
export class ProductService {

    getCustomers() : Observable<ICustomer[]>
    {
      let subject = new Subject<ICustomer[]>();
      setTimeout(() => {subject.next(CUSTOMERS); subject.complete(); }, 
          100);
        return subject;
    }

    getCustomer(id : number) : ICustomer
    {
        return CUSTOMERS.find(customer => customer.id === id);
    }

    
    


}

const CUSTOMERS: ICustomer[] = [
    {
        id: 1,
        name: "Microsoft"
    },
    {
        id: 2,
        name: "Apple"   
    },
    {
        id: 3,
        name: "Amazon"
    },
    {
        id: 4,
        name: "Samsung"
    }
]