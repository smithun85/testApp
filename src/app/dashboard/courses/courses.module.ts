import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course1Component } from './course1/course1.component';
import { CoursesRoutingModule } from './courses.routing';



@NgModule({
  declarations: [
    Course1Component
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
