import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  bookUrl = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(this.bookUrl);
  }

  getById(id:number) {
    return this.http.get<Book>(`${this.bookUrl}/${id}`)
  }

  delete(book: Book) {
    return this.http.delete(`${this.bookUrl}/${book.id}`);
  }

  post(book: Book) {
    return this.http.post<Book>(`${this.bookUrl}/`, book);
  }

  edit(book:Book) {
    return this.http.patch<Book>(`${this.bookUrl}/${book.id}`, book)
  }

}

