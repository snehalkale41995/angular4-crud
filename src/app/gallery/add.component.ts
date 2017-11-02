import { Component, OnInit, OnDestroy} from '@angular/core';
import { GalleryService } from './gallery.service';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'add-comp',
  templateUrl: './add.component.html',
  styleUrls: ['./gallery.component.css'],
   providers: [GalleryService]

})
export class addComponent implements OnInit{
 public videoobject : any;
  constructor(private _GalleryService : GalleryService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    } 

   public getdata()
   {
  this._GalleryService.getVideos().subscribe(res => this.videoobject = res.json());
   }



   public addnew(video)
   {
    this.videoobject =
    {
      
      "title" : video.title,
      "year" :video.year,
      "favorite" : video.favorite
    }
    
     this._GalleryService.addvideo(this.videoobject).then(() => {
        this.router.navigate(['/']);
      })
      
   }


  
}
