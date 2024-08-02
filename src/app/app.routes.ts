import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AnimalsComponent } from './animals/animals.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FoodComponent } from './food/food.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home" , pathMatch:"full"},
    {path:"home" , component:HomeComponent , title:"home"},
    {path:"about" , component:AboutComponent , title:"about"},
    {path:"gallery" , component:GalleryComponent , title:"gallery" , children:[
        {path:"" , redirectTo:"animals" , pathMatch:"full"},
        {path:"animals" , component:AnimalsComponent},
        {path:"flowers" , component:FlowersComponent},
        {path:"food" , component:FoodComponent}
    ]},
    {path:"**" , component:NotfoundComponent , title:"NotFound"}
];
