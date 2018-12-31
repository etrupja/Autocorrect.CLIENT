import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WordService } from '../word.service';

@Component({
  selector: 'app-update-word',
  templateUrl: './update-word.component.html',
  styleUrls: ['./update-word.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form:FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA){WrongWord, RightWord},
              private service:WordService) {
                console.log(WrongWord);
                console.log(RightWord);
                
                this.form = fb.group({
                  wrongWord: [WrongWord, Validators.required],
                  rightWord: [RightWord, Validators.required]
                });
  }

  close(){
    this.dialogRef.close();
  }
  save(){
    this.service.updateWord('this.id', this.form.value).subscribe((data) => {
        //result here
    })
  }

  ngOnInit() {
  }

}
