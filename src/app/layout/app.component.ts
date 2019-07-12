import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { Helpers } from '../helpers/helpers';
import { startWith, delay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Helpers]
})
export class AppComponent implements AfterViewInit, AfterViewChecked  {
  subscription: Subscription;
  title = 'angular5-app';
  authentication: boolean;

  constructor(private router: Router, private helpers: Helpers) {

  }

  ngAfterViewChecked(){
  }
  ngAfterViewInit() {
    

    this.subscription = this.helpers.isAuthenticationChanged().pipe(

      startWith(this.helpers.isAuthenticated()),

      delay(0)).subscribe((value) =>{
        this.authentication = value
      }
      );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  logout(){
    this.helpers.logout();

    this.router.navigate(['/login']);
  }
}
