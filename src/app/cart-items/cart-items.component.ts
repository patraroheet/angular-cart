import {Component, EventEmitter, OnInit} from '@angular/core';
import {Input, Output} from '@angular/compiler/src/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Input() items;
  @Output() childClickTrigger = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateParent () {
    this.childClickTrigger.emit({
      id: 1,
      msg: 'I am Clicked'
    });
  }
}
