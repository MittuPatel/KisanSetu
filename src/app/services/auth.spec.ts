// import { TestBed } from '@angular/core/testing';

// import { Auth } from './auth';

// describe('Auth', () => {
//   let service: Auth;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(Auth);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
