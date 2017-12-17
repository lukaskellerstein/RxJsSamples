import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './views/home/home.component';
import { CreatereadComponent }   from './views/createread/createread.component';
import { Transformation1Component } from './views/transformation1/transformation1.component';
import { Transformation2Component } from './views/transformation2/transformation2.component';
import { Transformation3Component } from './views/transformation3/transformation3.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'createread', component: CreatereadComponent },
 { path: 'transform1', component: Transformation1Component },
 { path: 'transform2', component: Transformation2Component },
 { path: 'transform3', component: Transformation3Component }
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class MyrouterModule { }