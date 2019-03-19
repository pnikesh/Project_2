import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.scss']
})
export class PaymentpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onpay(){
    this.router.navigate(['/book_confirmation']);
  }
  
}

