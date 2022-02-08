import { Component,Input, OnInit } from '@angular/core';

interface PriceCard{
  Free : String,
  price : String,
 User : string,
 storage : string,
 publicprojects : string,
 Access : string,
 privateprojects : string,
 support : string,
 subdomain : string,
 reports : string
/*   id : Number,
  category : String,
  userType : String,
  amount : String,
  Validity : String */
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() priceCardData:PriceCard ={
    Free :"",
  price : "",
 User :"",
 storage :"",
 publicprojects :"",
 Access :"",
 privateprojects :"",
 support :"",
 subdomain:"",
 reports :""
 



   /*  id : 0,
    category : '',
    userType : '',
    amount : '',
    Validity : '' */
  }

  ngOnInit(): void {
  }

}