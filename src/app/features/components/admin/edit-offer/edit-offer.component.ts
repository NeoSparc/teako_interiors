import { Component, OnInit } from '@angular/core';
import { OfferformComponent } from '../../../../shared/components/offerform/offerform.component';
import { AddofferComponent } from '../addoffer/addoffer.component';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-offer',
  standalone: true,
  imports: [OfferformComponent, CommonModule],
  templateUrl: './edit-offer.component.html',
  styleUrl: './edit-offer.component.css',
})
export class EditOfferComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}
  loadingStatus: boolean = false;
  ngOnInit(): void {}

  offerData(data: any) {
    this.loadingStatus = true;
    this.adminService.editOffer(data).subscribe({
      next: (res) => {
        this.router.navigate(['/admin/offers']);
        this.loadingStatus = false;
      },
      error: (err) => {},
    });
  }
}
