import { Component } from '@angular/core';
import { AnimalsComponent } from "../animals/animals.component";
import { FlowersComponent } from "../flowers/flowers.component";
import { FoodComponent } from "../food/food.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
