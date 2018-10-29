import { Injectable } from '@angular/core';
import { BookModel } from '../products/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books = [
    { id: 104, name: 'Азбука', price: 9, img: 'abc.jpg', capacity: 32 },
    { id: 234, name: 'Чёрное молоко', price: 26, img: 'ch.jpg', capacity: 14 },
    { id: 964, name: 'Библия', price: 12, img: 'biblya.png', capacity: 603 },
  ]

  getBooks(): Array<BookModel> {
    return this.books;
  }

  constructor() { }
}

