import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/inventory.model';
import { ProductsService } from './products.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { AddProductComponent } from 'src/app/shared/modals/add-product/add-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];

  constructor( private productsService : ProductsService, private modalService: NgbModal) { }

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

  openAddProduct()
  {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.componentInstance.name = 'World';
  }
}
