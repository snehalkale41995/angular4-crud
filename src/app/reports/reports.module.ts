import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportsComponent} from './reports.component';
import {ReportsService} from './reports.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    ReportsComponent
  ],
  declarations: [ReportsComponent],
  providers: [ReportsService]
})
export class ReportsModule { }
