import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from 'src/app/core/service/theme.service';
import { PostService } from 'src/app/core/service/post.service';
import { UserService } from 'src/app/core/service/user.service';

@NgModule({
  declarations: [AsideComponent, ThemeListComponent, ThemeListItemComponent],
  imports: [CommonModule, AppRoutingModule, RouterModule],
  providers: [ThemeService, PostService, UserService],
})
export class ThemeModule {}
