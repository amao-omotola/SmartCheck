import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { baseUrl } from '../server/urlConfig';
import { UserInfo } from '../models/auth.model';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject!: BehaviorSubject<UserInfo>;
  public user: Observable<UserInfo> | undefined;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
  }

  public get userValue(): UserInfo {
    console.log(this.tokenService.getUserInfo())
    return this.tokenService.getUserInfo();
  }

  login(loginDetail: any){
    console.log(loginDetail)
    return this.http.post<any>(`${baseUrl}users/authenticate`, loginDetail)
    .pipe(
      map((user: UserInfo)=>{
        this.tokenService.saveTokens(user);
        this.tokenService.saveUserInfo(user);
          // this.userSubject.next(user);

          return user;
      })
    )
  }

  isAuthenticated() {
    if (this.tokenService.getToken()) {
      return true;
    }
    return false;
  }

}
