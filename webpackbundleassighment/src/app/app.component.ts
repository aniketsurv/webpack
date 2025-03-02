import { Component } from '@angular/core';
import { addition } from 'bundles/addition';
import { substraction } from 'bundles/substraction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webpackbundleassighment';

   num1:any=99;
   num2:any=88;
   num3:any=99;

  constructor(){
    addition.a.push(10,60,"aniket");
    console.log(addition.a);
    console.log(addition.add());

    let va=substraction.sub();
    console.log(va);

    
    substraction.newfun(this.num1,this.num2,this.num3);

  }

  funrrrrr(){
    let s=144440;
    //console.log("hiiiii");
    return s;
  }
}
