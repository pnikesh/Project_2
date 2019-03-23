import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { Ticket } from '../ticket';
import { concat } from 'rxjs/internal/observable/concat';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { checkNoChangesNode } from '@angular/core/src/view/view';

declare var $: any;

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

flightId: number;
flight$: any;
showForm = false;
showCodeField = false;
isNotValid = false;
email: string = '';
fullName: string = '';
isCodeEntered = false;
enteredCode: number;
chosen = true;
code: object;
codeIncorrect = false;

public customer: any;
//public ticket: Ticket;
ticket: any;
public customerId: number;

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) {
    this.route.params.subscribe( params => this.flightId = params.id );
   }

  ngOnInit() {
    this.data.getFlight(this.flightId).subscribe(
      data => this.flight$ = data      

    );
    $("button").click(function(){
     // var div = $("div");       
     // div.animate({left: '100px'}, "slow");
     // div.animate({fontSize: '5em'}, "slow");
  });
  }

  
  onChoose() {
    let chosenFlight = this.flight$;
    this.showForm = true;
    this.chosen = false;
    console.log(chosenFlight);
  }

  onDiscard(){
    this.router.navigate(['/home']);
  }

  onConfirm(){

    if (this.email != "" && this.fullName != "") {
      this.showForm = false;
      this.showCodeField = true;

      this.data.getVerificationCode(this.email).subscribe(
        data => {
          this.code = data;
          console.log(this.code); 

        })

    }else {
      this.isNotValid = true;
    }

  }

  onCodeEntered(){

    //debugger
    if (this.enteredCode != undefined ) {

    this.checkCode(this.code, this.enteredCode);

    console.log("ID " + this.customerId);

   }else 
   this.isCodeEntered = true;
  }

  checkCode(code, enteredCode) {

    if (code.code == enteredCode) {
      //console.log("match")
      //
      let newCustomer = {
        fullname: this.fullName,
        email: this.email
      }

      /*
      this.data.addCustomer(newCustomer).subscribe(
        data => this.customer = data
      )
       */ 
      

     // var id = this.getCustomerId(this.email);


      // Retrieving customer from back end

        this.data.getCustomerByEmail(this.email).subscribe(
          data => {
            this.customer = data;
            //this.customerId = this.customer;
            console.log(this.customer);
          }
        )
       
        this.addTicketToDB();
       //       debugger
       // this.router.navigate(['/payment']);

      }

      ///////////////////////////////////////

      else
      //console.log("not match")
      this.codeIncorrect = true;

  }

  onBuy(){

    let c = this.customer;

    this.ticket = {
      ticketType: "Economy",
      price: this.flight$.ticketPrice,
      isRound: false,
      departureTimeFrom: this.flight$.departureTime,
      arrivalTimeFrom: this.flight$.arrivalTime,
      departureTimeTo: "",
      arrivalTimeTo: "",
      orderId: 1000,
      customerId: this.customer.id

    };

      this.data.addTicket(this.ticket).subscribe(
        data => this.ticket = data
      )

  }
  addTicketToDB(){
          // Adding ticket to DB 

          var cust = this.customer;
        
       // this.ticket.customerId = this.customer.id;
       
        
      /////////////////////////
  }
 

}
