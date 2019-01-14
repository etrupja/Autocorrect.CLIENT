import { Component } from '@angular/core';
import { AuthenticationService } from './shared/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TekstSaktë';
  username:string;
  constructor( private authService:AuthenticationService) {
       authService.user.subscribe(user=>{
         this.username=user && user.profile && user.profile.name
       })
}
  logout(){
    this.authService.logout();
  }
}
