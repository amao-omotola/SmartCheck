import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.scss']
})
export class CreateServerComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreateServerComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal(){

    this.dialogRef.close();
  }
}
