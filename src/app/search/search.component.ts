import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchDialogComponent } from './searchdialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: string;
  country: string;
  dataObj = { name: "", country: ""};

  @Output() selectedData = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  openDialog() : void {
    let dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '550px',
      data: { name: this.name, country: this.country }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Search Dialog Closed');
      console.log(dialogRef);
      this.dataObj = { name: result.name, country: result.country };
      this.selectedData.emit(this.dataObj);
      console.log(this.dataObj);
    })

    console.log(dialogRef);
  }

  ngOnInit() {
  }

}
