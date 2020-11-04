import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() products: any[];

  @Output() total = new EventEmitter();

  cartProductList;
  message:string;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.currentMessage.subscribe(message => this.message = message)
    this.cartProductList = this.productService.getCart()
  }

 getTotal(){
  return this.productService.calcTotal()
 }

 

}
