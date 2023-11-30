import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite/universite.component';



@NgModule({
  declarations: [
    UniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule
  ]
})
export class UniversiteModule { }
