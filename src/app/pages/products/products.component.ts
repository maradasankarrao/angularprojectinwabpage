import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  img1="assets/images/1122.jpg";
  img2="assets/images/images (2).jpg";
  img3="assets/images/samy-sm32.jpg";
  img4="assets/images/images.jpg";
  img5="assets/images/sankar.png";
  img6="assets/images/1122.jpg";
  img7="assets/images/samy-sm32.jpg";
  img8="assets/images/images (2).jpg";

  

cart=[
  {id:1,name:"samsang tv 1",price:15000,image:this.img1,dis:"20%",disp:"20%"},
  {id:2,name:"samsang tv 2",price:20000,image:this.img2,dis:"40%",disp:"40%"},
  {id:3,name:"samsang tv 3",price:25000,image:this.img3,dis:"60%",disp:"60%"},
  {id:4,name:"samsang tv 4",price:30000,image:this.img4,dis:"20%",disp:"20%"},
  {id:5,name:"samsang tv 5",price:30000,image:this.img5,dis:"30%",disp:"30%"},
  {id:6,name:"samsang tv 6",price:35000,image:this.img6,dis:"50%",disp:"50%"},
  {id:7,name:"samsang tv 7",price:40000,image:this.img7,dis:"10%",disp:"10%"},
  {id:8,name:"samsang tv 8",price:45000,image:this.img8,dis:"70%",disp:"70%"},
]
}
