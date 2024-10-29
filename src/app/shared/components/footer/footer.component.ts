import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { GoogleMapsModule } from '@angular/google-maps';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    GoogleMapsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  services: { service: string; url: string }[] = [
    { service: "Wooden doors and windows", url: "/services/wooden-doors" },
    { service: "Flush doors", url: "/services/flush-doors" },
    { service: "PVC doors", url: "/services/pvc-doors" },
    { service: "Melamine doors", url: "/services/melamine-doors" },
    { service: "FRP doors", url: "/services/frp-doors" },
    { service: "Steel doors", url: "/services/steel-doors" },
    { service: "WPC doors and frame", url: "/services/wpc-doors" },
    { service: "Aluminum doors and windows", url: "/services/aluminum-doors" },
    { service: "uPVC doors and windows", url: "/services/upvc-doors" },
    { service: "Interior work", url: "/services/interior-work" },
    { service: "Bedroom", url: "/services/bedroom" },
    { service: "Kitchen", url: "/services/kitchen" },
    { service: "Curtain", url: "/services/curtain" },
    { service: "Dining set", url: "/services/dining-set" },
    { service: "Sofas", url: "/services/sofas" },
    { service: "TV unit", url: "/services/tv-unit" },
    { service: "Stair handrail", url: "/services/stair-handrail" },
    { service: "Glass work", url: "/services/glass-work" },
  ];
  

  categories: string[] = [
    "Doors", "Windows", "Interior Design", "Room Design", "Kitchen"
  ];

  

  contactInfo = {
    phone: '+91 9656300444',
    email: 'teakodoors@gmail.com'
  };
}
