import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllFlights() {
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flights');
  }

  getFlight(flightId) {
   // console.log(this.flight$)
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/flights/'+ flightId)
  }

  getCostomerHistoryByEmail(email){
    return null;
  }


  getVerificationCode(email) {
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/customers/code?email=' + email)
    //return this.http.get('https://localhost:44310/api/customers/code?email=' + email) 
  }

  getCustomerHistory(email){
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/tickets/ticketslist?email=' + email)
  }

  getCustomerByEmail(email){
    return this.http.get('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/customers/email?email=' + email)
  }

  addTicket(ticket){    

    const body = {ticketType: ticket.ticketType, 
                  price: ticket.price, 
                  isRound: ticket.isRound, 
                  departureTimeTo: ticket.departureTimeTo, 
                  arrivalTimeTo: ticket.arrivalTimeTo, 
                  departureTimeFrom: ticket.departureTimeFrom, 
                  arrivalTimeFrom: ticket.arrivalTimeFrom,
                  orderId: ticket.orderId,
                  customerId: ticket.customerId
                };
       return this.http.post('http://laptevphamproject-prod.us-east-1.elasticbeanstalk.com/api/Tickets', body); 
       //return this.http.post('https://localhost:44310/api/tickets', body);
       

  }
}
