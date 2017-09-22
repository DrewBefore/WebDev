import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    FavoriteComponent,
    TitleCasePipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [CoursesService,
  AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
