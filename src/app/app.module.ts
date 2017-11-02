import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReportsModule} from './reports/reports.module';
import {FundRaisingModule} from './fund-raising/fund-raising.module';
import {MembersModule } from './members/members.module';
import { FormsModule } from '@angular/forms';
import {RegistrationModule } from './registration/registration.module';
import {GalleryModule} from './gallery/gallery.module';
import {ActivityModule} from './activity/activity.module';
import { appRoutes } from "./app.route";
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'



@NgModule({
  declarations: [
 AppComponent
 
  ],
  
  imports: [

    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    RegistrationModule,
    GalleryModule,
    ActivityModule,
    MembersModule,
    ReportsModule,
    FundRaisingModule,
    HttpModule
   

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }