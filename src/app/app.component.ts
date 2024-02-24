import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './basics/flexbox/landing-page/landingPage.component';
import { GalleryComponent } from './basics/flexbox/gallery/gallery.component';
import { CardsComponent } from './basics/flexbox/cards/cards.component';
import { PricingComponent } from './basics/flexbox/pricing/pricing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, GalleryComponent, CardsComponent, PricingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'css-learn';
}
