import { Injectable } from "@angular/core";
import { IProduct } from "../models/inventory.model";
import { Subject, Observable } from "rxjs";

@Injectable()
export class ProductService {
    getProducts(): Observable<IProduct[]> {
        let subject = new Subject<IProduct[]>();
        setTimeout(() => { subject.next(PRODUCTS); subject.complete(); },
            100);
        return subject;
    }

    getCustomer(id: number): IProduct {
        return PRODUCTS.find(product => product.id === id);
    }
}

const PRODUCTS: IProduct[] = [
    {
        id: 1,
        name: "Book"
    },
    {
        id: 2,
        name: "Toy"
    },
    {
        id: 3,
        name: "Phone"
    },
    {
        id: 4,
        name: "Wallet"
    }
]