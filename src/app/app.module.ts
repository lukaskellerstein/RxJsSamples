import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MymaterialModule } from './/mymaterial.module';
import { MybootstrapModule } from './/mybootstrap.module';
import { MyrouterModule } from './/myrouter.module';
import { CreatereadComponent } from './views/createread/createread.component';
import { Transformation1Component } from './views/transformation1/transformation1.component';
import { Transformation2Component } from './views/transformation2/transformation2.component';
import { HomeComponent } from './views/home/home.component';
import { Transformation3Component } from './views/transformation3/transformation3.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatereadComponent,
    Transformation1Component,
    Transformation2Component,
    HomeComponent,
    Transformation3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MymaterialModule,
    MybootstrapModule,
    MyrouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
