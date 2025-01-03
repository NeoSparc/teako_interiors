import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {
 constructor(private adminService:AdminService){}

 userData:any
ngOnInit(): void {
  this.adminService.getAllUsersList().subscribe((res)=>{
    this.userData = res.data
    console.log(res);
    
  })
}
}
