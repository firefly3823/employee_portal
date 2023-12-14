import { Component } from '@angular/core';
import { UserModel } from '../users.model';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';
import { TostrService } from 'src/app/services/tostr.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:UserModel={}
  constructor(private api:UserApiService,private route:Router,private toast:TostrService){}
  addUser(){
    this.api.addUserApi(this.user).subscribe({
      next:(res:UserModel)=>{
        // console.log(res);
        this.toast.showSuccess('new user added');
        this.route.navigateByUrl("/users")
      },
      error:(err:any)=>{
        this.toast.showerror(err);
      }
    })
  }

  cancel(){
    this.user={}
  }
}
