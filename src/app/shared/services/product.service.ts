import { Injectable } from "@angular/core";
import { IProduct } from "../models/inventory.model";

@Injectable()
export class ProductService {
    
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