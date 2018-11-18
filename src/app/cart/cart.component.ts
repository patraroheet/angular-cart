import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = {
    items: [],
    count: 0,
    total: 0
  };

  constructor() {
  }

  ngOnInit() {
    this.cart.items.push({
      'ProductId': 'HT-1002',
      'Category': 'Laptops',
      'MainCategory': 'Computer Systems',
      'TaxTarifCode': '1',
      'SupplierName': 'Very Best Screens',
      'WeightMeasure': 4.2,
      'WeightUnit': 'KG',
      'Description': 'Notebook Basic 18 with 2,80 GHz quad core, 18" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',
      'Name': 'Notebook Basic 18',
      'DateOfSale': '2017-01-07',
      'ProductPicUrl': '../assets/img/HT-1002.jpg',
      'Status': 'Available',
      'Quantity': 10,
      'UoM': 'PC',
      'CurrencyCode': 'EUR',
      'Price': 1570,
      'Width': 28,
      'Depth': 19,
      'Height': 2.5,
      'DimUnit': 'cm'
    });
    console.log(this.cart);


  }



}
