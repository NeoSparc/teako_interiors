import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SingleViewComponent } from '../single-view/single-view.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    RouterOutlet,
    SingleViewComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
