import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }

}
