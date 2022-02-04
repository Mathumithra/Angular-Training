import { Component, Input, OnInit } from '@angular/core';
//import { freemem } from 'os';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {
 @Input() Free = " "
 @Input() price =""
 @Input() User =""
 @Input() storage =""
 @Input() publicprojects =""
 @Input() Access = ""
 @Input() privateprojects =""
 @Input() support =""
 @Input() subdomain=""
 @Input() reports =""
 



 


  constructor() { }

  ngOnInit(): void {
    
  }

}
