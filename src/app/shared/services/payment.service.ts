import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { APP_CONFIG, AppConfig } from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl: string 

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { 
    this.baseUrl= config.apiEndpoint + '/Payment'

  }

  getTest(){
    // console.log('getWord, wrongWord = ', wrongWord);
    console.log('inside get get');
    // return this.http.get(this.baseUrl+'/chargetest');
  }
}
