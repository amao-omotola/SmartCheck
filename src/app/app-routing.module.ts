import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { BaseLayoutComponent } from './views/base-layout/base-layout.component';
const routes: Routes = [
  {
    path:"",
    component: BaseLayoutComponent,
    data: {
      title: "Home Page"
    }
  },
  {
    path: "home",
    component: BaseLayoutComponent,
    data: {
      title: "Home Page"
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
