import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HalloApp';

 tweet ={
   boady : "this is tweet",
   like  :true,
   totlaLikes:25
 }


 onLikeChange(likeStatus){
   // notify server that the like is changed
   console.log("like state is changed : " + likeStatus)
 }


}
