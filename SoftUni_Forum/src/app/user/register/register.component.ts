import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  // fb comes from the constructor; 'form' goes to [formGroup]="form" into the template
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
    passGroup: this.fb.group({
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
    }, {
     validators: [matchPasswordsValidator('password', 'rePassword')],   
    })
  });

  // passGroup === form.get('passGroup')
  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { username, email, tel, passGroup: { password, rePassword } = {} } = this.form.value;
    // ! means this parameters must be accepted; 42 row returns observable
    this.userService.register(username!, email!, tel!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/themes']);
    })

    console.log(this.form.value);
  }
}
