import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Product} from '../home/home.component';
import {EcomService} from '../shared/ecom.service';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id;
  product;
  products: Product[];


  constructor(private route: ActivatedRoute, private ecomSvc: EcomService, private cartSvc: CartService) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
      }
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  addToCart(product) {
    this.cartSvc.addToCart(product);
  }

  loadProducts() {
    this.ecomSvc.getProductList().subscribe((res: Product[]) => {
      this.products = res;
      if (this.id) {
        this.products.map(item => {
          if (item.ProductId === this.id) {
            this.product = item;
          }
        });
      }
      console.log(this.product);
    })
  };
}



