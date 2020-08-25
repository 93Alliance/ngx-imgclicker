
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgxImgclickerModule } from 'ngx-imgclicker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // NgxImgclickerModule
    NgxImgclickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
