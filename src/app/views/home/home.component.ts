import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ViewResultComponent } from '../modals/view-result/view-result.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['sn','application', 'servermapped', 'lastscandate', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewResult(){
    this.dialog.open(ViewResultComponent, {
      minHeight: '55vh',
      width: '54.5vw',
    })
  }
}
export interface PeriodicElement {
  sn:number;
  application: string;
  servermapped: string;
  lastscandate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sn:1, application: 'Application name goes here', servermapped: '3 severs', lastscandate: '11/12/20 3: 57:29 PM', status:'healthy'},
  {sn:2, application: 'Application name goes here', servermapped: '3 severs', lastscandate: '11/12/20 3: 57:29 PM', status:'unhealthy'},
  {sn:3, application: 'Application name goes here', servermapped:'3 severs', lastscandate: '11/12/20 3: 57:29 PM', status:'healthy'},
  {sn:4, application: 'Application name goes here', servermapped: '3 severs', lastscandate: '11/12/20 3: 57:29 PM', status:'healthy'},
  {sn:5, application: 'Application name goes here', servermapped: '3 severs', lastscandate: '11/12/20 3: 57:29 PM', status:'healthy'},

];
