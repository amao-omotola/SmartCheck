import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './views/login-page/login-page.component';
import { DasboardComponent } from './views/dasboard/dasboard.component';
import { AuthguardService as AuthGuard } from './shared/service/authguard.service';

const routes: Routes = [
  {
    path:"",
    component: LoginPageComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "login",
    component: LoginPageComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "dashboard",
    component: DasboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Dashboard Page"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
