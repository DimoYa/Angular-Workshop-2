import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ThemeNewComponent } from './feature/themes/theme-new/theme-new.component';
import { LandingComponent } from './feature/pages/landing/landing.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { ThemeListComponent } from './feature/themes/theme-list/theme-list.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { NotFoundComponent } from './feature/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'themes', component: ThemeListComponent},
  { path: 'themes/new', component: ThemeNewComponent},
  { path: 'myProfile', component: ProfileComponent},
  { path: '**', component: NotFoundComponent},
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
