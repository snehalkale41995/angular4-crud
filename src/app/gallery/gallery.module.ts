import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './gallery.service';
import { GalleryComponent } from './gallery.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SafePipe } from './safe.pipe';
import { landingpageComponent } from './landingpage.component';
import {addComponent} from './add.component'
import {HttpModule} from '@angular/http';
import {updateComponent} from './update.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    
    RouterModule.forRoot(
      [
      { path:'', component:GalleryComponent} ,
      { path:'addnew', component:addComponent},
      {path: "updateProduct/:id", component: updateComponent} 
      ])
  ],
  declarations: [GalleryComponent, SafePipe,landingpageComponent,addComponent,updateComponent],
  providers: [GalleryService],
  exports: [GalleryComponent,FormsModule,SafePipe,landingpageComponent,addComponent,updateComponent]
})
export class GalleryModule { }
