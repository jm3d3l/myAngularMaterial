import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MyUsersService } from './my-users.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule,
    AppRoutingModule
  
  ],
  providers: [
    MyUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
