import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
],
imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AuthenticationRoutingModule
],
})
export class AuthenticationModule { }
