const tours = [
  {
    id: "1",
    name: "Swiss Alps Grand Tour",
    category: "Mountain",
    price: 2100,
    rating: 4.9,
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    location: "Switzerland",
    country: "Switzerland",
    description: "Alpine glacier climbs, scenic Glacier Express railway ticket, luxury fondue dinners, and 5-star mountain resort stays.",
    groupSize: "Max 12 people",
    included: ["5-Star Hotel", "All Transfers", "Private Guide", "Breakfast & Dinners", "Mountain Excursions"]
  },
  {
    id: "2",
    name: "Maldives Overwater Bungalow",
    category: "Beach",
    price: 2450,
    rating: 5.0,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80",
    location: "Maldives",
    country: "Maldives",
    description: "Stay in ultra-luxurious private water villas with glass floor panels, direct ocean access, and all-inclusive gourmet dining.",
    groupSize: "Couple / Solo / Small Family",
    included: ["Water Villa", "Seaplane Transfer", "All-Inclusive Dining", "Snorkeling Equipment", "Sunset Cruise"]
  },
  {
    id: "3",
    name: "Kyoto Temple Trails",
    category: "Cultural",
    price: 1350,
    rating: 4.8,
    duration: "9 Days",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    location: "Japan",
    country: "Japan",
    description: "Explore UNESCO heritage shrines, walk through Arashiyama bamboo groves, and attend traditional geisha ceremonies in Gion.",
    groupSize: "Max 10 people",
    included: ["Traditional Ryokan & Hotels", "Bullet Train Pass", "Master Tea Ceremony", "Local Expert Guide", "Daily Breakfast"]
  },
  {
    id: "4",
    name: "Grand Canyon Helicopter Flyover",
    category: "Adventure",
    price: 1800,
    rating: 4.7,
    duration: "3 Days",
    image: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?auto=format&fit=crop&w=600&q=80",
    location: "USA",
    country: "USA",
    description: "Breathtaking panoramic helicopter flight over the rim, champagne sunset landing at canyon floor, and luxury ranch retreat.",
    groupSize: "Max 6 people",
    included: ["Helicopter Flights", "Luxury Glamping Ranch", "Private Ranger Guide", "Gourmet BBQ Dinner", "VIP Pickup"]
  },
  {
    id: "5",
    name: "Paris Eternal Romance & Seine Cruise",
    category: "Cultural",
    price: 1290,
    rating: 4.9,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    location: "France",
    country: "France",
    description: "Private Louvre museum tour, priority Eiffel Tower dining, private Seine yacht voyage, and Saint-Germain shopping.",
    groupSize: "Max 8 people",
    included: ["Boutique Parisian Hotel", "Private Museum Tickets", "Private Seine Boat", "Daily Breakfast", "Airport Chauffeur"]
  },
  {
    id: "6",
    name: "Dubai Sky Dunes & Luxury Safari",
    category: "Adventure",
    price: 1850,
    rating: 4.8,
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    location: "UAE",
    country: "UAE",
    description: "Dune bashing in high-end Land Cruisers, desert starlight dinner with falconry show, and Burj Khalifa VIP top observation deck.",
    groupSize: "Max 10 people",
    included: ["5-Star Marina Hotel", "Desert Safari VIP", "Burj Khalifa Top Access", "Yacht Cruise", "All Meals"]
  }
];

module.exports = tours;
