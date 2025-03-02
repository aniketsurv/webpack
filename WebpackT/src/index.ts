import { addition } from "../bundles/addition";
import { substraction } from "../bundles/substraction";
export class index{

    constructor(){
       console.log(addition.add());
       console.log( substraction.sub());  
    }
    
    display(){
        addition.a.push(10);
        addition.a.push(60);
        addition.a.push("sanjay");
    }
}