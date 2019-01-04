import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LicenseService } from '../license.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent{

  constructor(private service:LicenseService,
    private spinner: NgxSpinnerService,
    private router:Router,
    public toastr: ToastrManager) { }

    licenseForm = new FormGroup({
    email: new FormControl('', Validators.email),
    name: new FormControl('', Validators.required),
    maximumUtilizationCount: new FormControl(1, Validators.min(1))
  })

  onSubmit(){
    this.spinner.show();
    this.service.createLicense(this.licenseForm.value).subscribe((response) => {
      this.spinner.hide();
      this.toastr.successToastr('Licensa u krijua me sukses!', 'Success!');

      //license download
      this.service.downloadLicense(response);

    }, err => {
      this.toastr.errorToastr('Licensa nuk u krijua', 'Error!');
      console.log('Error - ',err);
      this.spinner.hide();
    })
  }

}
