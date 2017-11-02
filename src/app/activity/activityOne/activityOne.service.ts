import { Injectable } from '@angular/core';

@Injectable()
export class ActivityOneService {

  constructor() { }
 
  getActivity(){
    return[
  {
		"ActivityId" :"1",
		"ActivityName":"Helping Hands",
		"ActivityDate":"01/11/2016",
		"ActivityTime":"11:30",
		"ActivityVenue":"Pune",
		"VolunteerNumber":"10",
		"UserId":"01" 
	},
	{
		"ActivityId" :"2",
		"ActivityName":"EVidyaLoka",
		"ActivityDate":"29/11/2016",
		"ActivityTime":"18:30",
		"ActivityVenue":"Nasik",
		"VolunteerNumber":"15",
		"UserId":"02" 
	},
	{
		"ActivityId" :"3",
		"ActivityName":"RunningGroups",
		"ActivityDate":"05/10/2015",
		"ActivityTime":"07:30",
		"ActivityVenue":"Mumbai",
		"VolunteerNumber":"20",
		"UserId":"03" 
	},
	{
		"ActivityId" :"4",
		"ActivityName":"CutCancer",
		"ActivityDate":"05/09/2016",
		"ActivityTime":"15:30",
		"ActivityVenue":"Nasik",
		"VolunteerNumber":"100",
		"UserId":"02" 
	},
	{
		"ActivityId" :"5",
		"ActivityName":"GiveSmile",
		"ActivityDate":"27/08/2016",
		"ActivityTime":"09:30",
		"ActivityVenue":"Pune",
		"VolunteerNumber":"10",
		"UserId":"05" 
	},
	{
		"ActivityId" :"6",
		"ActivityName":"ManuskiBhinta",
		"ActivityDate":"05/10/2016",
		"ActivityTime":"11:30",
		"ActivityVenue":"Pune",
		"VolunteerNumber":"20",
		"UserId":"04" 
	},
	{
		"ActivityId" :"7",
		"ActivityName":"GoKarma",
		"ActivityDate":"05/12/2016",
		"ActivityTime":"10:30",
		"ActivityVenue":"Nasik",
		"VolunteerNumber":"25",
		"UserId":"06" 
	},
	{
		"ActivityId" :"8",
		"ActivityName":"BoostLiterates",
		"ActivityDate":"05/09/2016",
		"ActivityTime":"15:30",
		"ActivityVenue":"Pune",
		"VolunteerNumber":"40",
		"UserId":"07" 
	},
	{
		"ActivityId" :"9",
		"ActivityName":"CleanCity",
		"ActivityDate":"04/01/2017",
		"ActivityTime":"07:30",
		"ActivityVenue":"Nasik",
		"VolunteerNumber":"50",
		"UserId":"08" 
	},
	{
		"ActivityId" :"10",
		"ActivityName":"FitnessAwareness",
		"ActivityDate":"05/05/2017",
		"ActivityTime":"06:30",
		"ActivityVenue":"Pune",
		"VolunteerNumber":"20",
		"UserId":"09" 
	}

]
  }

  
}
