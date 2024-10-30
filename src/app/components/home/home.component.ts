import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
