import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUsers:UserModel[]=[]
  constructor(private api:UserApiService){}

  ngOnInit(): void {
      this.getAllUsers()
  }

  getAllUsers(){
    this.api.getAllUsers().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.allUsers = res
      },
      error:(err:any)=>{
        console.log(err);
      }

    })
  }
  removeUser(id:any){
    this.api.deleteUser(id).subscribe({
      next: (res: any) => {
        // console.log(res);
        alert("user deleted")
        this.getAllUsers()

      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}