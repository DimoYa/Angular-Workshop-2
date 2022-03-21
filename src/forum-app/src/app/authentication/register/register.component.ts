import { Component, OnInit } from '@angular/core';
import IRegister from '../../core/model/Register';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
    register(data: IRegister) {
      this.userService.register(data);
    }
}
