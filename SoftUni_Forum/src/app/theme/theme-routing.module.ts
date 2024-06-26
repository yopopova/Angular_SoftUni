import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { AddThemeComponent } from "./add-theme/add-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";
import { AuthActivate } from "../guards/auth.activate";

// With pathMatch: 'full' we check for white spases in the router
const routes: Routes = [
    // Like this we add children routes to our theme module.
    { path: 'themes', children: [
        { path: '', pathMatch: 'full', component: MainComponent },
        { path: ':themeId', component: CurrentThemeComponent }
    ]},
    { path: 'add-theme', component: AddThemeComponent, canActivate: [AuthActivate] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ThemeRoutingModule {}