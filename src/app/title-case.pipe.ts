import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {

    let words = value.split(' ');
    let i=0;
    words.forEach(word  => {
      
      if(this.ispronoun(word) && i!=0)
          words[i] = word.toLowerCase();
      else
          words[i] = this.titleCase(word);

        
     i++;
    });

    return words.join(" ");
  }
  titleCase(word:string):string{
    return word.substr(0,1).toUpperCase()+
           word.substr(1).toLowerCase();

  }

  ispronoun(word : string):boolean{
    let p =[
      "of",
      "the"
    ];
    return p.includes(word.toLowerCase());
  }

}


