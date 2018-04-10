import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses> "courses"
    template: `
    <button class="btn btn-primary">test</button>
    <h2>{{ "title:" + title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})
export class CoursesComponent {
    title = "List of Courses";

    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    
}