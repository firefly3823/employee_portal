import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  SERVER_URL = 'http://localhost:4000';
  constructor(private http: HttpClient) {}
  // add user api
  addUserApi(user: UserModel) {
    return this.http.post(`${this.SERVER_URL}/users`, user);
  }
  //get all users
  getAllUsers() {
    return this.http.get(`${this.SERVER_URL}/users`);
  }
  //delete user

  deleteUser(id: string) {
    return this.http.delete(`${this.SERVER_URL}/users/${id}`);
  }

  viewUser(id: any) {
    return this.http.get(`${this.SERVER_URL}/users/${id}`);
  }

  // update user
  updateUser(id:any,user:UserModel){
    return this.http.put(`${this.SERVER_URL}/users/${id}`,user)
  }
  
  cancel(id:any){
    this.viewUser(id)
  }

}
