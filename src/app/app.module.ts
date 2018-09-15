import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    MyProfileComponent,
    ShippingComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product-details', component: ProductDetailsComponent, pathMatch: 'full' },
      { path: 'cart', component: CartComponent, pathMatch: 'full' },
      { path: 'shipping', component: ShippingComponent, pathMatch: 'full' },
      { path: 'myprofile', component: MyProfileComponent, pathMatch: 'full' },
      { path: 'payment', component: PaymentComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
