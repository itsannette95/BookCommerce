import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newBook: Book = {
    id: +"",
    title: "",
    author: "",
    price: +"",
    editore: "",
    description: ""
  }

  books!: Book[];

  constructor(private service: BooksService) { }

  ngOnInit(): void {
  }

  add() {
    this.service.post(this.newBook)
    .subscribe(res => console.log(res))
  }

  reset(form: NgForm) {
    form.reset()
  }

}
