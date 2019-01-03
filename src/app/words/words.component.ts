import { Component, OnInit, ViewChild } from '@angular/core';
import { WordService } from '../word.service';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { WordElement } from '../interfaces/WordElement';
import { UpdateEntryComponent } from '../update-word/update-word.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  displayedColumns: string[] = ['WrongWord', 'RightWord', 'Actions']
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:WordService,
              private dialog:MatDialog,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<WordElement>(data as WordElement[]);
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
