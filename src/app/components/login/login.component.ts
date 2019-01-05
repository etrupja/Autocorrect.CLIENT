import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    userName:'',
    password:''
  }

  constructor(private service:AuthenticationService, 
              private router:Router) { }

  login(){
    //  (this.loginData);
    // this.service.login(this.loginData).subscribe((data:any) => {
    //    (data);
    //   localStorage.setItem('userName', data.UserName);
    //   localStorage.setItem('token_value', data.Token);
    //   this.router.navigate(['/entries']);
    // },
    // (error) => alert(error.error.Message));
  }

}
