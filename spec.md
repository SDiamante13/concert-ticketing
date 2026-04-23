# Concert Ticketing — Prototype Spec

A concert ticketing site with big acts and high volume needs an elastic solution to sell tickets.

## Users: 

- thousand of concurrent users, bursts of up to 10,000/second when tickets go on sale

## Requirements:

- allow concurrent ticket buying
- do not sell a seat more than once!
- shoppers can see an overview of remaining seats
- Additional Context:
- consider an implementation in both Space Based and Microservices architecture style
- identify the tradeoffs for each solution


## Scope
Hi-fi HTML wireframes for the core fan buyer flow on desktop web. Non-functional — links navigate between static pages only.

## User
Fan buying tickets.

## Flow
1. **Discover** (`index.html`) — search + curated browse
2. **Event detail** (`event.html`) — artist, date, venue, ticket tiers
3. **Seat selection** (`seats.html`) — interactive venue map with tiers
4. **Checkout** (`checkout.html`) — order summary, payment, hold timer
5. **Ticket** (`ticket.html`) — confirmation + QR wallet

## Visual language
- Dark theme, concert-poster aesthetic
- System font stack + display face for headings
- Bold type, sharp edges, accent color for CTAs
- Imagery placeholders via CSS gradients

## Not in scope
Login/auth, account/order history, resale, transfers, artist tools, venue tools, mobile layouts, real data, real payments.

