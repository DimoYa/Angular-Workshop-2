import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn!: boolean;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }
}
