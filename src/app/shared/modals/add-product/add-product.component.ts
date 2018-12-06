import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from '../../models/inventory.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductsService } from '../../../products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() name;

  addProductForm: FormGroup;
  product: IProduct = {
    name: ''
  };

  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.addProductForm = this.formBuilder.group({
      name: [this.product.name, Validators.required]
    });
  }

  submit({ value, valid }: { value: IProduct, valid: boolean }) {
    if (valid) {
      this.productsService.insertProduct(value)
        .subscribe((product: IProduct) => {
            this.router.navigate(['/products']);
        },
          (err: any) => console.log(err));
    }
  }

}
