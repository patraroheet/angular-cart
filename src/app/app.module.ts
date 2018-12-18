import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ShippingComponent} from './shipping/shipping.component';
import {PaymentComponent} from './payment/payment.component';
import {EcomService} from './shared/ecom.service';
import {HttpClientModule} from '@angular/common/http';
import { SideFilterComponent } from './home/side-filter/side-filter.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import {CartService} from './shared/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    MyProfileComponent,
    ShippingComponent,
    PaymentComponent,
    SideFilterComponent,
    CartItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'product-details/:id', component: ProductDetailsComponent, pathMatch: 'full'},
      {path: 'cart', component: CartComponent},
      // {path: 'cart', component: CartComponent, outlet: 'rightSidebar'},
      {path: 'shipping', component: ShippingComponent, pathMatch: 'full'},
      {path: 'myprofile', component: MyProfileComponent, pathMatch: 'full'},
      {path: 'payment', component: PaymentComponent, pathMatch: 'full'}
    ])
  ],
  providers: [EcomService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
