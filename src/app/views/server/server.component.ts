import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CreateServerComponent } from '../modals/create-server/create-server.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  displayedColumns: string[] = ['sn','application', 'ipaddress', 'cpu', 'memory', 'storage', 'action', 'options'];
  dataSource = new MatTableDataSource<table>(data);

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

  createServer(){

    this.dialog.open(CreateServerComponent, {
      minHeight: '55vh',
      width: '54.5vw',
    })
  }
}
export interface table {
  sn:number;
  application: string;
  ipaddress:string;
  cpu: string;
  memory: string;
  storage: string;
}

const data: table[] = [
  {sn:1, application: 'Server name goes here', ipaddress:'IP Address goes here', cpu: '85.6', memory: '73.9', storage: '50'},
  {sn:2, application: 'Server name goes here', ipaddress:'IP Address goes here', cpu: '85.6', memory: '73.9', storage: '50'},
  {sn:3, application: 'Server name goes here', ipaddress:'IP Address goes here', cpu:'85.6', memory: '73.9', storage: '50'},
  {sn:4, application: 'Server name goes here', ipaddress:'IP Address goes here', cpu: '85.6', memory: '73.9', storage: '50'},
  {sn:5, application: 'Server name goes here', ipaddress:'IP Address goes here', cpu: '85.6', memory: '73.9', storage: '50'},

];
