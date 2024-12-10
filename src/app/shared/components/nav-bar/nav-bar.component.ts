import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  constructor(private router:Router){}

  openMenuBar:boolean = false
  closebar:boolean = false
  navbar:boolean=false

  ngOnInit(): void {
    this.checkScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {  
      const screenWidth = window.innerWidth;
      if (screenWidth < 992) {
        this.onScreenSizeLessThanLg();
      } else {
        this.onScreenSizeLargerThanLg();
      }
    }
  }

  onScreenSizeLessThanLg() {
    this.openMenuBar = false;
    this.closebar = false
    this.navbar = true 
  }

  onScreenSizeLargerThanLg() {
    this.openMenuBar = true;
    this.closebar = false
    this.navbar = false
  }

  open(){
    this.openMenuBar = !this.openMenuBar
    this.navbar = !this.navbar    
    this.closebar = !this.closebar
  }

  goToService(){
    this.router.navigate(['/aboutus']).then(() => {
      // Scroll to the top of the page first
      window.scrollTo(0, 0);
      const serviceSection = document.getElementById('services');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  goToContactSection() {
    this.router.navigate(['/']).then(() => {
      const contactSection = document.getElementById('footer');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' ,block:'end' });
    }
    });
  }

  goToHome(){
    this.router.navigate(['/']).then(()=>{
      window.scroll(0,0)
    })
  }

  goToAboutUs(){
    this.router.navigate(['/aboutus']).then(()=>{
      window.scroll(0,0)
    })
  }

  goToProducts(){
    this.router.navigate(['/products']).then(()=>{
      window.scroll(0,0)
    })
  }
}
