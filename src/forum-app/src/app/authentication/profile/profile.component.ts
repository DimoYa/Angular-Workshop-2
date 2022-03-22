import { Component, OnInit } from '@angular/core';
import IRegister from '../../core/model/Register';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: IRegister | null = this.userService.getCurrentUser();

  constructor(private userService: UserService) { }

  ngOnInit(): void {  }
}
