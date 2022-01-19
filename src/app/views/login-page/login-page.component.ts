import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toaster: ToastrService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const username = this.loginForm.get('username')?.value.trim();
    const password = this.loginForm.get('password')?.value.trim();
    console.log(username,password);

    this.authService.login({ username, password })
      .subscribe((res:any) => {
          this.toaster.success("Login successful","success")
          this.route.navigate(['/dashboard'])

      },
       (error)=>{
         console.log(error);

        this.toaster.error(error,"error")
       } )
        ;

  }

}
