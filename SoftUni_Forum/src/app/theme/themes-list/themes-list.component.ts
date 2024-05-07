import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})

export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = [];
  isLoading: boolean = true;

  // Make it private because we want ot use it only into the class and not into the HTML template
  constructor(private api: ApiService, private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe(themes => {
      console.log(themes);

      // If we want to get some of the last added themes, we sould revert the array with data; and get the last 5 added
      const sortDate = (a: { created_at: string }, b: { created_at: string }) => (new Date(b.created_at) as any) - (new Date(a.created_at) as any);
      const temporaryThemes = themes.sort(sortDate as any).slice(0, 5);

      this.themes = temporaryThemes;
      this.isLoading = false;
    });
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((s) => s === this.userService.user?.id);    
    return !!isSubscribedUser;
  }
}
