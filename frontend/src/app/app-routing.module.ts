import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';
import { PageNotFoundComponent } from './error/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppContentComponent,
    children: [
      {path: '', redirectTo: '/auth', pathMatch: 'full'},
      {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: '404', component: PageNotFoundComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
