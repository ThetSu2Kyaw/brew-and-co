export interface Event {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    title: "Open Mic Night",
    date: "Every Friday",
    time: "7:00 PM – 10:00 PM",
    description:
      "Bring your voice, your poetry, or your instruments. Our cozy stage is open to all — from first-timers to seasoned performers.",
    image: "/images/events/open-mic-night.webp",
  },
  {
    title: "Coffee Day",
    date: "Last Saturday monthly",
    time: "10:00 AM – 4:00 PM",
    description:
      "A celebration of all things coffee. Cupping sessions, brew demonstrations, and a chance to meet the roasters behind your favourite beans.",
    image: "/images/events/coffee-day.webp",
  },
  {
    title: "Online Tasting Session",
    date: "Every Saturday",
    time: "10:00 AM – 11:30 AM",
    description:
      "Join us from home as we taste through three single-origin coffees. A tasting kit is delivered to your door — just add water.",
    image: "/images/events/online-tasting.webp",
  },
];
