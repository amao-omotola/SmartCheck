import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CheckStatusComponent } from '../modals/check-status/check-status.component';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  checkStatus(){
    this.dialog.open(CheckStatusComponent, {
      minHeight: '55vh',
      width: '54.5vw',
    })
  }
}
