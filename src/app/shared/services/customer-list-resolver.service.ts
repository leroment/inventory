import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { CustomerService } from './customer.service';
@Injectable()
export class CustomerListResolver implements Resolve<any> {
    constructor(private customerService: CustomerService) {
    }
    resolve() {
        return this.customerService.getCustomers().pipe(map(customers => customers));
    }
}