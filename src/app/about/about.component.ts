import { Iproducts } from './../iproducts';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecmmendComponent } from "../recmmend/recmmend.component";




@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, RecmmendComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

products:Iproducts[]=[
  {id:0 ,name:"TV" , price:5000 , onSale:true , imgSrc:"./assets/images/1.jpg"},
  {id:1 ,name:"watch" , price:5000 , onSale:false , imgSrc:"./assets/images/2.jpg"},
  {id:2 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:3 ,name:"Choose" , price:5000 , onSale:false , imgSrc:"./assets/images/4.jpg"},
  {id:4 ,name:"Rolex" , price:5000 , onSale:false , imgSrc:"./assets/images/5.jpg"},
  {id:5 ,name:"TV" , price:5000 , onSale:true , imgSrc:"./assets/images/1.jpg"},
  {id:6 ,name:"watch" , price:5000 , onSale:false , imgSrc:"./assets/images/2.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:7 ,name:"Brand" , price:5000 , onSale:true , imgSrc:"./assets/images/3.jpg"},
  {id:8 ,name:"Rolex" , price:5000 , onSale:false , imgSrc:"./assets/images/5.jpg"},
]


// isAdmin:boolean = false;
role:string = 'user'




data:string = ""
}
