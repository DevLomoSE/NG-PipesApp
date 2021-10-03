import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(arg: string, flag: boolean): string{
        return flag 
                ? arg.toUpperCase() 
                : arg.toLowerCase();
    }
}