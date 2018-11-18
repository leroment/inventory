import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/inventory.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];

  constructor( private productsService : ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts()
  {
    this.productsService.getProducts()
      .subscribe((products: IProduct[]) => {
        this.products = products;
      }),
      (err: any) => console.log(err);
      () => console.log('getProducts() retrieved products');
  }
}
