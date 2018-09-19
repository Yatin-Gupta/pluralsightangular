import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'productListFilter'
})
export class ProductListFilterPipe implements PipeTransform {
    transform(products:any, filter:string):any {
        let result = [];
        if (filter === undefined) {
            return products;
        }
        products.forEach(function(product){
            console.log("Product: " + product.productName);
            console.log("Filter:" + filter);
            if (product.productName.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                result.push(product);
            }
        });
        console.log(result);
        return result;
    }
}