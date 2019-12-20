import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  indexall=[];
  img1="assets/images/1122.jpg";
  img2="assets/images/images (2).jpg";
  img3="assets/images/samy-sm32.jpg";
  img4="assets/images/images.jpg";
  img5="assets/images/sankar.png";
  img6="assets/images/1122.jpg";
  img7="assets/images/samy-sm32.jpg";
  img8="assets/images/images (2).jpg";
  samsungproductos=[
    {id:1,name:"samsang tv 1",price:15000,image:this.img1,discount:20,size:"26 in",quantity:1,discountprice:0},
    {id:2,name:"samsang tv 2",price:20000,image:this.img2,discount:40,size:"32 in",quantity:1,discountprice:0},
    {id:3,name:"samsang tv 3",price:25000,image:this.img3,discount:30,size:"42 in",quantity:1,discountprice:0},
    {id:4,name:"samsang tv 4",price:30000,image:this.img4,discount:20,size:"44 in",quantity:1,discountprice:0},
    {id:5,name:"samsang tv 5",price:30000,image:this.img5,discount:30,size:"48 in",quantity:1,discountprice:0},
    {id:6,name:"samsang tv 6",price:35000,image:this.img6,discount:30,size:"52 in",quantity:1,discountprice:0},
    {id:7,name:"samsang tv 7",price:40000,image:this.img7,discount:20,size:"55 in",quantity:1,discountprice:0},
    {id:8,name:"samsang tv 8",price:45000,image:this.img8,discount:70,size:"72 in",quantity:1,discountprice:0},
  ]

}
