# Dynamic Event Detail Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the event detail page display different concert data based on a URL query parameter, starting with Arctic Monkeys and Dua Lipa as a working proof of concept.

**Architecture:** Create a `data.js` file with concert objects keyed by ID. On `event.html` load, extract the `?id=` query parameter, look up the concert data, and populate the page dynamically using JavaScript. Update the first two homepage cards to link with concert IDs.

**Tech Stack:** Vanilla JavaScript, static HTML, JSON-like data structure

---

### Task 1: Create Concert Data File

**Files:**
- Create: `prototype/data.js`

- [ ] **Step 1: Create data.js with Arctic Monkeys concert object**

Create `/Users/flevour/Sites/flevour/concert-ticketing/prototype/data.js`:

```javascript
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
```

- [ ] **Step 2: Verify the file exists**

Run: `ls -la /Users/flevour/Sites/flevour/concert-ticketing/prototype/data.js`

Expected: File created successfully

---

### Task 2: Update event.html with Dynamic Population Script

**Files:**
- Modify: `prototype/event.html`

- [ ] **Step 1: Add data.js script tag to event.html**

In `event.html`, add this line inside the `<head>` tag after the styles.css link:

```html
<link rel="stylesheet" href="styles.css">
<script src="data.js"></script>
```

- [ ] **Step 2: Replace hardcoded title with dynamic content**

Change the `<title>` tag from:
```html
<title>Arctic Monkeys — June 12 @ MSG</title>
```

to:
```html
<title id="page-title">Arctic Monkeys — June 12 @ MSG</title>
```

- [ ] **Step 3: Update hero section to use data binding**

Replace the hardcoded `.event-hero-inner` section:

```html
<div class="event-hero-inner">
  <div class="kicker" id="hero-kicker">Live Concert</div>
  <h1 id="hero-artist">Arctic Monkeys</h1>
  <div class="meta-row">
    <div>
      <div class="label">Date & Time</div>
      <strong id="meta-datetime">Wed, Jun 12 · 8:00 PM</strong>
    </div>
    <div>
      <div class="label">Venue</div>
      <strong id="meta-venue">Madison Square Garden</strong>
    </div>
    <div>
      <div class="label">City</div>
      <strong id="meta-city">New York, NY</strong>
    </div>
  </div>
</div>
```

- [ ] **Step 4: Update about section to use data binding**

Replace the hardcoded about section with:

```html
<div>
  <h2>About this show</h2>
  <p id="about-text">Arctic Monkeys return to Madison Square Garden for an unforgettable evening of indie rock excellence. Fresh off their world tour, expect a setlist spanning their entire catalog from AM to the latest releases.</p>
</div>
```

- [ ] **Step 5: Update setlist section to use data binding**

Replace the setlist `<ol>` with:

```html
<div class="setlist">
  <h2>Typical Setlist</h2>
  <ol id="setlist-items">
    <li>Brianstorm</li>
    <li>Teddy Picker</li>
    <li>Do I Wanna Know?</li>
    <li>R U Mine?</li>
    <li>Pretty Visitors</li>
    <li>Bitch, Don't Kill My Vibe</li>
    <li>Four Out of Five</li>
    <li>Body Paint</li>
    <li>Tranquility Base Hotel & Casino</li>
    <li>Fluorescent Adolescent</li>
    <li>Mardy Bum</li>
    <li>I Bet You Look Good on the Dancefloor</li>
  </ol>
</div>
```

(This will be replaced by JavaScript, but keep the structure for now.)

- [ ] **Step 6: Update tier rows to use data binding**

Replace the `.tier-card` divs with:

```html
<div class="tier-card">
  <h3>Ticket Tiers</h3>
  <div id="tier-rows">
    <div class="tier-row">
      <div>
        <div class="name">Floor</div>
        <div class="sub">Pit access</div>
      </div>
      <div class="price">$189</div>
    </div>
    <div class="tier-row">
      <div>
        <div class="name">Lower Bowl</div>
        <div class="sub">Rows A–L</div>
      </div>
      <div class="price">$129</div>
    </div>
    <div class="tier-row">
      <div>
        <div class="name">Upper Bowl</div>
        <div class="sub">Rows 1–25</div>
      </div>
      <div class="price">$89</div>
    </div>
    <div class="tier-row">
      <div>
        <div class="name">Nosebleeds</div>
        <div class="sub">Rows 26+</div>
      </div>
      <div class="price">$54</div>
    </div>
    <div class="tier-row soldout">
      <div>
        <div class="name">VIP Package</div>
        <div class="sub">Meet & greet</div>
      </div>
      <div class="price">$399</div>
    </div>
  </div>
  <button class="btn btn-primary btn-block btn-lg" style="margin-top: 20px;">
    Select Seats
  </button>
  <a href="seats.html" style="display: none;">Select Seats</a>
</div>
```

