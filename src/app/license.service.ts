import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  baseUrl: string = 'https://localhost:44387/api/License/'

  constructor(private http: HttpClient) { }

  createLicense(word){
    return this.http.post(this.baseUrl+'/new', word, {responseType: 'blob'});
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
