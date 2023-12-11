import { Component } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email:string = ""
  password:string = ""
  constructor(private api:AdminApiService, private router:Router){}
  login(){
    if(this.email || this.password){
      this.api.authinticate().subscribe({
        next:(res:any)=>{
          const {email,password} = res
          if (email==this.email && password==this.password) {
            alert("Login success")
            this.router.navigateByUrl("dashboard")
          }else{
            alert("Wrong Credentials.. Try again")
          }
        },error(res:any){
          console.log(res);
        }
      })
    }else{
      alert("Please Fill the form completely")
    }
  }
}
