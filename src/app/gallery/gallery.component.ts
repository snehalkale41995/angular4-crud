import { Component, OnInit, OnDestroy} from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
   providers: [GalleryService]

})
export class GalleryComponent implements OnInit{
 public videoobject : any;
  constructor(private _GalleryService : GalleryService) { }

  ngOnInit() {
    this.getdata();
    } 

   public getdata()
   {
  this._GalleryService.getVideos().subscribe(res => this.videoobject = res.json());
   }



   public addnew(video)
   {
    this.videoobject =
    {
      "title" : video.title ,
      "year" :video.year,
      "favorite" : video.favorite
    }
    
     this._GalleryService.addvideo(this.videoobject).then(() => {
       this.getdata();
        })
   }


  public deletevideo(id)
  {
     if(confirm("Are you sure?")) {
       this._GalleryService.deletevideo(id).then(() => {
       this.getdata();
        })
     }
  }
}
