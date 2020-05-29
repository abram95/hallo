import { Component,Input,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {
     @Input('is-liked') isLiked:boolean =false;
     @Input('total-number-of-likes') totalNumberOfLikes:number =0;
     @Output('on-like-change')  ChangeStatus =  new EventEmitter();

     onLikeClike(){
      //change state of the like 
      this.isLiked = !this.isLiked;

       if(this.isLiked) this.totalNumberOfLikes++;
       else {
        this.totalNumberOfLikes --;
         if(this.totalNumberOfLikes<=0)this.totalNumberOfLikes=0;
       }
       // notify subscriper that the like is change
       this.ChangeStatus.emit(this.isLiked); 
     }

}
