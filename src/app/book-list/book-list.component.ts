import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books!: Book[];
  selectedBook!: Book;
  active = true;


  constructor(private service: BooksService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(res => this.books = res)
  }

  delete(event: Event, book:Book) {
    event.stopPropagation();
    this.service.delete(book)
    .subscribe(el => {console.log(el)
    const index = this.books.findIndex(el => book.id === el.id);
    this.books.splice(index, 1)
    })
  }

  setActive(book:Book) {
    this.selectedBook = book;
    //console.log(this.selectedBook)
    this.active = !this.active
  }

  goEdit(event: Event, book:Book) {
    event.stopPropagation();
    this.router.navigate(['book', book.id, 'edit'])
  }

  detail(book:Book) {
    this.router.navigate(['book', book.id, 'details'])
  }

}
