import { Component, OnInit, ViewChild } from '@angular/core';
import { WordService } from '../../shared/services/word.service';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { WordElement } from '../../shared/interfaces/WordElement';
import { UpdateEntryComponent } from '../update-word/update-word.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { LicenseListViewModel } from 'src/app/shared/interfaces/LicenseListViewModel';
import { LicenseService } from 'src/app/shared/services/license.service';

@Component({
  selector: 'app-words',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css']
})
export class LicensesComponent implements OnInit {

  displayedColumns: string[] = ['MaxUtilization', 'Utilized', 'ExpiresOn']
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:LicenseService,
              private dialog:MatDialog,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<LicenseListViewModel>(data as LicenseListViewModel[]);
      this.dataSource.paginator = this.paginator;
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateWord(word){
    this.dialog.open(UpdateEntryComponent, {
      data: {
        WrongWord:word.wrongWord,
        RightWord:word.rightWord
      }
    })
  }

}
