import { Component, OnInit, OnDestroy} from '@angular/core';
import { GalleryService } from './gallery.service';
import { Http, Response, Headers } from '@angular/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';



@Component({
  selector: 'add-comp',
  templateUrl: './update.component.html',
  styleUrls: ['./gallery.component.css'],
   providers: [GalleryService]

})
export class updateComponent implements OnInit{
 public videoobject : any;
  
id:number;
  data:object = {};
  videos = [];
  exist = false;
    videoobj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute,private _GalleryService : GalleryService) { }
  

 

   ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
   



    this._GalleryService.getVideos().subscribe(
      (res: Response) => {
        this.videos = res.json();
        for(var i = 0; i < this.videos.length ; i++) {
          if(parseInt(this.videos[i].id) === this.id) {
            this.exist = true;
            this.data = this.videos[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }
   

  updateProduct(video) {
    this.videoobj = {
       "id" : this.id,
      "title": video.title,
      "year": video.year,
      "favorite": video.favorite
    };
    
 this._GalleryService.updateevideo(this.videoobj)
      .then(() => {
        this.router.navigate(['/']);
      })
  }

  
}
