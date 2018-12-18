import {Injectable} from '@angular/core';

@Injectable()
export class CartService {

  private cart: any = {
    items: [],
    count: 0,
    total: 0
  };

  constructor() {
  }

  addToCart(p) {
    this.cart.items.push(p);
    this.cart.count += 1;
    this.cart.total += parseInt(p.Price, 10);
  }

  updateCart(id, flag, qty) {
    let pro;
    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].ProductId === id) {
        pro = this.cart.items[i];
        if (flag === 'increment') {
          this.cart.count += qty;
          this.cart.total += (qty * pro.Price);
          this.cart.items[i].Quantity += 1;
        }
        if (flag === 'decrement' && pro.Quantity > 1) {
          this.cart.count -= qty;
          this.cart.total -= (qty * pro.Price);
          this.cart.items[i].Quantity -= 1;
        }

      }

    }
    return this.cart;
  }
  removeFromCart(id) {
    let pro;
    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].ProductId === id) {
        pro = this.cart.items[i];
        this.cart.count -= pro.Quantity;
        this.cart.total -= (pro.Quantity * pro.Price);
        this.cart.items.splice(i, 1);

      }
    }
    return this.cart;
  }


  getCart() {
    return this.cart;
  }
}
