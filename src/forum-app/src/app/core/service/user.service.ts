import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import ILogin from '../model/Login';
import IRegister from '../model/Register';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  registeredUsers: IRegister[] | null;
  loggedInUser: IRegister | null;
  isLoggedInUser: boolean | null;

  constructor(private router: Router) {
    this.isLoggedInUser = JSON.parse(localStorage.getItem('isLogged') || 'false');
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  }

  register(user: IRegister) {

    this.registeredUsers?.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

    this.router.navigate(['/login']);
  }

  login(user: ILogin) {
    const currentUser = this.registeredUsers?.find((x) => x.email == user.email);
    if (currentUser != undefined) {
      this.isLoggedInUser = true;
      localStorage.setItem('isLogged', JSON.stringify(true));
      this.loggedInUser = currentUser;
      localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
      this.router.navigate(['/']);
    }
  }

  logOut() {
    this.isLoggedInUser = false;
    localStorage.setItem('isLogged', JSON.stringify(false));
    localStorage.removeItem('loggedInUser');
  }

  getCurrentUser() {
    return this.getCurrentUser;
  }
}
