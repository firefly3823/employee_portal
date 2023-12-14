import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css'],
})
export class UpdateAdminComponent implements OnInit {
  profileImage: string = './assets/images/user-avatar.webp';
  editAdminStatus: boolean = false;
  adminDetail:any = {}
  constructor(private api:AdminApiService){}

  ngOnInit(): void {
      this.api.authinticate().subscribe((res:any)=>{
        this.adminDetail = res
        if (res.picture) {
          this.profileImage = res.picture
        }
      })
  }

  editAdminBtnClick() {
    this.editAdminStatus = true;
  }
}
