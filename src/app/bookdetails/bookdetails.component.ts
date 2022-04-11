import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  book!: Book;

  constructor(private activatedRoute: ActivatedRoute,
              private service: BooksService,
              private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.getById(params['id'])
      .subscribe(res => this.book = res)
    })
  }

  goBack() {
    this.location.back()
  }

}
