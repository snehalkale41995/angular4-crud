import { Component, OnInit } from '@angular/core';
import {ActivityOneService} from './activityOne.service';
@Component({
  selector: 'app-activityOne',
  templateUrl: './activityOne.component.html'
})
export class ActivityOneComponent implements OnInit {
 
  constructor(private ActivityOneService: ActivityOneService ) { }
  activity=[];
  ngOnInit() {
      this.activity=this.ActivityOneService.getActivity();   
  }

}
