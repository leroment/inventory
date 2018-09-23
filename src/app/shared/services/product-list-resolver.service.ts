import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from './product.service';
@Injectable()
export class ProductListResolver implements Resolve<any> {
    constructor(private productService: ProductService) {
    }
    resolve() {
        return this.productService.getProducts().pipe(map(products => products));
    }
}