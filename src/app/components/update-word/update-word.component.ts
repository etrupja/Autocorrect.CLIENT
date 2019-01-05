import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WordService } from '../../shared/services/word.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-update-word',
  templateUrl: './update-word.component.html',
  styleUrls: ['./update-word.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form:FormGroup;
  wrongWord;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA){WrongWord, RightWord},
              private service:WordService,
              private spinner: NgxSpinnerService,
              public toastr: ToastrManager) {
                this.wrongWord = WrongWord;
                this.form = fb.group({
                  wrongWord: [{value: WrongWord, disabled: true}, Validators.required],
                  rightWord: [RightWord, Validators.required]
                });
  }

  close(){
    this.dialogRef.close();
  }
  save(){
    this.form.value.wrongWord = this.wrongWord;
    
    this.spinner.show();
    this.service.updateWord(this.form.value.wrongWord, this.form.value).subscribe((data) => {
      this.spinner.hide();
      this.toastr.successToastr('Fjala u perditesua me sukses', 'Success!');
      this.dialogRef.close();
    }, err => {
      this.spinner.hide();
      this.toastr.errorToastr('Fjala nuk u perditesua.', 'Error!');
    })
  }

  ngOnInit() {
  }

}
