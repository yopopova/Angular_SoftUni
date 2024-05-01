import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ThemeModule { }
