import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationService } from './registration-service.service';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [RegistrationComponent],
  providers:[RegistrationService],
  exports:[RegistrationComponent]
})
export class RegistrationModule {
  
 }
