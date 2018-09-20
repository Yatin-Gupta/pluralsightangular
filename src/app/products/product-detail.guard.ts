import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
    
    constructor(private router:Router) {}

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
        console.log(state);
        let id = +next.paramMap.get('id');
        // we can also use let id = next.url[1].path
        if ( isNaN(id) || id < 1 ) {
            alert('Invalid Product Id');
            this.router.navigate(['/products']);
            return false;
        }
        console.log("Guard Id: " + id);
        return true;
    }
}