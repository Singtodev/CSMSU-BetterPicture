import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VersusSectionComponent } from '../../components/sections/home/versus-section/versus-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HorizontalImagesComponent } from '../../components/sections/home/horizontal-images/horizontal-images.component';
import { AboutUsComponent } from '../../components/sections/home/about-us/about-us.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent , VersusSectionComponent , FooterComponent , HorizontalImagesComponent , AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
