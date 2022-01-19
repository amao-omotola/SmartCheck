import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { UserInfo } from '../models/auth.model';

const ACCESS_TOKEN = 'access_token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookie: CookieService) { }

  saveTokens(tokens:any){
    console.log(tokens);

    let decodedAccessToken: any = jwt_decode(tokens.token);

    this.cookie.set(ACCESS_TOKEN, tokens.token);
  }

  getToken(): string {
    return this.cookie.get(ACCESS_TOKEN);
  }

  removeToken(): void {
    this.cookie.delete(ACCESS_TOKEN);
  }

  saveUserInfo(user_info: UserInfo) {

    this.cookie.set('user', JSON.stringify(user_info));
    console.log(this.cookie.get('user'));

  }

  getUserInfo(): UserInfo {
    // try {
      return JSON.parse(this.cookie.get('user'));
    // }
    // catch (error) {
    //   return null
    // }
  }

  deleteAll() {
    return this.cookie.deleteAll();
  }

  removeUserInfo() {
    this.cookie.delete('user');
  }
}
