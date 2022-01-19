import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void
  dashContent:any[] = [];
  profileImg:any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private dashboardService:DashboardService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit(): void {

    this.dashboardService.getDetails().subscribe((res:any)=>{
      this.dashContent = res;
    })

    this.dashboardService.getprofile().subscribe((res:any)=>{
      this.profileImg=res.url;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
