import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { CartService } from 'src/app/services/cart.service';
import { CartItemModel } from 'src/app/cart/models/cart-item.model';
// import { BooksService } from '../../../services/books.service';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: BookModel;

  @Output() buy: EventEmitter<BookModel> = new EventEmitter<CartItemModel>();
  
  items: Array<CartItemModel>

  buyIt(event: any) {
    this.buy.emit(this.book);
    this.cartService.addToCart(this.book)
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
