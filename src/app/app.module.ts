import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';


// This is another decorator class
// Converts a plain TypeScript class to a module understood by Angular
@NgModule({
  declarations: [
    // Add all components here
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
