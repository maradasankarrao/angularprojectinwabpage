import { Component, OnInit } from '@angular/core';
import{ CommonService}from 'src/app/common.service';
import { ReturnStatement } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private share:CommonService) { }

  ngOnInit() {
  }
// products=this.share.samsungproductos
getDataCart(){
  return this.share.samsungproductos;
}
addIteam(p){
  this.share.cartproducts.push(p)
}
}
