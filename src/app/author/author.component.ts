import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors;
  noOfAuthors;
  constructor(authors: AuthorService) { 
    this.authors = authors.getAuthors();
  }

  ngOnInit() {
  }

}
