import { NgModule }             from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }                from './helpers/canActivateAuthGuard';

import { Helpers }                from './helpers/helpers';

import { LoginComponent }   from './components/login/login.component';


import { DashboardComponent }   from './components/dashboard/dashboard.component';



const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  { path: 'login', component: LoginComponent},


  // { path: 'dashboard', component: DashboardComponent }
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ],
  providers:[AuthGuard, Helpers]

})

export class AppRoutingModule {}