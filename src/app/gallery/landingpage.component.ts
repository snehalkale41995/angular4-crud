import { Component, OnInit} from '@angular/core';
import { GalleryService } from './gallery.service';
@Component({
  selector: 'app-landing',
  template: `<div>
  <router-outlet></router-outlet>
</div>`,
  providers: [GalleryService]

})
export class landingpageComponent {
 
}