import {Component, OnInit} from '@angular/core';
import {EcomService} from '../shared/ecom.service';
import {Router} from '@angular/router';

export interface Product {
  ProductId: string;
  Category: string;
  MainCategory: string;
  TaxTarifCode: string;
  SupplierName: string;
  WeightMeasure: string;
  WeightUnit: string;
  Description: string;
  Name: string;
  DateOfSale: string;
  ProductPicUrl: string;
  Status: string;
  Quantity: number;
  UoM: string;
  CurrencyCode: string;
  Price: number;
  Width: number;
  Depth: number;
  Height: number;
  DimUnit: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cart: any[] = [];
  products: Product[];

  constructor(private ecomSvc: EcomService, private  router: Router) {

  }


  ngOnInit() {
    this.ecomSvc.getProductList().subscribe((res: Product[]) => {
      this.products = res;

    });
  }

  getValue(item: any) {
    console.log(item);
    this.cart.push(item);
    console.log(this.cart);
    this.router.navigate(['', {outlets: {'rightSidebar': 'cart'}}]);
  }

}
