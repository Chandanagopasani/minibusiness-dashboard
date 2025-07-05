const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover {name}: {location}'s Top Choice for Quality",
  "{name} - The Heart of {location}'s Local Favorites",
  "{location}'s Hidden Gem: {name} Shines in 2025",
  "Experience Excellence at {name} in {location}",
  "Top Reasons {name} Stands Out in {location}",
  "{name} Sets a New Standard for Businesses in {location}",
  "Locals Love {name}: The Buzz Around {location}",
  "{name}: Making {location} Proud Since Day One",
  "Inside {name}: The Gem of {location}'s Business Scene",
  "Why Customers Flock to {name} in {location}",
  "From Good to Great: {name}'s Journey in {location}",
  "{name} Brings Big City Quality to {location}'s Heart",
  "What Sets {name} Apart in the Competitive {location} Market"
];

function getRandomHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace(/{name}/g, name).replace(/{location}/g, location);
}

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }
  const data = {
    rating: (4 + Math.random()).toFixed(3),
    reviews: Math.floor(100 + Math.random() * 100),
    headline: getRandomHeadline(name, location)
  };
  res.json(data);
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }
  res.json({ headline: getRandomHeadline(name, location) });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));