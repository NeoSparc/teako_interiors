import { Component } from '@angular/core';
import { OfferformComponent } from '../../../../shared/components/offerform/offerform.component';
import { CommonModule } from '@angular/common';
import { AdminService } from '../admin.service';
import { log } from 'node:console';

@Component({
  selector: 'app-addoffer',
  standalone: true,
  imports: [OfferformComponent, CommonModule],
  templateUrl: './addoffer.component.html',
  styleUrl: './addoffer.component.css',
})
export class AddofferComponent {
  constructor(private adminService: AdminService) {}

  loadingStatus: boolean = false;

  offerData(data: any) {
    this.loadingStatus = true;
    this.adminService.createOffer(data).subscribe((res) => {
      console.log(res);
      this.loadingStatus = false;
    });
  }
}
