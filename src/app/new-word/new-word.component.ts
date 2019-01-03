import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WordService } from '../word.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewEntryComponent {

  constructor(private service:WordService,
    private spinner: NgxSpinnerService,
    private router:Router,
    public toastr: ToastrManager) { }

  entryForm = new FormGroup({
    wrongWord: new FormControl('', Validators.required),
    rightWord: new FormControl('', Validators.required)
  })

  onSubmit(){
    this.spinner.show();
    this.service.createWord(this.entryForm.value).subscribe((data) => {
      this.spinner.hide();
      this.toastr.successToastr('Fjala u krijuar me sukses', 'Success!');
      this.router.navigate(['/']);
    }, err => {
      this.toastr.errorToastr('Fjala nuk u krijua', 'Error!');
      this.spinner.hide();
    })
  }

}
