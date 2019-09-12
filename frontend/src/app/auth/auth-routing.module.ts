import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { LoginGuard } from '../services/guards';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [LoginGuard],
    children: [
      {path: '', component: LoginComponent, pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
