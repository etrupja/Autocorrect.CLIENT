import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WordService } from '../word.service';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewEntryComponent {

  constructor(private service:WordService) { }

  entryForm = new FormGroup({
    wrongWord: new FormControl('', Validators.required),
    rightWord: new FormControl('', Validators.required)
  })

  onSubmit(){
    this.service.createWord(this.entryForm.value).subscribe((data) => {
       //operations here
    })
  }

}
