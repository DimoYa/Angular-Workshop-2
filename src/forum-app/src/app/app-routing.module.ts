import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/shared/landing/landing.component';
import { ThemeListComponent } from './component/theme/theme-list/theme-list.component';
import { RegisterComponent } from './component/authentication/register/register.component';
import { LoginComponent } from './component/authentication/login/login.component';
import { NotFoundComponent } from './component/error/not-found/not-found.component';
import { CreateThemeComponent } from './component/theme/create-theme/create-theme.component';
import { ProfileComponent } from './component/authentication/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'themes', component: ThemeListComponent},
  { path: 'create', component: CreateThemeComponent},
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
