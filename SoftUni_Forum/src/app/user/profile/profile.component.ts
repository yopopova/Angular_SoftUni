import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'John Doe',
    email: 'john.doe@gmail.com',
    tel: '321-123-123'
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5), ]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: ['']
  });

  constructor(private fb: FormBuilder) {}

  onEdit(): void {
    this.showEditMode = true;
  }
}
