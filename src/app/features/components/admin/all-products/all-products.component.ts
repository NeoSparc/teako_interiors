import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../user/userService.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  products: any;
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

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    const data = {
      searchIndex: this.searchIndex,
      selectedCategory: this.selectedCategory,
    };

    this.userService.showAllProducts(data).subscribe((res) => {
      this.products = res.data;
    });
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(
      img.alt
    )}`;
  }

  goToSingle(id: string) {
    console.log(id);

    this.router.navigate(['/admin/landpage/singleView/', id]);
  }
}
