import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.scss']
})
export class PaymentpageComponent implements OnInit {

  ccnum: number;
  ismorenumber=false;
  cname:string='';
  city:string='';
  fname:string='';
  adr:string='';
  email:string='';
  state:string='';
  zip:string='';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onpay(){
    if(this.cname.trim()=="" || this.email.trim()=="" || this.city.trim()=="" || this.fname.trim()=="" || this.adr.trim()=="" || this.state.trim()==""||this.zip.trim()=="") 
    {
      this.ismorenumber=true;
    }
    else
    {
    this.router.navigate(['/book_confirmation']);
    }
  }

  
}

