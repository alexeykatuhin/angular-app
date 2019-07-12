import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import {LeftPanelComponent} from './layout/left-panel.component'
import {LoginComponent} from './components/login/login.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, LeftPanelComponent, LoginComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,

    MatButtonModule, 

    MatCheckboxModule,

    MatInputModule,

    MatFormFieldModule,

    MatSidenavModule,

    AppRoutingModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule   {

 }
