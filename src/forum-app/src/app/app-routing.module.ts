import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/shared/landing/landing.component';
import { ThemeListComponent } from './component/theme/theme-list/theme-list.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'themes', component: ThemeListComponent},
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
