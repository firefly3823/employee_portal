import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';
import { TostrService } from 'src/app/services/tostr.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: UserApiService,private router:Router, private toast:TostrService) {}
  user: UserModel = {};
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      // console.log(res);
      const { id } = res;
      this.getExistingUser(id);
    });
  }

  getExistingUser(id: any) {
    this.api.viewUser(id).subscribe((res: any) => {
      // console.log(res);
      this.user = res;
    });
  }

  editUser(id: any) {
    this.api.updateUser(id,this.user).subscribe({
      next:(res:any)=>{
        // console.log(res);
        alert('user Updated')

        this.router.navigateByUrl('/users')
      },
      error:(res:any)=>{
        alert("err")
      }
    })
  }

  cancel(id:any){
    this.getExistingUser(id)
  }
}
