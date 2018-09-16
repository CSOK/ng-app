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

    courses = [
        'course1',
        'course2',
        'course3'
    ];

    getTitle(){
        return this.title;
    }
}