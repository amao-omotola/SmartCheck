import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl } from '../server/urlConfig';
import { TokenService } from '../service/token.service';
import { AuthenticationService } from '../service/authentication.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.authenticationService.userValue;
    const isApiUrl = request.url.startsWith(baseUrl);

    if (isApiUrl) {
      request = request.clone({
          setHeaders: {
              Authorization: 'Bearer ' +this.tokenService.getToken()
          }
      });
  }
    return next.handle(request);
  }
}
