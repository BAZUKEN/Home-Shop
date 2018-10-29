import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { WebStylesModule } from './shared/web-styles/web-styles.module';
import { RoutesModule } from './shared/routes/routes.module';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    SharedModule,
    WebStylesModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
