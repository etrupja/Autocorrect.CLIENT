import { Component, OnInit } from '@angular/core';
import {   AuthenticationService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.css']
})
export class LoggedOutComponent implements OnInit {

  constructor(private authService: AuthenticationService,private router:Router,) { }
  
  ngOnInit() {
      this.authService.completeSignout().then(()=>{
        this.router.navigate([`home`]);
        
      });
  }

}
