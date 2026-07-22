export type Room = {
  id: string;
  title: string;
  city: string;
  destinationCity: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  host: string;
  verified: boolean;
  tags: string[];
  compatibility: number;
  reason: string[];
  distance: number;
  availability: string;
};

export const rooms: Room[] = [
  {
    id: "room-1",
    title: "Sunset Loft near USC",
    city: "Los Angeles",
    destinationCity: "Los Angeles",
    price: 1450,
    rating: 4.9,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    host: "Mia Alvarez",
    verified: true,
    tags: ["WiFi", "AC", "Parking", "Attached Bathroom"],
    compatibility: 92,
    reason: ["Same college", "Same move date", "Same budget", "Same lifestyle"],
    distance: 1.2,
    availability: "Available Jul 30",
  },
  {
    id: "room-2",
    title: "Sage Studio in Downtown",
    city: "San Francisco",
    destinationCity: "San Francisco",
    price: 1600,
    rating: 4.8,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    host: "Noah Singh",
    verified: true,
    tags: ["WiFi", "Study Desk", "Family Friendly"],
    compatibility: 88,
    reason: ["Same food", "Same religion", "Same gender preference"],
    distance: 0.8,
    availability: "Available Aug 10",
  },
  {
    id: "room-3",
    title: "Harbor Retreat for Professionals",
    city: "Seattle",
    destinationCity: "Seattle",
    price: 1750,
    rating: 4.7,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    host: "Ava Thompson",
    verified: true,
    tags: ["Parking", "AC", "Pet Friendly"],
    compatibility: 84,
    reason: ["Same move date", "Same city", "Same budget"],
    distance: 2.1,
    availability: "Available Aug 02",
  },
  {
    id: "room-4",
    title: "Cedar House with Shared Kitchen",
    city: "Austin",
    destinationCity: "Austin",
    price: 1320,
    rating: 4.9,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    host: "Priya Raman",
    verified: true,
    tags: ["Veg Friendly", "WiFi", "Attached Bathroom"],
    compatibility: 91,
    reason: ["Same college", "Same food", "Same religion"],
    distance: 1.7,
    availability: "Available Aug 01",
  },
];

export const notifications = [
  { title: "Match found", description: "A 92% compatible match is available in Seattle.", time: "2 min ago" },
  { title: "Payment success", description: "Your security deposit is confirmed.", time: "18 min ago" },
  { title: "Booking update", description: "Host shared house rules and arrival details.", time: "1 hr ago" },
];

export const chats = [
  { from: "Mia", message: "Hi! The room has a dedicated study corner and a quiet schedule.", time: "09:10" },
  { from: "You", message: "Perfect — I’m checking the move-in timeline now.", time: "09:12" },
  { from: "Mia", message: "You can move in on Aug 1 and use the parking slot.", time: "09:13" },
];

export const bookings = [
  { id: "BK-1024", room: "Sunset Loft near USC", status: "Upcoming", amount: "$1,450", date: "Jul 30 - Aug 10" },
  { id: "BK-1021", room: "Harbor Retreat", status: "Completed", amount: "$1,750", date: "Jun 18 - Jul 02" },
  { id: "BK-1018", room: "Cedar House", status: "Cancelled", amount: "$1,320", date: "May 21 - Jun 02" },
];

export const walletSummary = {
  credits: 820,
  referralRewards: 160,
  coupons: 3,
  paymentHistory: ["Security deposit", "Platform fee", "Referral bonus"],
};
