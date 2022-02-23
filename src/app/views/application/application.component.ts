import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { AddApplicationComponent } from '../modals/add-application/add-application.component';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  displayedColumns: string[] = ['sn','application', 'applicationtype', 'endpoint', 'host', 'action', 'options'];
  dataSource = new MatTableDataSource<table>(data);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addApplication(){

    this.dialog.open(AddApplicationComponent,{
      minHeight: '55vh',
      width: '54.5vw',
    })
  }

}
export interface table {
  sn:number;
  application: string;
  applicationtype:string;
  endpoint: string;
  host: string;
}

const data: table[] = [
  {sn:1, application: 'Application name goes here', applicationtype:'Application type', endpoint: 'End point', host: '11.12.20.3'},
  {sn:2, application: 'Application name goes here', applicationtype:'Application type', endpoint: 'End point', host: '11.12.20.3'},
  {sn:3, application: 'Application name goes here', applicationtype:'Application type', endpoint:'End point', host: '11.12.20.3'},
  {sn:4, application: 'Application name goes here', applicationtype:'Application type', endpoint: 'End point', host: '11.12.20.3'},
  {sn:5, application: 'Application name goes here', applicationtype:'Application type', endpoint: 'End point', host: '11.12.20.3'},

];
