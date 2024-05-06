import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// With pathMatch: 'full' we check for white spases in the router
// If we don't use 'redirectTo', our URL will be dirty; it won't be 404, but the thing we or someone write
// We should also change the paths into templates, because of the 'auth'
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
  { path: 'auth', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, // Lazy loading example; we remove the UserModule from AppModule to add it here
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
