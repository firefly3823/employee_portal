import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../modules/users/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showSideBar: boolean = true;
  selected: Date | null = new Date();
  admin_name: string = '';
  employee_count: number = 0;

  constructor(private api: UserApiService, private router: Router) {}

  ngOnInit(): void {}
  menuBtnClick() {
    this.showSideBar = !this.showSideBar;
  }

  getTotalEmployeeCount() {
    this.api.getAllUsers().subscribe((res: any) => {
      this.employee_count = res.length;
    });
  }

  logout() {
    localStorage.removeItem('admin_name');
    localStorage.removeItem('admin_pswd');
    this.router.navigateByUrl('');
  }

  getUpdatedAdmin(event:any){
    this.admin_name = event
  }
}
