import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';

const routes: Routes =[
    { path: '',  loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ],
})
export class AppRoutingModule { }
