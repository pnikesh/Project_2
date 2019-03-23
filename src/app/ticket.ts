export interface Ticket {
    id:	number;
    TicketType:	string;
    Price: number;
    isRound: boolean;
    departureTimeTo:	string;
    arrivalTimeTo: string;
    departureTimeFrom:	string;
    arrivalTimeFrom: string;
    OrdeId: number;
    CustomerId: number;
    
}