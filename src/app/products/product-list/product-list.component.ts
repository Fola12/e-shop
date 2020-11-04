import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: any[];
  

  message: string = "Hola Mundo!"

  @Output() productAdded = new EventEmitter();
 @Output() messageEvent = new EventEmitter<string>();

  constructor() { }


  addProductToCart(product) {
    this.productAdded.emit(product);
    window.alert('Your product has been added to the cart!');
  }

    sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
