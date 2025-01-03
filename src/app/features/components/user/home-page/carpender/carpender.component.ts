import { Component } from '@angular/core';

@Component({
  selector: 'app-carpender',
  standalone: true,
  imports: [],
  templateUrl: './carpender.component.html',
  styleUrl: './carpender.component.css'
})
export class CarpenderComponent {
  requestQuote(){
    const contactSection = document.getElementById('connect');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' ,block:'end' });
    }
    
  }
}
