import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Make it private because we want ot use it only into the class and not into the HTML template
  constructor(private http: HttpClient) { }

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  // We have limit to the posts we should show on the view.
  getPosts(limit?: number) {

  }
}
