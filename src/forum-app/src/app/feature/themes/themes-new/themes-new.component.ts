import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import ITheme from '../../../core/model/Theme';
import { ThemeService } from '../../../core/service/theme.service';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-themes-new',
  templateUrl: './themes-new.component.html',
  styleUrls: ['./themes-new.component.css'],
})
export class ThemesNewComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  create(body: Object) {
    this.themeService.createTheme(body)
      .subscribe(() => {
        this.router.navigate(["/"])
      });
  }
}
