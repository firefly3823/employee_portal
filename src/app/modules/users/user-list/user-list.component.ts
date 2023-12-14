import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';
import { jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  
  p:number = 1;
  searchKey: any = '';
  allUsers: UserModel[] = [];
  constructor(private api: UserApiService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getAllUsers().subscribe({
      next: (res: any) => {
        // console.log(res);
        this.allUsers = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  removeUser(id: any) {
    this.api.deleteUser(id).subscribe({
      next: (res: any) => {
        // console.log(res);
        alert('user deleted');
        this.getAllUsers();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  sortById() {
    this.allUsers.sort((a: any, b: any) => a.id - b.id);
    
  }

  sortByname() {
    this.allUsers.sort((a: any, b: any) => a.name.localeCopmare(b.name));
  }
  generatePDF(){
    let pdf = new jsPDF()
    let head = [['Id','UserName','Email','Status']]
    let body:any =[]
    this.allUsers.forEach((item:any)=>{
      body.push([item.id,item.name,item.email,item.active])
    })
    pdf.setFontSize(16)
    pdf.text("ALL USERS LIST",10,10)
    autoTable(pdf,{head,body})
    pdf.output('dataurlnewwindow')
    pdf.save('allusers.pdf')

  }


}
