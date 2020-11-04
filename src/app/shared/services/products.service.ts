import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  
  ngOnInit(): void {
   
  }

  constructor(private fire: AngularFirestore) { }

  cartProductList = [];

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

 

  getProducts() { 
  return this.fire.collection(`products`)
  }

  addProductToCart(product) {

    if( this.cartProductList.length == 0) {
      product.count = 1;
      this.cartProductList.push(product);
    }else {
      var repeat = false;
      for(var i= 0; i< this.cartProductList.length; i++){
          if(this.cartProductList[i].id == product.id){
            this.cartProductList[i].count++;
            repeat = true;
          }
      }
      if(!repeat) {
        product.count = 1;
        this.cartProductList.push(product);
      }
    }
   //let i = this.cartProductList.push(product);
  
   console.log(this.cartProductList);
   return this.cartProductList;

  }

  getCart(){
    return this.cartProductList;
  }

  calcTotal() {
    return this.cartProductList.reduce((acc, prod) => acc+= prod.count ,0)
  }
}
