import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})

export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];

  // Make it private because we want ot use it only into the class and not into the HTML template
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe(themes => {
      console.log(themes);
      this.themes = themes;
    });
  }
}
