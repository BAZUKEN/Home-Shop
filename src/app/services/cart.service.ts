import { Injectable } from '@angular/core';
import {BookModel} from '../products/models/book.model'
import { CartItemModel } from '../cart/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [
    // { id: 104, name: 'Азбука вкуса', price: 9, img: '', quantity: 2 },
    // { id: 234, name: 'Чёрное молоко', price: 26, img: '', quantity: 1 },
    // { id: 964, name: 'Библия', price: 12, img: '', quantity: 60 },
  ]

  getItems(): Array<CartItemModel> {
    return this.items;
  }

  addToCart(book: BookModel) {
    const idx = this.items.findIndex(
      (p) => p.id === book.id);
    if (idx >= 0) {
      this.items[idx].quantity += 1;
    } else {
      const itemInCart: CartItemModel = {id: book.id, name: book.name, price: book.price, img: book.img, quantity: 1};
      this.items.push(itemInCart);
    }
  }

  deleteIt(item: CartItemModel) {
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

}

