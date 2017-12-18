import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './views/home/home.component';
import { CreatereadComponent }   from './views/createread/createread.component';
import { Transformation1Component } from './views/transformation1/transformation1.component';
import { Transformation2Component } from './views/transformation2/transformation2.component';
import { Transformation3Component } from './views/transformation3/transformation3.component';
import { Transformation4Component } from './views/transformation4/transformation4.component';
import { Combine1Component } from './views/combine1/combine1.component';
import { Combine2Component } from './views/combine2/combine2.component';
import { Combine3Component } from './views/combine3/combine3.component';
import { Combine4Component } from './views/combine4/combine4.component';
import { PipeComponent } from './views/pipe/pipe.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'createread', component: CreatereadComponent },
 { path: 'transform1', component: Transformation1Component },
 { path: 'transform2', component: Transformation2Component },
 { path: 'transform3', component: Transformation3Component },
 { path: 'transform4', component: Transformation4Component },
 { path: 'combine1', component: Combine1Component },
 { path: 'combine2', component: Combine2Component },
 { path: 'combine3', component: Combine3Component },
 { path: 'combine4', component: Combine4Component },
 { path: 'pipe', component: PipeComponent }
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class MyrouterModule { }