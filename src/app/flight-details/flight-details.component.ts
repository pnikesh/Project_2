import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from 'rxjs/internal/observable/concat';
declare var $: any;

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

flightId: number;
flight$: object;
showForm = false;
showCodeField = false;
isNotValid = false;
email: string = '';
fullName: string = '';
isCodeEntered = false;
enteredCode: number;

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
    console.log(chosenFlight);
  }

  onDiscard(){
    this.router.navigate(['/home']);
  }

  onConfirm(){

    if (this.email != "" && this.fullName != "") {
      this.showForm = false;
      this.showCodeField = true;
    }else {
      this.isNotValid = true;
    }
  
  }

  onCodeEntered(){
   if (this.enteredCode != undefined ) {

   }else 
   this.isCodeEntered = true;
  }
 

}
