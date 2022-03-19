import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AsideComponent } from './component/aside/aside.component';
import { ThemeListComponent } from './component/theme-list/theme-list.component';
import { ThemeListItemComponent } from './component/theme-list-item/theme-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './service/theme.service';
import { PostService } from './service/post.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ThemeListComponent,
    ThemeListItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ThemeService, PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
