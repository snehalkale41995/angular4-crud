import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {FundRaisingComponent} from './fund-raising.component';
import {FundRaisingService} from './fund-raising.service';
@NgModule({
  imports: [
    CommonModule,
     FormsModule 
  ],
  exports: [
    FundRaisingComponent
  ],
  declarations: [FundRaisingComponent],
  providers:[FundRaisingService]
})
export class FundRaisingModule { }
