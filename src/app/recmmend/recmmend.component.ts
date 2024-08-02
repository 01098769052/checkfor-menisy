import { Iproducts } from './../iproducts';
import { Component } from '@angular/core';




@Component({
  selector: 'app-recmmend',
  standalone: true,
  imports: [],
  templateUrl: './recmmend.component.html',
  styleUrl: './recmmend.component.css'
})
export class RecmmendComponent {
  products:Iproducts[]=[
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
]
}
