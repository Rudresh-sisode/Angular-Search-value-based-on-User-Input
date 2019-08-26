import { Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'myPipe'
})
export class MyUpperPipe implements PipeTransform{
    //some people call pipe and some people call filter to it.
    transform(value:string,Kindof):string{
        if(Kindof=='upper'){
            value=value.toUpperCase();
        }
        else{
            value=value.toLowerCase();
        }
        return value;
    }
}