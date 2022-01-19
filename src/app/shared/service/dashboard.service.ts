import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseUrl } from '../server/urlConfig';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private token: TokenService,
    private http: HttpClient
  ) { }

  getDetails() {
    return this.http.get<any>(`${baseUrl}modules/getcourseprogressdetails`, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.token.getToken
      }),
    })
  }
  //lmsapi.impata.com/useraccount/getuserprofileimage?userid=&lt;userid
  getprofile(){
    let user = this.token.getUserInfo()
    return this.http.get<any>(`${baseUrl}useraccount/getuserprofileimage?userid=${user.id}`)
  }
}
