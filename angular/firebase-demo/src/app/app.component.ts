import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: FirebaseListObservable<any[]>;
  course$;
  author$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('courses');
    this.course$ = db.object('/courses/1');
    this.author$ = db.object('/authors/1');
  }

  add(course: HTMLInputElement) {
    this.courses$.push(course.value);
    course.value = '';
  }

  update(course) {
    this.db.object('/courses/' + course.$key).set({
      title: course.$value + "updated",
      price: 150
    });
  }

  delete(course) {
    this.db.object('/courses/' + course.$key).remove()
    .then(x => console.log("deleted"));
  }
}
