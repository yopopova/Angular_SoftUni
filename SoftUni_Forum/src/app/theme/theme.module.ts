import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutinModule } from './theme-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutinModule
  ]
})
export class ThemeModule { }
