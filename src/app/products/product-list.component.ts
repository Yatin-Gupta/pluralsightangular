import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product.interface";
import { ProductService } from "./product.service";

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
    products:IProduct[];

    constructor(private productService:ProductService) {
        this.products = this.productService.getProducts();
        this.listFilter = "cart";
        console.log(this.products);
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

    onRatingNotification($event) {
        console.log($event);
        this.pageTitle = "Product List - " + $event;
    }
}