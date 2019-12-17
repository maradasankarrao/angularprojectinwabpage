import { Component, OnInit } from '@angular/core';
import{ CommonService}from 'src/app/common.service';
@Component({
  selector: 'app-cheakout',
  templateUrl: './cheakout.component.html',
  styleUrls: ['./cheakout.component.css']
})
export class CheakoutComponent implements OnInit {

  constructor(private share:CommonService) { }

  ngOnInit() {
  }

}
