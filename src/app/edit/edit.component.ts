import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  success: string = '';

  book: Book = {
    id: +"",
    title: "",
    author: "",
    price: +"",
    editore: "",
    description: ""
  }

  constructor(private route: ActivatedRoute,
              private service: BooksService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getById(params['id'])
      .subscribe(res => this.book = res)
    })
  }

  edit(book:Book) {
    this.service.edit(book)
    .subscribe(res => {console.log(res);
      this.success = 'LIBRO MODIFICATO!'
    })
  }

  goBack() {
    history.back()
  }

}
