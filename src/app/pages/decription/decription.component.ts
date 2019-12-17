import { Component, OnInit } from '@angular/core';
import{ CommonService}from 'src/app/common.service';
@Component({
  selector: 'app-decription',
  templateUrl: './decription.component.html',
  styleUrls: ['./decription.component.css']
})
export class DecriptionComponent implements OnInit {

  constructor(private share:CommonService) { }

  ngOnInit() {
  }

}
