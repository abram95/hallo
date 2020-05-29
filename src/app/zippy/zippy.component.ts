import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
 
  @Input('title') title :string;
  @Input('width') width :string ="100%";
  isExpanded :boolean = true;
  constructor() { }

  expandChange(){
    console.log("expand fliped");
     this.isExpanded = !this.isExpanded;
  }
}
