import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userService.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-showing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-showing.component.html',
  styleUrl: './products-showing.component.css',
})
export class ProductsShowingComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  products: any[] = [];
  searchIndex: string = '';
  selectedCategory: string = 'All';

  categories = [
    'All',
    'Doors',  
    'Windows',
    'Sofas',
    'Curtain',
    'Dining set',
    'Tv unit',
  ];
  
  activeCategory = signal<string>('All');
  selectedProduct = signal<any>;

  ngOnInit(): void {
    this.loadPosts();
  }


  loadPosts() {
    const data = {
      searchIndex: this.searchIndex,
      selectedCategory: this.selectedCategory,
    };
    console.log(data);

    this.userService.showAllProducts(data).subscribe((res) => {
      console.log(res);
      this.products = res.data;
    });
  }

  setActiveCategory(category: string) {
    this.activeCategory.set(category);
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(
      img.alt
    )}`;
  }

  goToSingle(id:string) {
    this.router.navigate(['/singleview/' + id]);
  }
}
