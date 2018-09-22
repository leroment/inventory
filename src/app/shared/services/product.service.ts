import { Injectable } from "@angular/core";
import { IProduct } from "../models/inventory.model";

@Injectable()
export class ProductService {
    
}

const PRODUCTS: IProduct[] = [
    {
        id: 1,
        name: "菜心"
    },
    {
        id: 2,
        name: "空心菜"   
    }
]