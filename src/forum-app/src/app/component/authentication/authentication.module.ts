import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
],
imports: [
    CommonModule,
    RouterModule,
],
providers: [
    UserService
], 
exports: [
    RegisterComponent
]
})
export class AuthenticationModule { }
