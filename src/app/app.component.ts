import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
interface PriceCard{
  Free : string,
  price : string,
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priceCards';
  priceCards:Array<PriceCard> = [{
    Free :'Free',
        price :"0$" ,
        User :"Single User" ,
        storage :"5GB Storage",
        publicprojects:"Unlimited Public Projects",
        Access:"Community Access",
        privateprojects:"Unlimited Private Projects",
        support:"Dedicate Phone Support" ,
        subdomain:"Free Subdomain",
       reports:"Monthly Status Reports"
  },
  {
    Free :"Plus" ,
  price :"9$" ,
  User : "5 Users",
  storage:"50GB Storage ",
  publicprojects:"Unlimited Public Projects" ,
  Access:"Community Access",
  privateprojects:"Unlimited Private Projects",
  support:"Dedicate phone Support",
  subdomain:"Free Subdomain" ,
  reports:"Monthly Status Reports"
  },
  {
    Free :"Pro" ,
    price :"49$ " ,
    User :"Unlimited User" ,
    storage:"150GB Storage",
     publicprojects:"Unlimited Public Projects",
     Access:"Community Access",
     privateprojects:"Unlimited Private Projects",
     support:"Dedicate phone Support",
      subdomain:" Unlimited Free Subdomain" ,
   reports:"Monthly Status Reports"
  }
  /* {
    id : 1,
    category : 'FREE',
    userType : 'single user',
    amount : '$0/month',
    Validity : '15 days'
  },*/
  /*

  {
    id : 2,
    category : 'PLUS',
    userType : '5 Users',
    amount : '$9/month',
    Validity : '1 Year'
  },*/
  /*{
    id : 3,
    category : 'PRO',
    userType : 'Unlimited Users',
    amount : '$49/month',
    Validity : '5 Years'
  } */
]

}





  
