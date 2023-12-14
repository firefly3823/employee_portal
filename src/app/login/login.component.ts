import { Component } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';
import { TostrService } from '../services/tostr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(
    private api: AdminApiService,
    private router: Router,
    private toast: TostrService
  ) {}
  login() {
    if (this.email || this.password) {
      this.api.authinticate().subscribe({
        next: (res: any) => {
          const { email, password } = res;
          if (email == this.email && password == this.password) {
            localStorage.setItem('admin_name', res.name);
            localStorage.setItem('admin_pswd', res.password);
            this.toast.showSuccess('Login Success');
            this.router.navigateByUrl('dashboard');
          } else {
            this.toast.showerror('Wrong Credentials.. Try again');
          }
        },
        error(res: any) {
          console.log(res);
        },
      });
    } else {
      this.toast.showWarning('Please Fill the form completely');
    }
  }
}
