import { Component, OnInit, Inject } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LicenseService } from '../../shared/services/license.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { APP_CONFIG, AppConfig } from 'src/app/shared/app.config';

@Component({
  selector: 'app-license',
  templateUrl: './newlicense.component.html',
  styleUrls: ['./newlicense.component.css']
})
export class NewLicenseComponent{
  baseUrl: string
  licensePrice = 2000;
  price;
  client_name = '';
  maximum_utilization_count;
  client_email = '';

  constructor(private service:LicenseService,
    private spinner: NgxSpinnerService,
    private router:Router,
    public toastr: ToastrManager,
    public licenseService: LicenseService,
    @Inject(APP_CONFIG) private config: AppConfig) {
      this.baseUrl= config.apiEndpoint + '/payment'

     }

  licenseForm = new FormGroup({
    email: new FormControl('', Validators.email),
    name: new FormControl('', Validators.required),
    maximumUtilizationCount: new FormControl(1, Validators.min(1))
  })

  onSubmit(licenseForm:NgForm) {
    
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_kyV742LfU6XvYlJsjx5h1lsZ',
      locale: 'auto',
      currency:'ALL',
      token:  (token: any)=> {
       
        let payload ={
          name:licenseForm.value.name,
          email:licenseForm.value.email,
          maximumUtilizationCount: licenseForm.value.maximumUtilizationCount,
          token: token.id
        }

        this.licenseService.payAndCreateLicense(payload).subscribe(result=>{
          console.log(result)
         this.toastr.infoToastr("Pagesa u krye me sukses. Navigoni tek lista licensave te shikoni licensen tuaj");
         //TODO navigate to main list  programatically
        },error=>{
          console.log(error)
          this.toastr.errorToastr("Problem duke krijuar licensen");
        })
       
      }
    });

    handler.open({
      name: 'www.tekstsakte.com',
      description: 'Shkruaj Shqip',
      amount: this.licenseForm.value.maximumUtilizationCount * this.licensePrice*100, //500 = 5.00ALL
      email: this.licenseForm.value.email,
      allowRememberMe: false
    });
  }
}
