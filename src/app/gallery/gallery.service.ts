import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GalleryService {

constructor(private _http: Http){}
   id:number;
 
   public getVideos()
    {
    let _url : string = 'http://localhost:4000/api/books';
    return this._http.get(_url);
    }
    
    public addvideo(videoobject)
     {
     let _urladd : string = 'http://localhost:4000/api/books';
    return this._http.post(_urladd,videoobject).toPromise(); 
     }
     
     public deletevideo(videoobject)
     {
      const url = `${"http://localhost:4000/api/book"}/${videoobject}`;
      return this._http.delete(url).toPromise();
   
     }

     public updateevideo(videoobject)
     {
      let _url : string = 'http://localhost:4000/api/books';
      return this._http.put(_url, videoobject).toPromise();
   
     }
     
    


 }
