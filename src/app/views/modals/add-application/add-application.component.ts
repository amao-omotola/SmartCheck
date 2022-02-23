import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddApplicationComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(){

    this.dialogRef.close();
  }
}
