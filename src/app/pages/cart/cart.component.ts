import { Component, OnInit } from '@angular/core';
import{ CommonService}from 'src/app/common.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
 
  constructor(private share:CommonService) { }
  // listcart=[]
  // binding=""
  // Quantityadd="";
  list=this.share.samsungproductos
  models=this.share.indexall;
  b:number=0;
  ngOnInit() {
    for (let val of this.models) {
      this.b+=(val.quantity*val.price)    
}
}
  removeCartList(c:number){
    this.models.splice(c,1);
  }
}
