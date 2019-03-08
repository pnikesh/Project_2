import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
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
flight$: object;
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

    if (this.enteredCode != undefined ) {

    this.checkCode(this.code, this.enteredCode);

   }else 
   this.isCodeEntered = true;
  }

  checkCode(code, enteredCode) {

    if (code.code == enteredCode)
      //console.log("match")
      this.router.navigate(['/book_confirmation']);
      else
      //console.log("not match")
      this.codeIncorrect = true;

  }
 

}
