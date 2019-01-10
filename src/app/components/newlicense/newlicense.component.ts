import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LicenseService } from '../../shared/services/license.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-license',
  templateUrl: './newlicense.component.html',
  styleUrls: ['./newlicense.component.css']
})
export class NewLicenseComponent{

  licensePrice = 2000;
  price;
  client_name = '';
  maximum_utilization_count;
  client_email = '';

  constructor(private service:LicenseService,
    private spinner: NgxSpinnerService,
    private router:Router,
    public toastr: ToastrManager) { }

  licenseForm = new FormGroup({
    email: new FormControl('', Validators.email),
    name: new FormControl('', Validators.required),
    maximumUtilizationCount: new FormControl(1, Validators.min(1))
  })

  onSubmit(licenseForm:NgForm) {
    console.log(licenseForm.value);
    
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_kyV742LfU6XvYlJsjx5h1lsZ',
      locale: 'auto',
      currency:'ALL',
      token: function (token: any) {
        token.client_name = licenseForm.value.name;
        token.client_email = licenseForm.value.email;
        token.maximum_utilization_count = licenseForm.value.maximumUtilizationCount;

        console.log('token updated - ', token);
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        const url = 'https://localhost:44387/api/payment/charge';
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) { 
            console.log(this.responseText); 
            alert(this.responseText)
            window.location.href = "http://localhost:4200/";
          }
          else if (this.readyState == 4 && this.status != 200) { 
            console.log(this.responseText); 
            alert(this.responseText)
          } 
          else if(this.readyState == 0){ console.log('UNSENT'); }
          else if(this.readyState == 1){ console.log('OPENED'); }
          else if(this.readyState == 2){ console.log('HEADERS_RECEIVED'); }
          else if(this.readyState == 3) { console.log('LOADING'); }
      };

        xhr.open("POST", url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
          token: token
        }));
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
