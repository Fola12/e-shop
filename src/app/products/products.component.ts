import { ReturnStatement } from '@angular/compiler';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../shared/services/products';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  @Output() productAdded = new EventEmitter();

  product = [];
  cartProductList = [];
  message:string;

  ngOnInit(): void {
    console.log(this.getCoffeeOrders());
    this.productService.currentMessage.subscribe(message => this.message = message)
  }

  
  getCoffeeOrders(){
    this.productService.getProducts().get().subscribe((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
         this.product.push(doc.data())
          console.log(this.product);
          
      });
  }); 
  
    
  }

  addProductToCart(product) {
  this.cartProductList =this.productService.addProductToCart(product);
   console.log( this.cartProductList);
   
  }

  receiveMessage($event) {
    this.message = $event
  }
 /* calcTotal() {
    return this.product.reduce((acc, prod) => acc+= prod.count ,0)
  }*/
  
}
