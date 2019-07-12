import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../helpers/helpers';
import { ThrowStmt } from '@angular/compiler';


@Component({

  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html'
  
  // ,
  // styleUrls: [ './login.component.css' ]

})

export class DashboardComponent implements OnInit {


  constructor(private helpers: Helpers) {

  }

ngOnInit(){
}

  }

