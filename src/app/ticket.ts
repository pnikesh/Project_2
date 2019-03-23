export interface Ticket {
    id:	number;
    ticketType:	string;
    price: number;
    isRound: boolean;
    departureTimeTo:	string;
    arrivalTimeTo: string;
    departureTimeFrom:	string;
    arrivalTimeFrom: string;
    ordeId: number;
    customerId: number;
    
}