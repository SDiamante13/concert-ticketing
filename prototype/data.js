const concerts = {
  'arctic-monkeys': {
    id: 'arctic-monkeys',
    artist: 'Arctic Monkeys',
    kicker: 'Live Concert',
    date: 'Wed, Jun 12',
    time: '8:00 PM',
    venue: 'Madison Square Garden',
    city: 'New York, NY',
    bio: 'Arctic Monkeys return to Madison Square Garden for an unforgettable evening of indie rock excellence. Fresh off their world tour, expect a setlist spanning their entire catalog from AM to the latest releases. Don\'t miss one of the most electrifying live acts of our time. VIP packages include exclusive merchandise and early entry.',
    setlist: [
      'Brianstorm',
      'Teddy Picker',
      'Do I Wanna Know?',
      'R U Mine?',
      'Pretty Visitors',
      'Bitch, Don\'t Kill My Vibe',
      'Four Out of Five',
      'Body Paint',
      'Tranquility Base Hotel & Casino',
      'Fluorescent Adolescent',
      'Mardy Bum',
      'I Bet You Look Good on the Dancefloor'
    ],
    tiers: [
      { name: 'Floor', description: 'Pit access', price: 189, soldOut: false },
      { name: 'Lower Bowl', description: 'Rows A–L', price: 129, soldOut: false },
      { name: 'Upper Bowl', description: 'Rows 1–25', price: 89, soldOut: false },
      { name: 'Nosebleeds', description: 'Rows 26+', price: 54, soldOut: false },
      { name: 'VIP Package', description: 'Meet & greet', price: 399, soldOut: true }
    ]
  },
  'dua-lipa': {
    id: 'dua-lipa',
    artist: 'Dua Lipa',
    kicker: 'Live Concert',
    date: 'Wed, Jul 24',
    time: '7:30 PM',
    venue: 'Barclays Center',
    city: 'Brooklyn, NY',
    bio: 'Dua Lipa takes the stage at Barclays Center for an electrifying pop experience. With chart-topping hits and stunning production, this show promises an unforgettable night of energy and artistry. VIP packages include premium seating and exclusive access to the merchandise area.',
    setlist: [
      'Physical',
      'Levitating',
      'Don\'t Start Now',
      'New Rules',
      'Break My Heart',
      'Blow Your Mind (Mwah)',
      'Hotter Than Hell',
      'Garden (Say It Like Dat)',
      'Be the One',
      'Thinking \'Bout You',
      'Lost in Your Light',
      'One Kiss'
    ],
    tiers: [
      { name: 'Floor', description: 'Pit access', price: 225, soldOut: false },
      { name: 'Lower Bowl', description: 'Rows A–M', price: 145, soldOut: false },
      { name: 'Upper Bowl', description: 'Rows 1–30', price: 105, soldOut: false },
      { name: 'Balcony', description: 'Premium sightlines', price: 125, soldOut: false },
      { name: 'VIP Package', description: 'Meet & greet + merchandise', price: 450, soldOut: false }
    ]
  }
};
