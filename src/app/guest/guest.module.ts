import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './pages/home/home.component';
import { GuestComponent } from './guest.component';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  declarations: [HomeComponent, GuestComponent],
  imports: [CommonModule, GuestRoutingModule, MatButtonModule],
})
export class GuestModule {}
