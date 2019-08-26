import {Pipe,PipeTransform} from '@angular/core';
import {Iproduct} from './product.model';

@Pipe({
    name:'search'
})
export class ProductSearchPipe implements PipeTransform{
    transform(value:Iproduct[],userInput:string){
        //Verify user input and change in Lowercase
        userInput=userInput ? userInput.toLocaleLowerCase():null;
        return userInput ? value.filter((product)=>
           ((product.productName.toLowerCase().indexOf(userInput) !== -1) ||product.productCode.toLowerCase().indexOf(userInput) !== -1 )
        ): value;
    }
}