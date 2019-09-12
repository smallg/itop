import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContentComponent } from './home-content.component';
import { HomeComponent } from './home/home.component';
import { UserService } from '../services/api/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class HomeModule {
}
