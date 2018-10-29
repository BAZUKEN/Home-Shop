import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent, CartItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent, CartItemComponent]
})
export class CartModule { }
