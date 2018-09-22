import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/models/inventory.model';
import { CustomerService } from '../shared/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers : ICustomer[];

  constructor( private customerService : CustomerService, private route : ActivatedRoute ) {

   }

  ngOnInit() {
    this.customers = this.route.snapshot.data['customers'];
  }

}
