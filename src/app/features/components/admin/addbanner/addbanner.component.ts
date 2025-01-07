import { Component } from '@angular/core';
import { BannerformComponent } from '../../../../shared/components/bannerform/bannerform.component';
import { CommonModule } from '@angular/common';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addbanner',
  standalone: true,
  imports: [BannerformComponent, CommonModule],
  templateUrl: './addbanner.component.html',
  styleUrl: './addbanner.component.css',
})
export class AddbannerComponent {
  constructor(private adminService: AdminService) {}

  loadingStatus: boolean = false;

  bannerData(data: any) {
    this.loadingStatus = true;
    this.adminService.addBanner(data).subscribe((res) => {
      console.log(res);
      this.loadingStatus = false;
    });
  }
}

