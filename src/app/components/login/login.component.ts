import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TokenService } from '../../services/token.service';

import { Helpers } from '../../helpers/helpers';

import { AppConfig } from '../../config/config';
import {AppComponent} from '../../layout/app.component'

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',
  // ,
  // styleUrls: [ './login.component.css' ]

    providers:[TokenService,AppConfig]

})

export class LoginComponent implements OnInit {

  constructor(private helpers: Helpers, private router: Router, private tokenService: TokenService) {   }

  isAuth: boolean

  ngOnInit() {
    this.isAuth = this.helpers.isAuthenticated();
  }

  login(): void {


    let authValues = {"Username":"pablo", "Password":"secret"};

    this.tokenService.auth(authValues).subscribe(token => {


      this.helpers.setToken(token);

     
      this.router.navigate(['/dashboard']);

    });


  }

} 