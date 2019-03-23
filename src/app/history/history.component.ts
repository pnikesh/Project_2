import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private router: Router, private data: DataService) { }

  email: String;
  showForm: boolean = true;
  showCodeField: boolean = false;
  isNotValid = false;
  code: object;

  codeReceived: boolean = false;
  enteredCode: number;
  isCodeEntered: boolean = false;
  codeIncorrect: boolean = false;


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
      //console.log("match")
      this.router.navigate(['/payment']);
      else
      //console.log("not match")
      this.codeIncorrect = true;

  }
 

  onDiscard() {

    this.router.navigate(['home'])
  }

}
