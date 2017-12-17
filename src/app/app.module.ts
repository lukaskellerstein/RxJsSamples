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
import { Transformation4Component } from './views/transformation4/transformation4.component';
import { Combine1Component } from './views/combine1/combine1.component';
import { Combine2Component } from './views/combine2/combine2.component';
import { Combine3Component } from './views/combine3/combine3.component';
import { Combine4Component } from './views/combine4/combine4.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatereadComponent,
    Transformation1Component,
    Transformation2Component,
    HomeComponent,
    Transformation3Component,
    Transformation4Component,
    Combine1Component,
    Combine2Component,
    Combine3Component,
    Combine4Component
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
