import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route:ActivatedRoute, private router:Router, private productService:ProductService) {
  }

  ngOnInit() {
    let prodId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(prodId).subscribe(
      product => { 
        this.product = product;
      },
      error => { 
        this.errorMessage = <any>error
      }
    );
    // this.product = {
    //   "productId": 2,
    //   "productName": "Garden Cart",
    //   "productCode": "GDN-0023",
    //   "releaseDate": "March 18, 2016",
    //   "description": "15 gallon capacity rolling garden cart",
    //   "price": 32.99,
    //   "starRating": 4.2,
    //   "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    // };
  }

  onBack() {
    this.router.navigate(['/products']);
  }

}
