import { Ticket } from './Ticket';

function tickets(arrInfo: string[], criteria: string): Ticket[] {
    let arrTickets: Ticket[] = [];
        
    arrInfo.forEach(line => {
        const [destination, destinationPrice, status] = line.split('|');
        const price = Number(destinationPrice);

        const newTicket = new Ticket(destination, price, status);
        arrTickets.push(newTicket);
    });

    let sortedTickets: Ticket[] = [];
    
    switch (criteria) {
        case 'destination':
            sortedTickets = arrTickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            sortedTickets = arrTickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            sortedTickets = arrTickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }

    return sortedTickets;
}

console.log(tickets([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'destination'));

// console.log(tickets([
//     'Philadelphia|94.20|available',
//      'New York City|95.99|available',
//      'New York City|95.99|sold',
//      'Boston|126.20|departed'
//     ],
//     'status'));