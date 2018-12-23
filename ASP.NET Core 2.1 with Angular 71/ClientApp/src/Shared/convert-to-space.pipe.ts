import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "ConvertToSpace"
})

export class ConvertToSpace implements PipeTransform {

    transform(value: string, toreplace: string): string{

      return value;
        //return value.replace(toreplace, ' ');
    }
}