- [ ] **Step 7: Replace the existing script at bottom with dynamic population script**

Replace the script at the bottom of the file (the one that listens to `.btn` click) with:

```javascript
<script>
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  function populateEvent() {
    const concertId = getQueryParam('id') || 'arctic-monkeys';
    const concert = concerts[concertId];

    if (!concert) {
      console.error('Concert not found:', concertId);
      return;
    }

    // Update title
    document.getElementById('page-title').textContent = `${concert.artist} — ${concert.date} @ ${concert.venue.split(' ')[0]}`;

    // Update hero section
    document.getElementById('hero-kicker').textContent = concert.kicker;
    document.getElementById('hero-artist').textContent = concert.artist;
    document.getElementById('meta-datetime').textContent = `${concert.date} · ${concert.time}`;
    document.getElementById('meta-venue').textContent = concert.venue;
    document.getElementById('meta-city').textContent = concert.city;

    // Update about text
    document.getElementById('about-text').textContent = concert.bio;

    // Update setlist
    const setlistOl = document.getElementById('setlist-items');
    setlistOl.innerHTML = '';
    concert.setlist.forEach(song => {
      const li = document.createElement('li');
      li.textContent = song;
      setlistOl.appendChild(li);
    });

    // Update tier rows
    const tierRows = document.getElementById('tier-rows');
    tierRows.innerHTML = '';
    concert.tiers.forEach(tier => {
      const tierDiv = document.createElement('div');
      tierDiv.className = `tier-row${tier.soldOut ? ' soldout' : ''}`;
      tierDiv.innerHTML = `
        <div>
          <div class="name">${tier.name}</div>
          <div class="sub">${tier.description}</div>
        </div>
        <div class="price">$${tier.price}</div>
      `;
      tierRows.appendChild(tierDiv);
    });
  }

  document.addEventListener('DOMContentLoaded', populateEvent);

  document.querySelector('.btn').addEventListener('click', () => {
    window.location.href = 'seats.html';
  });
</script>
```

- [ ] **Step 8: Verify the changes**

Open `prototype/event.html` in a browser and check that the Arctic Monkeys content is still visible (no data parameter means default to Arctic Monkeys).

---

### Task 3: Update index.html with Query Parameters for First Two Cards

**Files:**
- Modify: `prototype/index.html`

- [ ] **Step 1: Update Arctic Monkeys card link**

Change the first card from:
```html
<a href="event.html" class="card">
```

to:
```html
<a href="event.html?id=arctic-monkeys" class="card">
```

- [ ] **Step 2: Update Dua Lipa card link**

Change the second card from:
```html
<a href="event.html" class="card">
```

to:
```html
<a href="event.html?id=dua-lipa" class="card">
```

- [ ] **Step 3: Verify the changes**

Open `prototype/index.html` in a browser. Click on the Arctic Monkeys card and verify you're on `event.html?id=arctic-monkeys` with Arctic Monkeys data. Click back and click on the Dua Lipa card and verify you're on `event.html?id=dua-lipa` with Dua Lipa data.

Expected: Both show correct concert details.

---

### Task 4: Commit Changes

**Files:**
- `prototype/data.js` (new)
- `prototype/event.html` (modified)
- `prototype/index.html` (modified)

- [ ] **Step 1: Stage and commit all changes**

Run:
```bash
cd /Users/flevour/Sites/flevour/concert-ticketing && git add prototype/data.js prototype/event.html prototype/index.html && git commit -m "feat: make event detail page dynamic with query parameters

- Add data.js with concert objects for Arctic Monkeys and Dua Lipa
- Update event.html to read id parameter and populate concert details
- Update index.html to link first two cards with concert IDs"
```

Expected: Commit succeeds with message confirming 3 files changed.

---

## Plan Review

**Spec coverage:**
- ✅ Create data.js with 2 concert objects (Arctic Monkeys + Dua Lipa)
- ✅ Modify event.html to read `?id=` query parameter and populate dynamically
- ✅ Modify index.html to link first two cards with query parameters
- ✅ Other 6 cards remain unchanged, linking to static event.html

**Placeholder scan:** None found — all code is complete and ready to execute.

**Type consistency:** Concert data structure consistent across all tasks (id, artist, date, time, venue, city, bio, setlist, tiers).
