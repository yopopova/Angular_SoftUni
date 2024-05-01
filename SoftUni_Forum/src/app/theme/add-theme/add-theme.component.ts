import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  // constructor(private apiService: ApiService) {}

  addTheme(form: NgForm) {
    if(form.invalid) {
      return;
    }

    console.log(form.value);
    
  }

  // The old way
  // addTheme(ev: Event, themeName: string, postText: string) {
  //   ev.preventDefault();

  //   // If we want ot see the data, we should '.subscribe()' and 'console.log' the data.
  //   this.apiService.createTheme(themeName, postText);
  // }
}
