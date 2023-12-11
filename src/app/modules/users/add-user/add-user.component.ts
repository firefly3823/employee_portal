import { Component } from '@angular/core';
import { UserModel } from '../users.model';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:UserModel={}
  constructor(private api:UserApiService,private route:Router){}
  addUser(){
    this.api.addUserApi(this.user).subscribe({
      next:(res:UserModel)=>{
        // console.log(res);
        alert("new user added")
        this.route.navigateByUrl("/users")
      },
      error:(err:any)=>{
        alert(err)
      }
    })
  }

  cancel(){
    this.user={}
  }
}
