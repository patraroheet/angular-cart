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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    MyProfileComponent,
    ShippingComponent,
    PaymentComponent,
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
  providers: [EcomService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
