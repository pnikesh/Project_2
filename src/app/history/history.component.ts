import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from "@angular/router";
import { Ticket } from '../ticket';
//import { HistoryPipe } from '@angular/common/comm';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private router: Router, private data: DataService) { }

  months = [
  {'name': 'Jan'}, 
  {'name': 'Feb'}, 
  {'name': 'Mar'}, 
  {'name': 'Apr'}, 
  {'name': 'May'}, 
  {'name': 'Jun'}, 
  {'name': 'Jul'}, 
  {'name': 'Aug'}, 
  {'name': 'Sep'}, 
  {'name': 'Oct'}, 
  {'name': 'Nov'}, 
  {'name': 'Dec'}
];

years = [
  {'name': 2018}, 
  {'name': 2019} 
];

selectedMonth = "Jan";
selectedYear = 2019;

  email: String;
  showForm: boolean = true;
  showCodeField: boolean = false;
  isNotValid = false;
  code: object;

  codeReceived: boolean = false;
  enteredCode: number;
  isCodeEntered: boolean = false;
  codeIncorrect: boolean = false;

  showList: boolean = false;

  tickets: any;


  ngOnInit() {
  }

  onEmailEntered(){

    //debugger
    if (this.email != "") {
      this.showForm = false;
      this.showCodeField = true;
      

      this.data.getVerificationCode(this.email).subscribe(
        data => {
          this.code = data;
          console.log(this.code); 
          this.codeReceived = true;

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

      this.showList = true;
      else
      //console.log("not match")
      this.codeIncorrect = true;

      // Getting customer's history
      this.data.getCustomerHistory(this.email).subscribe(
        data => {
          this.tickets = data;
          console.log(this.tickets);
          let vals = Object.entries(this.tickets);
        //console.log(this.departureCityField, vals)
        }
      )

  }
 

  onDiscard() {

    this.router.navigate(['home'])
  }

  onMonthChosen(event){

  }

  onYearChosen(event){
    this.selectedYear = event.target.value.split(':')[1];
  }

}
