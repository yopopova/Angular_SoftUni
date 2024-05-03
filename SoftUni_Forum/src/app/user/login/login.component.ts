import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  domains = EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    console.log(form.value);

    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    // Here login() already returns observable.
    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/themes']);
    })
  }

  //The old way to make login
  // login(ev: Event, email: string, password: string) {
  //   ev.preventDefault();
  //   this.userService.login();
  //   this.router.navigate(['/home']);
  // }
}
