import { Injectable } from "@angular/core";
import { IProduct } from "./product.interface";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, filter, map } from 'rxjs/operators';


@Injectable()
export class ProductService {
    
    private productUrl = 'src/api/products/products.json';
    
    constructor(private http:HttpClient){}
    
    getProducts():Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log("All data: ")),
            catchError(this.handleError)
        );
    }

    getProduct(id:number):Observable<IProduct>|Observable<void> {
        
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            map((products: IProduct[]) => {
                console.log(products.find(p => p.productId == id));
                products.find(p => p.productId == id);
            })
        );
    }

    private handleError(err:HttpErrorResponse) {
        let errorMessage = "";
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}