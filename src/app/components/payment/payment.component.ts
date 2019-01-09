import { Component, OnInit } from '@angular/core';
  import { of } from 'rxjs';
  import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private service:PaymentService,
              public toastr: ToastrManager) { }

  licensePrice: number = 2000;
  _toastr: ToastrManager = null;

  openCheckout(_price) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_kyV742LfU6XvYlJsjx5h1lsZ',
      locale: 'auto',
      currency:'ALL',
      token: function (token: any) {
        token.price = _price; //set the price
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        const url = 'https://localhost:44387/api/payment/charge';
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
          }
          else if (this.readyState == 4 && this.status != 200) {
            console.log(this.responseText);
          }
          else if(this.readyState == 0){
            console.log('UNSENT');
          }
          else if(this.readyState == 1){
            console.log('OPENED');
          }
          else if(this.readyState == 2){
            console.log('HEADERS_RECEIVED');
          }
          else if(this.readyState == 3)
          {
            console.log('LOADING');
          }
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
      amount: this.licensePrice*100 //500 = 5.00ALL
    });
  }
}