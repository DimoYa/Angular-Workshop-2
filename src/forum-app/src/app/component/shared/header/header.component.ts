import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLogged(): boolean | null {
    return this.userService.isLoggedInUser;
  }

  get getCurrentUser(): string | undefined {
    console.log(this.userService.loggedInUser);
    return this.userService.loggedInUser?.username;
  }

  constructor(public userService: UserService) {
  }

  logout() {
    this.userService.logOut();
  }
}
