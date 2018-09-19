import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = "Product Detail";
  product:IProduct;
  errorMessage:any;

  constructor(private route:ActivatedRoute, private productService:ProductService) {
  }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(
      product => { 
        this.product = product;
        console.log(product);
      },
      error => this.errorMessage = <any>error
    );
  }

}
