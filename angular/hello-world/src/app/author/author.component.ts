import { AuthorsService } from './../authors/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors;
  
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
