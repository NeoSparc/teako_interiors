import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  constructor(private router:Router ){}
  isSuperAdmin:any = false
  openSideBar:boolean = false
  openMenubar:boolean=false


  ngOnInit(): void {
    if(typeof window !== 'undefined'){
      this.isSuperAdmin = localStorage.getItem('isSuperAdmin')
    }
    this.checkScreenSize()
  }
  
  logout(){
    
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
    this.openSideBar = false;
    this.openMenubar = true 
  }

  onScreenSizeLargerThanLg() {
    this.openSideBar = true;
    this.openMenubar = false
  }
  open(){
    this.openSideBar = !this.openSideBar
    this.openMenubar = !this.openMenubar    
  }
}
