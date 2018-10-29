import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<BookModel>;

  constructor(public bookService: BooksService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
