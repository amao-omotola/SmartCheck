import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompleteMaterialModule } from './shared/angular-material.module';
import { HomeComponent } from './views/home/home.component';
import { ServerComponent } from './views/server/server.component';
import { ApplicationComponent } from './views/application/application.component';
import { BaseLayoutComponent } from './views/base-layout/base-layout.component';
import { CheckStatusComponent } from './views/modals/check-status/check-status.component';
import { ViewResultComponent } from './views/modals/view-result/view-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    ApplicationComponent,
    BaseLayoutComponent,
    CheckStatusComponent,
    ViewResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompleteMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
