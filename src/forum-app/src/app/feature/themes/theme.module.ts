import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { AsideComponent } from './aside/aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from '../../core/service/theme.service';
import { PostService } from '../../core/service/post.service';
import { UserService } from '../../core/service/user.service';

import { ThemeNewComponent } from './theme-new/theme-new.component';

@NgModule({
  declarations: [
    AsideComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeNewComponent
      ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule],
  providers: [ThemeService, PostService, UserService],
})
export class ThemeModule {}
