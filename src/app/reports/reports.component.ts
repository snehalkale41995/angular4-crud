import { Component, OnInit } from '@angular/core';
import {ReportsService} from './reports.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

}
