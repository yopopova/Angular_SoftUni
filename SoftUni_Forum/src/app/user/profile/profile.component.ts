import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  showEditMode: boolean = false;

  onEdit(): void {
    this.showEditMode = true;
  }
}
