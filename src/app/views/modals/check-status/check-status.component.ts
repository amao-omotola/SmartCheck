import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { CheckResultComponent } from '../check-result/check-result.component';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent implements OnInit {
  task: Task = {
    name: 'All Application',
    completed: false,
    subtasks: [
      {name: 'App Name 1', completed: false},
      {name: 'App Name 2', completed: false},
      {name: 'App Name 3', completed: false},
      {name: 'App Name 4', completed: false},
    ],
  };

  server: Server = {
    name: 'All Servers',
    completed: false,
    subservers: [
      {name: 'Server 1', completed: false},
      {name: 'Server 2', completed: false},
      {name: 'Server 3', completed: false},
      {name: 'Server 4', completed: false},
    ],
  };
  allComplete: boolean = false;
  constructor(
    private dialogRef:MatDialogRef<CheckStatusComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }


  updateAllCompleteServer() {
    this.allComplete = this.server.subservers != null && this.server.subservers.every(t => t.completed);
  }

  someCompleteServer(): boolean {
    if (this.server.subservers == null) {
      return false;
    }
    return this.server.subservers.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAllServer(completed: boolean) {
    this.allComplete = completed;
    if (this.server.subservers == null) {
      return;
    }
    this.server.subservers.forEach(t => (t.completed = completed));
  }

  closeModal() {
    this.dialogRef.close();
  }

  checkResultModal(){
    this.dialogRef.close();

    this.dialog.open(CheckResultComponent,{
      height: '80vh',
      width: '54.5vw',
    })
  }

}

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
export interface Server {
  name: string;
  completed: boolean;
  subservers?: Task[];
}
