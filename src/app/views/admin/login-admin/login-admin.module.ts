import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    LoginAdminRoutingModule
  ]
})
export class LoginAdminModule { }
