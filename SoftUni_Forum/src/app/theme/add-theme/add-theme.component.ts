import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addTheme(form: NgForm) {
    if(form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;
    this.apiService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }

  // The old way
  // addTheme(ev: Event, themeName: string, postText: string) {
  //   ev.preventDefault();

  //   // If we want ot see the data, we should '.subscribe()' and 'console.log' the data.
  //   this.apiService.createTheme(themeName, postText);
  // }
}
