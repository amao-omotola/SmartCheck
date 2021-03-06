import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewResultComponent>
  ) { }
  result = {
    title: 'App Name 1',
    subTitle: 'End Point',
    servers: [
      {server: 'Server 1', status:'inProgress'},
      {server: 'Server 2', status:'cancel'},
      {server: 'Server 3', status:'done'},
      {server: 'Server 1', status:'done'},
    ]
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
      }

}
