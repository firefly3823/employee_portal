import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {
  SERVER_URL = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  authinticate() {
    // api call
    return this.http.get(`${this.SERVER_URL}/users/1`);
  }
}


