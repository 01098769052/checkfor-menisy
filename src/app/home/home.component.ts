import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

username:string = "Mohamed Saeed"
userage:number = 23

calcSalary():number{
  let salary = 5000;
  let days = 5 ;

  return salary * days
}

imgSrc:string = "./assets/images/2.jpg"

imgAlt:string = "hamada"
placeholder:string = "Enter You Name"
isDisabled:boolean = false ;

test(){
  alert("sayhello")
  
}
sayHello(eventInfo:KeyboardEvent){
  console.log(eventInfo.key);
  
}


isAdmin:boolean = true;

checkUser():boolean{
  if(this.isAdmin){
    return true
  }else{
    return false
  }
}

red:string = "red";

}
