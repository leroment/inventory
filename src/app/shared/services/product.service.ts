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

    static getProduct(id: number): IProduct {
        return PRODUCTS.find(product => product.productId === id);
    }
}

const PRODUCTS: IProduct[] = [
    {
        productId: 1,
        name: "Book"
    },
    {
        productId: 2,
        name: "Toy"
    },
    {
        productId: 3,
        name: "Phone"
    },
    {
        productId: 4,
        name: "Wallet"
    }
]