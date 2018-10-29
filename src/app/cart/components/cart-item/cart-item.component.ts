import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from "../../models/cart-item.model";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItemModel;
  @Output() delete: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() del: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(event: any) {
    console.log(event);
    this.del.emit(this.item);
  }

}
