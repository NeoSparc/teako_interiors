import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  openMenuBar:boolean = false
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
    const screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      this.onScreenSizeLessThanLg();
    } else if (screenWidth >= 992) {
      this.onScreenSizeLargerThanLg();
    }
  }

  onScreenSizeLessThanLg() {
    this.openMenuBar = false;
    this.navbar = true 
  }

  onScreenSizeLargerThanLg() {
    this.openMenuBar = true;
    this.navbar = false
  }

  open(){
    this.openMenuBar = !this.openMenuBar
    this.navbar = !this.navbar    
  }
}
