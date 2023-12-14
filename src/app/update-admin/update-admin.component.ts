import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';
import { TostrService } from '../services/tostr.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css'],
})
export class UpdateAdminComponent implements OnInit {
  profileImage: string = './assets/images/user-avatar.webp';
  editAdminStatus: boolean = false;
  adminDetail:any = {}
  @Output() onAdminChange = new EventEmitter()
  constructor(private api:AdminApiService, private toast:TostrService){}

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

  getFile(event:any){
    let file = event.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event:any)=>{
      this.profileImage = event.target.result
      this.adminDetail.picture = this.profileImage
    }
  }

  cancel(){
  this.editAdminStatus = false;
  }

  updateAdmin(){
    this.api.updateAdmin(this.adminDetail).subscribe({
      next:(res:any)=>{
        this.toast.showSuccess("admin details updated")
        localStorage.setItem('admin_name', res.name);
        localStorage.setItem('admin_pswd', res.password);
        this.onAdminChange.emit(res.name)
        this.editAdminStatus = false
      },
      error:(err:any)=>{
        this.toast.showerror("Update Failed")
      }
    })
  }
}
