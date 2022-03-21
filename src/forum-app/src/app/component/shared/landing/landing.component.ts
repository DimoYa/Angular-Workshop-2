import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  get isLogged(): boolean | null {
    return this.userService.isLoggedInUser;
  }

  constructor(public userService: UserService) { }

}
