import { Component, OnInit, Input } from '@angular/core';
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
items=this.share.samsungproductos
  ngOnInit() {
  }
  addIteam(s:any){
    this.share.indexall.push(s);
  }
  discountpriceadd(a:number,b:number){
     const discountprice=(a*(100-b))/100;
     return discountprice
  }

}
