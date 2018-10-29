import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersModule } from 'src/app/orders/orders.module';
import { CartModule } from 'src/app/cart/cart.module';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { BookListComponent } from 'src/app/products/components/book-list/book-list.component';
import { CartComponent } from 'src/app/cart/components';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'shop', component: BookListComponent },
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }