import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from "../app.config";


@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  baseUrl: string

  constructor(private http: HttpClient,@Inject(APP_CONFIG) private config: AppConfig) { 
    this.baseUrl= config.apiEndpoint + '/License'
  }
  getAll(){
    return this.http.get(this.baseUrl);
  }
  createLicense(word){
    return this.http.post(this.baseUrl, word, {responseType: 'blob'});
  }

  isValid(licenseId){
    return this.http.get(this.baseUrl+'/isvalid/'+licenseId);
  }

  setUsage(licenseId){
    return this.http.post(this.baseUrl+'/setusage/',licenseId);
  }

  downloadLicense(response: Blob){
    const url = window.URL.createObjectURL(new Blob([response]))
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'License.lic');
      document.body.appendChild(link);
      link.click();
  }

}
