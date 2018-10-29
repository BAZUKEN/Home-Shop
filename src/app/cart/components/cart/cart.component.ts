import { Component, OnInit } from '@angular/core';
import { CartItemModel } from "../../models/cart-item.model";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<CartItemModel>

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
