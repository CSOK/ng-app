import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// Decorator function
@Component({
    selector: 'courses', //.courses or #courses
    template: `
        <h2>{{ "Title: "+ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        ` // Interpolation - Special syntax to render something dynamically
})

export class CoursesComponent{

    title = "List of Courses";
    courses;

    // Logic for http endpoint
    /**
     * Can also be done this way but:
     * 
     * constructor(){
     *      let service = new CoursesService();
     *      this.courses = service.getCourse;
     * }
     * 
     * 1. Using new operator we have tightly coupled this courses component to the courses service.
     * 2. If parameter is added you have to change all places where you used the constructor. 
     * 
     */


    /** Dependency injection
     *  You have de-coupled the dependencies
     */
    constructor(service: CoursesService){
        this.courses = service.getCourse(); 
    }

    getTitle(){
        return this.title;
    }
}