import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityComponent } from './activity.component';
import {ActivityService} from './activity.service';
import {ActivityOneComponent } from './activityOne/activityOne.component';
import {RouterModule} from '@angular/router';
import {appChildRoutes} from './activity.route';
import {ActivityOneService} from './activityOne/activityOne.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appChildRoutes),
  ],
  declarations: [ 
    ActivityComponent,
    ActivityOneComponent
    ],
  providers:[ActivityService , ActivityOneService],
  exports:[
    ActivityComponent,
    ActivityOneComponent,
    
  ]
})
export class ActivityModule { }
