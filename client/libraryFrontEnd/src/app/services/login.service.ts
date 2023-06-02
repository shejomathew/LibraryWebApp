import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  //current user : which is loggetIn
  public getCurrentUser() {
    return this.httpClient.get(`${baseUrl}/user/current-user`);
  }

  //generate token
  public generateToken(loginData: any) {
    return this.httpClient.post(`${baseUrl}/user/authenticate`, loginData);
  }

  // login user : set token in localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //islogin : user is login or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  //logout : to remove token
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //to get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set Userdetail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
