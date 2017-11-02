import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-raising',
  templateUrl: './fund-raising.component.html',
  styleUrls: ['./fund-raising.component.css']
})
export class FundRaisingComponent implements OnInit {
  name="Dakshineshwar";
  constructor() { }
  onSubmit(value: any){
    console.log(value);
  }
  ngOnInit() {
  }

}
