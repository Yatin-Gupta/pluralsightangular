import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product.interface";

@Component({
    selector: "product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: [
        "./product-list.component.css"
    ]
})
export class ProductListComponent implements OnInit {
    pageTitle:string = "Product List";
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImages:boolean = false;
    _listFilter:string = "cart";
    filteredProducts:IProduct[] = [];
    products:IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
          }
    ];

    constructor() {
        this.listFilter = "cart";
    }

    ngOnInit() {
        console.log("ProductListComponent Initialized");
    }
    
    toggleImages():void {
        this.showImages = !this.showImages;
    }

    get listFilter():string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter?this.performFilter(this.listFilter):this.products;
    }

    performFilter(filter:string):IProduct[] {
        return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filter.toLowerCase())!==-1);
    }
}