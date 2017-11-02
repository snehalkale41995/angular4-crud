import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MembersComponent } from './members.component';
import {MembersService} from './members.service';
import { MemberslistComponent } from './memberslist/memberslist.component';
import {memberRoutes} from './members.route';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(memberRoutes),
    CommonModule
  ],
  declarations: [MembersComponent, MemberslistComponent],
  exports:[MembersComponent, MemberslistComponent],
 providers: [MembersService]
  
})
export class MembersModule { }
