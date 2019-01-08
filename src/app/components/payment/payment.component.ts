import { Component, OnInit } from '@angular/core';
  import { of } from 'rxjs';
  import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private service:PaymentService) { }

  licensePrice: string = '1000';

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log('Token - ',token);
        
        const url = 'https://localhost:44387/api/payment/charge';
        var xhr = new XMLHttpRequest();
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
      zipCode: true,
      amount: this.licensePrice
    });
  }
}