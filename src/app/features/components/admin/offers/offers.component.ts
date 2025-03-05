import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
})
export class OffersComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}
  offers = signal<any[]>([]);
  loadingStatus:boolean= false
  ngOnInit(): void {
    this.adminService.getAllOffers().subscribe({
      next: (res) => {
        this.offers.set(res.data);
      },
      error: (err) => {},
    });
  }

  editAd(id: any): void {
    console.log(id);
    this.router.navigate(['/admin/editoffer/',  id])
    
  }

  deleteAd(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loadingStatus = true;
        this.adminService.deleteOffer(id).subscribe({
          next: (res) => {
            this.loadingStatus = false;
            Swal.fire(
              'Deleted!',
              'The offer has been deleted successfully.',
              'success'
            );
            this.ngOnInit();
          },
          error: (err) => {
            this.loadingStatus = false;
            Swal.fire(
              'Error!',
              'Failed to delete the offer. Please try again.',
              'error'
            );
          }
        });
      }
    });
  }

}
