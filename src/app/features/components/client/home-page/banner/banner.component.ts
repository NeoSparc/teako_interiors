import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  slides = [
    { 
      url: '/images/pexels-japanese-girl-in-europe-1054693504-29109679.jpg', 
      description: 'Discover the beauty of European landscapes with elegance.' 
    },
    { 
      url: '/images/pexels-japanese-girl-in-europe-1054693504-29109683.jpg', 
      description: 'Embrace the charm of quiet streets and timeless architecture.' 
    },
    { 
      url: '/images/pexels-japanese-girl-in-europe-1054693504-29109693.jpg', 
      description: 'Experience serenity in the heart of picturesque surroundings.' 
    }
  ];

  currentSlideIndex = 0;
  intervalId: any;
  animate = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startImageRotation();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000); 
  }

  nextSlide() {
    this.triggerAnimation();
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.resetInterval();
  }

  prevSlide() {
    this.triggerAnimation();
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.resetInterval();
  }

  triggerAnimation() {
    this.animate = false;
    setTimeout(() => this.animate = true, 0);
  }

  resetInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startImageRotation();
    }
  }

  currentBackground() {
    return `url(${this.slides[this.currentSlideIndex].url})`;
  }
}
